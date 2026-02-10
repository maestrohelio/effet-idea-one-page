import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {open && (
        <div className="mb-3 w-[340px] rounded-2xl shadow-2xl overflow-hidden border border-border animate-scale-in origin-bottom-left">
          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Effect Idea</p>
                <p className="text-white/80 text-xs">Online</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Fechar chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="bg-[#e5ddd5] p-5 min-h-[200px] flex flex-col justify-center gap-3">
            <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
              <p className="text-sm text-gray-800">
                Olá 👋, boas-vindas ao <strong>effectidea.com</strong>
              </p>
            </div>
            <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 max-w-[65%] shadow-sm">
              <p className="text-sm text-gray-800">Podemos te ajudar?</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="bg-[#e5ddd5] px-5 pb-5 pt-0 flex justify-end">
            <a
              href={whatsappLink("Olá! Gostaria de saber mais sobre os vossos serviços.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-sm px-6 py-3 rounded-full shadow-lg transition-colors"
            >
              Abrir bate-papo
              <Phone size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Tooltip + Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setOpen((v) => !v)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="Abrir chat WhatsApp"
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            open
              ? "bg-[#25D366] text-white"
              : "bg-[#25D366] hover:bg-[#1ebe57] text-white hover:shadow-xl"
          }`}
        >
          {open ? <X size={24} /> : <MessageCircle size={28} />}
        </button>

        {/* Hover tooltip */}
        {!open && hovered && (
          <span className="bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap animate-fade-in">
            Precisa de Ajuda?
          </span>
        )}
      </div>
    </div>
  );
};

export default WhatsAppChat;
