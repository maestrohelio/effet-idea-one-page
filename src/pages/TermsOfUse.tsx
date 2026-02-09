import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => (
  <>
    <Header />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8 gradient-text">Termos de Uso</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-foreground font-medium">Última atualização: Fevereiro 2025</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Identificação</h2>
          <p>Este website é propriedade da Effect Idea, agência digital com presença em Portugal e Suíça.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. Utilização do Website</h2>
          <p>O acesso e utilização deste website estão sujeitos aos presentes termos. Ao navegar neste site, aceita estes termos na sua totalidade.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Propriedade Intelectual</h2>
          <p>Todo o conteúdo presente neste website (textos, imagens, logótipos, design, código) é propriedade exclusiva da Effect Idea ou dos seus licenciantes, estando protegido por direitos de autor e propriedade intelectual.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Limitação de Responsabilidade</h2>
          <p>A Effect Idea não garante que o website esteja permanentemente acessível ou livre de erros. As informações apresentadas são fornecidas "tal como estão", sem garantias explícitas ou implícitas.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Links Externos</h2>
          <p>Este website pode conter links para sites de terceiros. A Effect Idea não se responsabiliza pelo conteúdo ou práticas de privacidade de sites externos.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">6. Promoções</h2>
          <p>As promoções anunciadas estão sujeitas a disponibilidade e condições específicas. Os preços e condições podem ser alterados sem aviso prévio.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">7. Lei Aplicável</h2>
          <p>Estes termos são regidos pela lei portuguesa. Qualquer litígio será submetido aos tribunais competentes em Portugal.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">8. Contacto</h2>
          <p>Para questões sobre estes termos: <a href="mailto:info@effectidea.com" className="text-accent hover:underline">info@effectidea.com</a></p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default TermsOfUse;
