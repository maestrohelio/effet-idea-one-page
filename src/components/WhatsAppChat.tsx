import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const handleSend = () => {
    const text = message.trim();
    if (!text) return;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setMessage("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chat Modal */}
      {open && (
        <div className="mb-3 w-[340px] rounded-2xl shadow-2xl overflow-hidden border border-border animate-scale-in origin-bottom-left">
          {/* Header */}
          <div className="gradient-bg-animated px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Effect Idea</p>
                <p className="text-white/70 text-xs">Normalmente responde em minutos</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Fechar chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages area */}
          <div className="bg-[#0a0a14] p-4 min-h-[180px] flex flex-col justify-end gap-3">
            {/* Welcome bubble */}
            <div className="bg-card border border-border rounded-xl rounded-bl-sm px-4 py-3 max-w-[85%] shadow-sm">
              <p className="text-sm text-foreground">
                Olá! 👋 Como podemos ajudar? Escreva a sua mensagem e vamos conversar pelo WhatsApp.
              </p>
              <span className="text-[10px] text-muted-foreground mt-1 block">Agora</span>
            </div>
          </div>

          {/* Input area */}
          <div className="bg-[#0d0d1a] border-t border-border p-3 flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Escreva a sua mensagem…"
              rows={1}
              className="flex-1 resize-none bg-card border border-border rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary max-h-24"
            />
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="btn-neon p-2.5 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              aria-label="Enviar mensagem"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir chat WhatsApp"
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          open
            ? "bg-card border border-border text-foreground hover:bg-muted"
            : "bg-[#25D366] hover:bg-[#1ebe57] text-white hover:shadow-xl"
        }`}
      >
        {open ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default WhatsAppChat;
