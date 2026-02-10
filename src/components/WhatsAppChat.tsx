import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const WhatsAppChat = () => (
  <a
    href={whatsappLink("Olá! Gostaria de saber mais sobre os vossos serviços.")}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale connosco no WhatsApp"
    className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
  >
    <span className="flex items-center justify-center w-14 h-14 rounded-full">
      <MessageCircle size={28} />
    </span>
    <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-5 transition-all duration-300 text-sm font-medium">
      Fale Connosco
    </span>
  </a>
);

export default WhatsAppChat;
