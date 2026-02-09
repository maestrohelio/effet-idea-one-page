import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <>
    <Header />
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8 gradient-text">Política de Privacidade</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-foreground font-medium">Última atualização: Fevereiro 2025</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Responsável pelo Tratamento</h2>
          <p>A Effect Idea é responsável pelo tratamento dos dados pessoais recolhidos neste website, em conformidade com o Regulamento Geral de Proteção de Dados (RGPD) da União Europeia.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. Dados Recolhidos</h2>
          <p>Recolhemos apenas os dados estritamente necessários: nome, endereço de email, número de telefone e mensagens enviadas através dos nossos canais de contacto (WhatsApp, email).</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Finalidade do Tratamento</h2>
          <p>Os dados são utilizados exclusivamente para responder a pedidos de contacto, fornecer orçamentos, prestar serviços contratados e enviar comunicações comerciais quando autorizado.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Base Legal</h2>
          <p>O tratamento dos dados baseia-se no consentimento do titular, na execução de contrato ou pré-contrato, e no cumprimento de obrigações legais.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Conservação dos Dados</h2>
          <p>Os dados pessoais são conservados pelo período necessário à prestação dos serviços ou conforme exigido por lei.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">6. Direitos do Titular</h2>
          <p>Tem direito de acesso, retificação, eliminação, limitação, portabilidade e oposição ao tratamento dos seus dados. Para exercer estes direitos, contacte-nos: info@effectidea.com.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">7. Cookies</h2>
          <p>Este website pode utilizar cookies para melhorar a experiência de navegação e para fins analíticos. Pode gerir as suas preferências de cookies nas definições do seu navegador.</p>
          
          <h2 className="font-heading text-xl font-bold text-foreground mt-8">8. Contacto</h2>
          <p>Para questões relacionadas com a proteção de dados: <a href="mailto:info@effectidea.com" className="text-accent hover:underline">info@effectidea.com</a></p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicy;
