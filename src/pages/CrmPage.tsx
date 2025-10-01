import { useState } from "react";
import { Search, Plus, Filter, Phone, Mail, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CrmPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const clients = [
    {
      id: 1,
      name: "Maria Santos",
      email: "maria.santos@email.com",
      phone: "(11) 99999-9999",
      area: "Direito Trabalhista",
      status: "Ativo",
      monthlyValue: "R$ 2.500",
      lastInteraction: "2024-01-24",
      registrationDate: "2023-06-15",
      avatar: "MS"
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      email: "carlos.oliveira@email.com",
      phone: "(11) 88888-8888", 
      area: "Direito Civil",
      status: "Lead",
      monthlyValue: "R$ 1.800",
      lastInteraction: "2024-01-23",
      registrationDate: "2024-01-20",
      avatar: "CO"
    },
    {
      id: 3,
      name: "Ana Silva",
      email: "ana.silva@email.com",
      phone: "(11) 77777-7777",
      area: "Direito Empresarial", 
      status: "Prospect",
      monthlyValue: "R$ 3.200",
      lastInteraction: "2024-01-22",
      registrationDate: "2024-01-18",
      avatar: "AS"
    },
    {
      id: 4,
      name: "Roberto Lima",
      email: "roberto.lima@email.com",
      phone: "(11) 66666-6666",
      area: "Direito Criminal",
      status: "Ativo", 
      monthlyValue: "R$ 2.200",
      lastInteraction: "2024-01-24",
      registrationDate: "2023-09-10",
      avatar: "RL"
    },
    {
      id: 5,
      name: "Fernanda Costa",
      email: "fernanda.costa@email.com",
      phone: "(11) 55555-5555",
      area: "Direito de Família",
      status: "Inativo",
      monthlyValue: "R$ 1.500",
      lastInteraction: "2023-12-15",
      registrationDate: "2023-03-22",
      avatar: "FC"
    }
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'Ativo': return 'default';
      case 'Lead': return 'secondary';
      case 'Prospect': return 'outline';
      case 'Inativo': return 'destructive';
      default: return 'outline';
    }
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">CRM - Gestão de Clientes</h1>
        <p className="text-muted-foreground">
          Gerencie seus clientes, leads e prospects de forma eficiente.
        </p>
      </div>

      {/* Actions Bar */}
      <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-1 gap-3 w-full sm:w-auto">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar clientes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 bg-muted/50 border-0"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40 bg-muted/50 border-0">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="Ativo">Ativo</SelectItem>
                  <SelectItem value="Lead">Lead</SelectItem>
                  <SelectItem value="Prospect">Prospect</SelectItem>
                  <SelectItem value="Inativo">Inativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80">
                <Plus className="h-4 w-4 mr-2" />
                Novo Cliente
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clients Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredClients.map((client) => (
          <Card key={client.id} className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                    <AvatarImage src={`/placeholder-${client.id}.jpg`} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 font-semibold">
                      {client.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.area}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Excluir
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant={getStatusBadgeVariant(client.status)}>
                  {client.status}
                </Badge>
                <span className="text-sm font-semibold text-primary">{client.monthlyValue}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span className="truncate">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-3 w-3" />
                  <span>{client.phone}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-border/40 space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Última interação:</span>
                  <span>{new Date(client.lastInteraction).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Cadastrado em:</span>
                  <span>{new Date(client.registrationDate).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="h-3 w-3 mr-2" />
                  Ligar
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Mail className="h-3 w-3 mr-2" />
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {clients.filter(c => c.status === 'Ativo').length}
            </div>
            <div className="text-sm text-muted-foreground">Clientes Ativos</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {clients.filter(c => c.status === 'Lead').length}
            </div>
            <div className="text-sm text-muted-foreground">Leads</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {clients.filter(c => c.status === 'Prospect').length}
            </div>
            <div className="text-sm text-muted-foreground">Prospects</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">
              R$ {clients.filter(c => c.status === 'Ativo').reduce((sum, c) => sum + parseFloat(c.monthlyValue.replace(/[R$.\s]/g, '').replace(',', '.')), 0).toLocaleString('pt-BR')}
            </div>
            <div className="text-sm text-muted-foreground">Receita Mensal</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}