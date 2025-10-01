import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormDialog: React.FC<ContactFormDialogProps> = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    companyName: '',
    revenue: '',
    segment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Redirecionar para o WhatsApp após o envio do formulário
    const whatsappUrl = "whatsapp://send/?phone=5511970461855&text=Olá%2C+gostaria+de+saber+mais+sobre+as+soluções+de+IA+da+Blix4You&source=wa_api_send_v2";
    window.location.href = whatsappUrl;
    
    // Fechar o formulário
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-black">Preencha o formulário e fale com um dos nossos especialistas</DialogTitle>
          <DialogDescription className="text-gray-700">
            Complete as informações abaixo para solicitar uma demonstração.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-black">Qual é o seu nome?</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Seu nome completo" 
              required 
              className="bg-white text-black border-gray-300"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-black">Qual seu melhor e-mail?</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="seu@email.com" 
              required 
              className="bg-white text-black border-gray-300"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-black">Qual o seu WhatsApp?</Label>
            <Input 
              id="whatsapp" 
              name="whatsapp" 
              value={formData.whatsapp} 
              onChange={handleChange} 
              placeholder="(00) 00000-0000" 
              required 
              className="bg-white text-black border-gray-300"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-black">Qual o nome da sua empresa?</Label>
            <Input 
              id="companyName" 
              name="companyName" 
              value={formData.companyName} 
              onChange={handleChange} 
              placeholder="Nome da sua empresa" 
              required 
              className="bg-white text-black border-gray-300"
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-black">Qual sua média de faturamento mensal?</Label>
            <Select 
              value={formData.revenue} 
              onValueChange={(value) => handleSelectChange('revenue', value)}
            >
              <SelectTrigger className="bg-white text-black border-gray-300">
                <SelectValue placeholder="Selecione uma faixa" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="0-30000">0-R$30.000</SelectItem>
                <SelectItem value="30000-50000">R$30.000 - R$50.000</SelectItem>
                <SelectItem value="50000-100000">R$50.000 - R$100.000</SelectItem>
                <SelectItem value="100000-500000">R$100.000 - R$500.000</SelectItem>
                <SelectItem value="500000-1000000">R$500.000 - R$1.000.000</SelectItem>
                <SelectItem value="1000000+">Mais de R$1.000.000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="text-black">Segmento:</Label>
            <Select 
              value={formData.segment} 
              onValueChange={(value) => handleSelectChange('segment', value)}
            >
              <SelectTrigger className="bg-white text-black border-gray-300">
                <SelectValue placeholder="Selecione um segmento" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectItem value="servico">Serviço</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="afiliado">Afiliado/Dropshipper</SelectItem>
                <SelectItem value="agencia">Agência de marketing</SelectItem>
                <SelectItem value="food">Food Service</SelectItem>
                <SelectItem value="saude">Saúde</SelectItem>
                <SelectItem value="outro">Outro...</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-white py-6 mt-6"
          >
            Solicitar Demonstração
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;