import { Users, MessageSquare, Calendar, TrendingUp, Clock, Phone } from "lucide-react";
import { MetricCard } from "@/components/Dashboard/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardOverview() {
  const recentClients = [
    {
      name: "Maria Santos",
      email: "maria@email.com",
      phone: "(11) 99999-9999",
      status: "Ativo",
      lastInteraction: "Há 2 horas",
      avatar: "MS"
    },
    {
      name: "Carlos Oliveira",
      email: "carlos@email.com", 
      phone: "(11) 88888-8888",
      status: "Lead",
      lastInteraction: "Há 1 dia",
      avatar: "CO"
    },
    {
      name: "Ana Silva",
      email: "ana@email.com",
      phone: "(11) 77777-7777", 
      status: "Prospect",
      lastInteraction: "Há 3 dias",
      avatar: "AS"
    }
  ];

  const chatMessages = [
    {
      name: "João Pedro",
      message: "Boa tarde! Gostaria de agendar uma consulta para esta semana.",
      time: "14:32",
      unread: true
    },
    {
      name: "Mariana Costa", 
      message: "Recebi os documentos. Quando podemos conversar?",
      time: "13:15",
      unread: true
    },
    {
      name: "Roberto Lima",
      message: "Obrigado pelo atendimento! Muito esclarecedor.",
      time: "12:45",
      unread: false
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Bom dia, Dr. João Silva! 👋
        </h1>
        <p className="text-muted-foreground">
          Aqui está um resumo das suas atividades de hoje.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Clientes Ativos"
          value="142"
          subtitle="Total cadastrados"
          icon={Users}
          trend={{ value: 12, label: "este mês", positive: true }}
        />
        <MetricCard
          title="Mensagens Hoje"
          value="89"
          subtitle="Últimas 24h"
          icon={MessageSquare}
          trend={{ value: 8, label: "vs ontem", positive: true }}
        />
        <MetricCard
          title="Consultas Agendadas"
          value="7"
          subtitle="Esta semana"
          icon={Calendar}
          trend={{ value: 15, label: "vs semana passada", positive: true }}
        />
        <MetricCard
          title="Infraestrutura de IA Ativa"
          value="94%"
          subtitle="Performance geral"
          icon={TrendingUp}
          trend={{ value: 2, label: "melhoria", positive: true }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* WhatsApp Chat */}
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Chat WhatsApp - Tempo Real</CardTitle>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {chatMessages.map((chat, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs bg-gradient-to-br from-primary/20 to-primary/10">
                    {chat.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium truncate">{chat.name}</p>
                    <span className="text-xs text-muted-foreground">{chat.time}</span>
                    {chat.unread && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{chat.message}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              Ver Todos os Chats
            </Button>
          </CardContent>
        </Card>

        {/* Recent Clients & Knowledge Base */}
        <div className="space-y-6">
          {/* Recent Clients */}
          <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">Clientes Recentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentClients.map((client, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10">
                      {client.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium truncate">{client.name}</p>
                      <Badge variant={
                        client.status === 'Ativo' ? 'default' :
                        client.status === 'Lead' ? 'secondary' : 'outline'
                      } className="text-xs">
                        {client.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{client.lastInteraction}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Knowledge Base Quick Access */}
          <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">Base RAG - Acesso Rápido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Documentos indexados: <span className="font-semibold text-foreground">1,247</span></p>
                <p className="text-sm text-muted-foreground">Consultas hoje: <span className="font-semibold text-foreground">23</span></p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Documentos mais acessados:</p>
                <div className="space-y-1">
                  <div className="text-xs p-2 bg-muted/50 rounded">📄 Modelo de Contrato - Sociedade.pdf</div>
                  <div className="text-xs p-2 bg-muted/50 rounded">📄 Lei 14.030 - Marco Legal.pdf</div>
                  <div className="text-xs p-2 bg-muted/50 rounded">📄 Jurisprudência - STJ.pdf</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Acessar Base Completa
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-4">
            <Button className="h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
              <Users className="w-4 h-4 mr-2" />
              Novo Cliente
            </Button>
            <Button variant="outline" className="h-12">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
            <Button variant="outline" className="h-12">
              <MessageSquare className="w-4 h-4 mr-2" />
              Enviar Mensagem
            </Button>
            <Button variant="outline" className="h-12">
              <Clock className="w-4 h-4 mr-2" />
              Ver Agenda
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}