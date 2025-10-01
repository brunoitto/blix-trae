
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { RefreshCw, ChevronRight, Bot } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { 
  Sidebar, 
  SidebarProvider, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarHeader, 
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar";

const DashboardPage = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isWhatsAppConnected, setIsWhatsAppConnected] = useState(false);
  const [isCalendarConnected, setIsCalendarConnected] = useState(false);
  const [whatsAppName, setWhatsAppName] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [lastConnectionTime, setLastConnectionTime] = useState(null);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');
  const [aiAgentEnabled, setAiAgentEnabled] = useState(false);
  
  // Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      try {
        // Check if there is a stored WhatsApp connection
        const storedConnection = localStorage.getItem('whatsappConnection');
        if (storedConnection) {
          const connectionData = JSON.parse(storedConnection);
          setWhatsAppName(connectionData.name || '');
          setIsWhatsAppConnected(connectionData.connected || false);
          setConnectionStatus(connectionData.status || 'disconnected');
          setLastConnectionTime(connectionData.lastConnected || null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Erro ao carregar dados");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const handleWhatsAppConnect = async () => {
    if (!whatsAppName.trim()) {
      toast.error("Por favor, insira um nome para o WhatsApp");
      return;
    }
    
    setIsConnecting(true);
    
    try {
      const response = await fetch('https://paineln8n.blix4you.com/webhook-test/criar-instacia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: whatsAppName })
      });
      
      if (!response.ok) {
        throw new Error('Erro ao conectar com o WhatsApp');
      }
      
      const imageData = await response.text();
      setQrCodeData(imageData);
      setShowQRCode(true);
      setConnectionStatus('awaiting_scan');
      toast.success('QR Code gerado com sucesso!');
    } catch (error) {
      console.error("Error connecting WhatsApp:", error);
      toast.error("Erro ao conectar WhatsApp. Tente novamente.");
      setConnectionStatus('failed');
    } finally {
      setIsConnecting(false);
    }
  };
  
  const handleQRCodeScanned = () => {
    setShowQRCode(false);
    setIsWhatsAppConnected(true);
    setConnectionStatus('connected');
    const now = new Date();
    setLastConnectionTime(now.toISOString());
    
    // Store connection data in localStorage
    localStorage.setItem('whatsappConnection', JSON.stringify({
      name: whatsAppName,
      connected: true,
      status: 'connected',
      lastConnected: now.toISOString()
    }));
    
    toast.success("WhatsApp conectado com sucesso!");
  };
  
  const handleReconnectWhatsApp = () => {
    setIsWhatsAppConnected(false);
    setConnectionStatus('reconnecting');
    handleWhatsAppConnect();
  };
  
  const handleGoogleCalendarConnect = () => {
    setIsConnecting(true);
    
    // In a real app, this would redirect to Google OAuth
    setTimeout(() => {
      setIsCalendarConnected(true);
      toast.success("Google Calendar conectado com sucesso!");
      setIsConnecting(false);
    }, 1500);
  };
  
  const getStatusBadgeClass = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'bg-green-100 text-green-800';
      case 'disconnected':
        return 'bg-gray-100 text-gray-800';
      case 'awaiting_scan':
        return 'bg-yellow-100 text-yellow-800';
      case 'reconnecting':
        return 'bg-blue-100 text-blue-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getStatusText = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'Conectado';
      case 'disconnected':
        return 'Desconectado';
      case 'awaiting_scan':
        return 'Aguardando escaneamento do QR Code';
      case 'reconnecting':
        return 'Reconectando';
      case 'failed':
        return 'Falha na conexão';
      default:
        return 'Desconhecido';
    }
  };

  const renderContent = () => {
    switch(activeView) {
      case 'ai-agent':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Agente IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold text-lg">Status do Agente IA</h3>
                    <p className="text-gray-600 text-sm">
                      {aiAgentEnabled ? 'O agente IA está ativo e pronto para atender.' : 'O agente IA está desativado.'}
                    </p>
                  </div>
                  <Switch
                    checked={aiAgentEnabled}
                    onCheckedChange={async (checked) => {
                      try {
                        const response = await fetch('https://panneln8n.blix4you.com/webhook-test/a417d8c6-9918-4c27-8e49-d042c0849952', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({ 
                            action: checked ? 'enable' : 'disable',
                            timestamp: new Date().toISOString()
                          })
                        });
                        
                        if (response.ok) {
                          setAiAgentEnabled(checked);
                          toast.success(checked ? 'Agente IA ativado!' : 'Agente IA desativado!');
                        } else {
                          toast.error('Erro ao atualizar status do agente IA');
                        }
                      } catch (error) {
                        console.error('Erro ao chamar webhook:', error);
                        toast.error('Erro ao atualizar status do agente IA');
                      }
                    }}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Conversas Ativas</h4>
                      <p className="text-2xl font-bold text-blue-600">12</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Mensagens Processadas</h4>
                      <p className="text-2xl font-bold text-green-600">248</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Taxa de Resolução</h4>
                      <p className="text-2xl font-bold text-purple-600">89%</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-3">Informações do Agente</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Modelo:</span>
                      <span className="ml-2 font-medium">GPT-4 Turbo</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Idioma:</span>
                      <span className="ml-2 font-medium">Português</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Última atualização:</span>
                      <span className="ml-2 font-medium">Hoje, 14:30</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Status:</span>
                      <span className={`ml-2 font-medium ${aiAgentEnabled ? 'text-green-600' : 'text-red-600'}`}>
                        {aiAgentEnabled ? 'Online' : 'Offline'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case 'dashboard':
      default:
        return (
          <>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Bem-vindo ao seu Painel Blix4You</h2>
              <p className="text-gray-600 mb-6">
                Configure seu assistente inteligente conectando seu WhatsApp e Google Calendar para ativar sua infraestrutura de IA no atendimento.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Conexão do WhatsApp</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeClass()}`}>
                      {getStatusText()}
                    </span>
                  </div>
                  
                  {isWhatsAppConnected && (
                    <div className="mb-4">
                      <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-green-700 font-medium">WhatsApp conectado</span>
                        </div>
                        <p className="text-sm text-green-600">
                          Nome: <span className="font-medium">{whatsAppName}</span>
                        </p>
                        {lastConnectionTime && (
                          <p className="text-sm text-green-600">
                            Última conexão: <span className="font-medium">
                              {new Date(lastConnectionTime).toLocaleString()}
                            </span>
                          </p>
                        )}
                        <Button 
                          onClick={handleReconnectWhatsApp} 
                          className="mt-3 bg-green-600 hover:bg-green-700 text-white flex items-center"
                          size="sm"
                        >
                          <RefreshCw className="h-4 w-4 mr-1" />
                          Reconectar
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {!isWhatsAppConnected && !showQRCode && (
                    <div className="mb-4">
                      <label htmlFor="whatsapp-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome do seu WhatsApp
                      </label>
                      <Input 
                        id="whatsapp-name"
                        value={whatsAppName}
                        onChange={(e) => setWhatsAppName(e.target.value)}
                        placeholder="Digite um nome para identificação"
                        className="w-full"
                      />
                    </div>
                  )}
                  
                  {showQRCode ? (
                    <div className="text-center">
                      <p className="mb-4 text-sm text-gray-600">Escaneie o QR Code com seu WhatsApp:</p>
                      <div className="bg-white border rounded-lg p-4 inline-block mb-4">
                        <img 
                          src={`data:image/png;base64,${qrCodeData}`}
                          alt="WhatsApp QR Code"
                          className="h-48 w-48 object-contain"
                        />
                      </div>
                      <div className="flex justify-between">
                        <Button 
                          variant="outline"
                          onClick={() => setShowQRCode(false)}
                          className="text-red-500 border-red-200 hover:bg-red-50"
                        >
                          Cancelar
                        </Button>
                        <Button onClick={handleQRCodeScanned}>
                          Já escaneei
                        </Button>
                      </div>
                    </div>
                  ) : !isWhatsAppConnected && (
                    <Button 
                      onClick={handleWhatsAppConnect} 
                      disabled={isConnecting || !whatsAppName.trim()}
                      className="w-full cta-button"
                    >
                      {isConnecting ? "Conectando..." : "Conectar WhatsApp"}
                    </Button>
                  )}
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Conectar Google Calendar</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Integre com o Google Calendar para gerenciar agendamentos de forma inteligente.
                      </p>
                    </div>
                  </div>
                  
                  {isCalendarConnected ? (
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-blue-700">Google Calendar conectado com sucesso!</span>
                    </div>
                  ) : (
                    <Button 
                      onClick={handleGoogleCalendarConnect} 
                      disabled={isConnecting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {isConnecting ? "Conectando..." : "Conectar Google Calendar"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-600">Atendimentos</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Hoje</span>
                </div>
                <p className="text-3xl font-bold text-blix-dark-blue">0</p>
                <p className="text-sm text-gray-500 mt-1">Conecte seu WhatsApp para começar</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-600">Agendamentos</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Este mês</span>
                </div>
                <p className="text-3xl font-bold text-blix-dark-blue">0</p>
                <p className="text-sm text-gray-500 mt-1">Conecte o Google Calendar para começar</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-600">Leads Gerados</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Este mês</span>
                </div>
                <p className="text-3xl font-bold text-blix-dark-blue">0</p>
                <p className="text-sm text-gray-500 mt-1">Configure seu fluxo de captação</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blix-blue to-blix-teal rounded-lg shadow-sm p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">Guia de Início Rápido</h3>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Conecte seu WhatsApp Business</li>
                <li>Integre com o Google Calendar</li>
                <li>Configure suas respostas automáticas</li>
                <li>Personalize seu fluxo de atendimento</li>
                <li>Teste e otimize o assistente</li>
              </ol>
              <Button className="bg-white text-blix-dark-blue hover:bg-gray-100">
                Ver tutorial completo
              </Button>
            </div>
          </>
        );
    }
  };
  
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar>
          <SidebarHeader className="flex items-center p-4">
            <img 
              src="/lovable-uploads/567a8abf-9cc2-4f07-b275-b89bbf247c4f.png" 
              alt="Blix4You Logo" 
              className="h-8 mr-6" 
            />
            <h1 className="text-lg font-semibold text-blix-dark-blue">Dashboard</h1>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => setActiveView('dashboard')}
                  isActive={activeView === 'dashboard'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => setActiveView('ai-agent')}
                  isActive={activeView === 'ai-agent'}
                  tooltip="Agente IA"
                >
                  <Bot className="h-4 w-4 mr-2" />
                  <span>Agente IA</span>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">
                    {aiAgentEnabled ? 'ON' : 'OFF'}
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Configurações</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Suporte</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <div className="mt-auto p-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="w-full">
                Sair
              </Button>
            </Link>
          </div>
        </Sidebar>
        
        <SidebarInset className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <SidebarTrigger className="mr-3" />
              <div className="text-lg font-semibold">
                {activeView === 'dashboard' && 'Dashboard Principal'}
                {activeView === 'ai-agent' && 'Agente IA'}
                {activeView === 'professionals' && 'Profissionais'}
                {activeView === 'leads' && 'Leads'}
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-6">
                <span className="text-sm text-gray-600">Olá, Usuário</span>
              </div>
            </div>
          </div>
          
          {renderContent()}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;
