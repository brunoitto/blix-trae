import { useState } from "react";
import { Calendar, Clock, Plus, Filter, MapPin, User, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AgendaPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState("day");

  const appointments = [
    {
      id: 1,
      client: "Maria Santos",
      type: "Consulta Inicial",
      time: "09:00",
      duration: "1h",
      status: "Confirmado",
      location: "Presencial",
      phone: "(11) 99999-9999",
      notes: "Caso de direito trabalhista - rescisão indevida"
    },
    {
      id: 2,
      client: "Carlos Oliveira", 
      type: "Acompanhamento",
      time: "14:30",
      duration: "45min",
      status: "Pendente",
      location: "Online",
      phone: "(11) 88888-8888",
      notes: "Revisão de documentos contratuais"
    },
    {
      id: 3,
      client: "Ana Silva",
      type: "Audiência",
      time: "16:00", 
      duration: "2h",
      status: "Confirmado",
      location: "Fórum Central",
      phone: "(11) 77777-7777",
      notes: "Audiência de conciliação - Vara do Trabalho"
    }
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'Confirmado': return 'default';
      case 'Pendente': return 'secondary';
      case 'Cancelado': return 'destructive';
      default: return 'outline';
    }
  };

  const getLocationIcon = (location: string) => {
    return location === 'Online' ? '💻' : location.includes('Fórum') ? '🏛️' : '🏢';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Agenda</h1>
        <p className="text-muted-foreground">
          Gerencie seus agendamentos e compromissos.
        </p>
      </div>

      {/* Actions Bar */}
      <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-3">
              <Select value={viewMode} onValueChange={setViewMode}>
                <SelectTrigger className="w-32 bg-muted/50 border-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Dia</SelectItem>
                  <SelectItem value="week">Semana</SelectItem>
                  <SelectItem value="month">Mês</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Sincronizar Google
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80">
                <Plus className="h-4 w-4 mr-2" />
                Novo Agendamento
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar */}
        <Card className="lg:col-span-1 bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Calendário</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border-0"
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Confirmado</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-muted-foreground">Pendente</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <span className="text-muted-foreground">Cancelado</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appointments List */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">
                Agendamentos de Hoje
              </CardTitle>
              <Badge variant="outline">{appointments.length} compromissos</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="border border-border/40 bg-background/50 hover:bg-background/80 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10">
                          {appointment.client.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{appointment.client}</h3>
                        <p className="text-sm text-muted-foreground">{appointment.type}</p>
                      </div>
                    </div>
                    <Badge variant={getStatusBadgeVariant(appointment.status)}>
                      {appointment.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{appointment.time} ({appointment.duration})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{getLocationIcon(appointment.location)} {appointment.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{appointment.phone}</span>
                    </div>
                  </div>

                  {appointment.notes && (
                    <div className="mt-3 p-3 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground">{appointment.notes}</p>
                    </div>
                  )}

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      Reagendar
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Cancelar
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-primary/80">
                      Iniciar Reunião
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">7</div>
            <div className="text-sm text-muted-foreground">Esta Semana</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">28</div>
            <div className="text-sm text-muted-foreground">Este Mês</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">95%</div>
            <div className="text-sm text-muted-foreground">Taxa de Comparecimento</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">1.2h</div>
            <div className="text-sm text-muted-foreground">Duração Média</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}