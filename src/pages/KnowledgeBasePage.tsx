import { useState } from "react";
import { Upload, Search, FileText, Download, Tag, Trash2, Eye, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function KnowledgeBasePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const documents = [
    {
      id: 1,
      name: "Modelo de Contrato - Sociedade.pdf",
      category: "Contratos",
      size: "2.4 MB",
      uploadDate: "2024-01-20",
      accessCount: 45,
      status: "Indexado",
      tags: ["Sociedade", "Contrato", "Modelo"]
    },
    {
      id: 2,
      name: "Lei 14.030 - Marco Legal.pdf", 
      category: "Legislação",
      size: "1.8 MB",
      uploadDate: "2024-01-18",
      accessCount: 32,
      status: "Indexado",
      tags: ["Lei", "Marco Legal", "2021"]
    },
    {
      id: 3,
      name: "Jurisprudência - STJ.pdf",
      category: "Jurisprudência", 
      size: "3.2 MB",
      uploadDate: "2024-01-15",
      accessCount: 28,
      status: "Processando",
      tags: ["STJ", "Precedente", "2024"]
    },
    {
      id: 4,
      name: "Template - Petição Inicial.docx",
      category: "Templates",
      size: "0.8 MB", 
      uploadDate: "2024-01-12",
      accessCount: 67,
      status: "Indexado",
      tags: ["Petição", "Template", "Inicial"]
    },
    {
      id: 5,
      name: "Código Civil - Atualizado.pdf",
      category: "Legislação",
      size: "5.1 MB",
      uploadDate: "2024-01-10",
      accessCount: 89,
      status: "Indexado", 
      tags: ["Código Civil", "Legislação", "Atualizado"]
    }
  ];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'Indexado': return 'default';
      case 'Processando': return 'secondary';
      case 'Erro': return 'destructive';
      default: return 'outline';
    }
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf': return '📄';
      case 'docx':
      case 'doc': return '📝';
      case 'txt': return '📋';
      default: return '📄';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = categoryFilter === 'all' || doc.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Base de Conhecimento (RAG)</h1>
        <p className="text-muted-foreground">
          Gerencie documentos e utilize IA para consultas inteligentes.
        </p>
      </div>

      {/* Upload Area */}
      <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="border-2 border-dashed border-border/60 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
            <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Adicionar Documentos</h3>
            <p className="text-muted-foreground mb-4">
              Arraste e solte arquivos aqui ou clique para selecionar
            </p>
            <div className="flex gap-2 justify-center">
              <Button className="bg-gradient-to-r from-primary to-primary/80">
                <Plus className="h-4 w-4 mr-2" />
                Selecionar Arquivos
              </Button>
              <Button variant="outline">
                <Tag className="h-4 w-4 mr-2" />
                Gerenciar Tags
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Suporta: PDF, DOC, DOCX, TXT (Máx. 10MB por arquivo)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar documentos ou tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-muted/50 border-0"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-40 bg-muted/50 border-0">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="Contratos">Contratos</SelectItem>
                <SelectItem value="Legislação">Legislação</SelectItem>
                <SelectItem value="Jurisprudência">Jurisprudência</SelectItem>
                <SelectItem value="Templates">Templates</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">1,247</div>
            <div className="text-sm text-muted-foreground">Documentos Indexados</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">23</div>
            <div className="text-sm text-muted-foreground">Consultas Hoje</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">98%</div>
            <div className="text-sm text-muted-foreground">Taxa de Sucesso IA</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">2.3s</div>
            <div className="text-sm text-muted-foreground">Tempo Médio Busca</div>
          </CardContent>
        </Card>
      </div>

      {/* Documents List */}
      <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Documentos Recentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className="border border-border/40 bg-background/50 hover:bg-background/80 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{getFileIcon(doc.name)}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{doc.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">{doc.category}</Badge>
                        <Badge variant={getStatusBadgeVariant(doc.status)} className="text-xs">
                          {doc.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-muted-foreground mb-3">
                  <div>Tamanho: {doc.size}</div>
                  <div>Upload: {new Date(doc.uploadDate).toLocaleDateString('pt-BR')}</div>
                  <div>Acessos: {doc.accessCount}</div>
                  <div>Última consulta: Hoje</div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {doc.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {doc.status === 'Processando' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Indexando documento...</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      {/* AI Search Interface */}
      <Card className="bg-gradient-to-br from-card/80 to-card/40 border-border/40 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Consulta Inteligente com IA</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Input
              placeholder="Ex: 'Quais são os requisitos para constituir uma sociedade limitada?'"
              className="pr-12 bg-muted/50 border-0"
            />
            <Button size="sm" className="absolute right-1 top-1 bg-gradient-to-r from-primary to-primary/80">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            <Button variant="outline" size="sm" className="justify-start">
              💼 Contratos de trabalho
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              🏛️ Jurisprudência recente
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              📊 Templates petições
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}