
const testimonials = [
  {
    id: 1,
    name: "Carla Silva",
    role: "CEO, Clínica Bem Estar",
    content: "O assistente da Blix4You revolucionou nossa forma de agendar consultas. Reduziu nossa taxa de não comparecimento em 45% e liberou nossa equipe para focar no atendimento pessoal.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcos Almeida",
    role: "Proprietário, Academia FitZone",
    content: "Desde que implementamos o assistente da Blix4You, conseguimos aumentar nosso número de matrículas em 30%. A automatização do atendimento via WhatsApp nos permitiu responder dúvidas 24/7.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Juliana Mendes",
    role: "Diretora, Escola de Inglês Fluency",
    content: "A captação de leads automática e a integração com nosso CRM tornaram nosso processo de vendas muito mais eficiente. Estamos convertendo 35% mais alunos com o mesmo investimento em marketing.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja como o assistente inteligente da Blix4You está transformando empresas reais e impactando positivamente seus resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg card-hover"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.content}&quot;</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
