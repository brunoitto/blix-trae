import { useState, useEffect } from "react";
import { Smartphone, Wifi, WifiOff, QrCode, Settings, Clock, MessageSquare, Activity, RefreshCw, Save, Copy, Play, Pause } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function EvolutionApiPage() {
  const { toast } = useToast();
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'connecting'>('disconnected');
  const [qrCodeTimer, setQrCodeTimer] = useState(90);
  const [automationActive, setAutomationActive] = useState(true);
  const [instanceName, setInstanceName] = useState('advogada_joana_bot');
  const [qrCodeUrl, setQrCodeUrl] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==');
  
  const [config, setConfig] = useState({
    welcomeMessage: 'Olá! Sou a assistente virtual do Dr. João Silva. Como posso ajudá-lo hoje?',
    workingHours: '09:00-18:00',
    offHoursMessage: 'Estamos fora do horário de atendimento. Retornaremos às 9h.',
    keywords: ['agendamento', 'consulta', 'urgente', 'dúvida']
  });

  const activities = [
    {
      id: 1,
      timestamp: '2024-01-24 14:32:15',
      type: 'message_received',
      description: 'Nova mensagem recebida de +55 11 99999-9999',
      status: 'success'
    },
    {
      id: 2,
      timestamp: '2024-01-24 14:30:42',
      type: 'auto_response',
      description: 'Resposta automática enviada - Mensagem de boas-vindas',
      status: 'success'
    },
    {
      id: 3,
      timestamp: '2024-01-24 14:28:18',
      type: 'connection',
      description: 'Instância reconectada com sucesso',
      status: 'success'
    },
    {
      id: 4,
      timestamp: '2024-01-24 13:15:33',
      type: 'error',
      description: 'Falha na conexão com o WhatsApp',
      status: 'error'
    },
    {
      id: 5,
      timestamp: '2024-01-24 12:45:22',
      type: 'config_update',
      description: 'Configurações do bot atualizadas',
      status: 'info'
    }
  ];

  useEffect(() => {
    if (connectionStatus === 'connecting' && qrCodeTimer > 0) {
      const timer = setInterval(() => {
        setQrCodeTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [connectionStatus, qrCodeTimer]);

  const handleGenerateQrCode = () => {
    setConnectionStatus('connecting');
    setQrCodeTimer(90);
    // Simulate QR code generation
    toast({
      title: "QR Code Atualizado",
      description: "Novo código gerado. Escaneie com seu WhatsApp.",
    });
  };

  const handleSaveConfig = () => {
    toast({
      title: "Configurações Salvas",
      description: "As configurações do bot foram atualizadas com sucesso.",
    });
  };

  const toggleAutomation = () => {
    setAutomationActive(!automationActive);
    toast({
      title: automationActive ? "IA Pausada" : "IA Ativada",
      description: automationActive ? "O bot não responderá automaticamente." : "O bot voltou a responder com IA.",
    });
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'connected': return 'default';
      case 'connecting': return 'secondary';
      case 'disconnected': return 'destructive';
      default: return 'outline';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'message_received': return '📨';
      case 'auto_response': return '🤖';
      case 'connection': return '🔗';
      case 'error': return '⚠️';
      case 'config_update': return '⚙️';
      default: return '📝';
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Whatsapp Agent</h1>
        <p className="text-muted-foreground">
          Conecte seu número e configure seu atendimento com IA.
        </p>
      </div>

      {/* Status and QR Code Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Instance Status Card */}
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Status De Conexão
              </CardTitle>
              <Badge variant={getStatusBadgeVariant(connectionStatus)}>
                {connectionStatus === 'connected' && <Wifi className="h-3 w-3 mr-1" />}
                {connectionStatus === 'disconnected' && <WifiOff className="h-3 w-3 mr-1" />}
                {connectionStatus === 'connecting' && <RefreshCw className="h-3 w-3 mr-1 animate-spin" />}
                {connectionStatus === 'connected' ? 'Conectado' : 
                 connectionStatus === 'connecting' ? 'Conectando' : 'Desconectado'}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Nome do(a) Agent:</span>
                <span className="font-medium">{instanceName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status da API:</span>
                <Badge variant="default" className="bg-green-600">Online</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Última Sincronização:</span>
                <span className="font-medium">14:32:15</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">IA Operacional:</span>
                <div className="flex items-center gap-2">
                  <Switch 
                    checked={automationActive} 
                    onCheckedChange={toggleAutomation}
                  />
                  {automationActive ? (
                    <Badge variant="default"><Play className="h-3 w-3 mr-1" />Ativa</Badge>
                  ) : (
                    <Badge variant="secondary"><Pause className="h-3 w-3 mr-1" />Pausada</Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* QR Code Card */}
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <QrCode className="h-5 w-5" />
              Pareamento WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {connectionStatus === 'connected' ? (
              <div className="text-center space-y-3">
                <div className="w-48 h-48 mx-auto bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <div className="text-green-600 text-4xl">✅</div>
                </div>
                <p className="text-sm text-muted-foreground">WhatsApp conectado com sucesso!</p>
              </div>
            ) : (
              <div className="text-center space-y-3">
                <div className="w-48 h-48 mx-auto bg-muted/30 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={qrCodeUrl} 
                    alt="QR Code" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Abra o WhatsApp → Dispositivos Conectados → Conectar Dispositivo
                </p>
                {connectionStatus === 'connecting' && (
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Expira em: {formatTime(qrCodeTimer)}
                    </span>
                  </div>
                )}
              </div>
            )}
            <Button 
              onClick={handleGenerateQrCode} 
              className="w-full bg-gradient-to-r from-primary to-primary/80"
              disabled={connectionStatus === 'connecting'}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${connectionStatus === 'connecting' ? 'animate-spin' : ''}`} />
              {connectionStatus === 'connecting' ? 'Gerando...' : 'Atualizar QR Code'}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Configuration Card */}
      <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Configurações do Agente Inteligente
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="welcome">Mensagem de Boas-vindas</Label>
              <Textarea
                id="welcome"
                value={config.welcomeMessage}
                onChange={(e) => setConfig(prev => ({ ...prev, welcomeMessage: e.target.value }))}
                className="min-h-20 bg-muted/50 border-0"
                placeholder="Digite a mensagem de boas-vindas..."
              />
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hours">Horário de Atendimento</Label>
                <Select value={config.workingHours} onValueChange={(value) => setConfig(prev => ({ ...prev, workingHours: value }))}>
                  <SelectTrigger className="bg-muted/50 border-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00-18:00">09:00 - 18:00</SelectItem>
                    <SelectItem value="08:00-17:00">08:00 - 17:00</SelectItem>
                    <SelectItem value="09:00-17:00">09:00 - 17:00</SelectItem>
                    <SelectItem value="24/7">24 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="offhours">Mensagem Fora do Expediente</Label>
                <Input
                  id="offhours"
                  value={config.offHoursMessage}
                  onChange={(e) => setConfig(prev => ({ ...prev, offHoursMessage: e.target.value }))}
                  className="bg-muted/50 border-0"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Palavras-chave para IA</Label>
            <div className="flex flex-wrap gap-2">
              {config.keywords.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="cursor-pointer">
                  {keyword}
                  <button 
                    onClick={() => setConfig(prev => ({ 
                      ...prev, 
                      keywords: prev.keywords.filter((_, i) => i !== index) 
                    }))}
                    className="ml-2 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              ))}
              <Button variant="outline" size="sm" className="h-6 text-xs">
                + Adicionar
              </Button>
            </div>
          </div>

          <Button onClick={handleSaveConfig} className="bg-gradient-to-r from-primary to-primary/80">
            <Save className="h-4 w-4 mr-2" />
            Salvar Configurações
          </Button>
        </CardContent>
      </Card>

      {/* Usage Indicators and Activity Log */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Usage Stats */}
        <div className="space-y-4">
          <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">127</div>
              <div className="text-sm text-muted-foreground">Mensagens Hoje</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">14:32</div>
              <div className="text-sm text-muted-foreground">Último Envio Auto</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Entrega</div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Log */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Log de Atividades
              </CardTitle>
              <Select defaultValue="all">
                <SelectTrigger className="w-32 bg-muted/50 border-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="messages">Mensagens</SelectItem>
                  <SelectItem value="connections">Conexões</SelectItem>
                  <SelectItem value="errors">Erros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                  <div className="text-lg">{getActivityIcon(activity.type)}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                  <Badge 
                    variant={activity.status === 'error' ? 'destructive' : 
                            activity.status === 'success' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}