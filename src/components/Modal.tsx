interface ModalProps {
  isOpen: boolean;
  type: 'success' | 'error' | 'warning';
  title: string;
  message: string;
  onClose: () => void;
}

export const Modal = ({ isOpen, type, title, message, onClose }: ModalProps) => {
  if (!isOpen) return null;

  const styles = {
    // Estilo "Acerto": Amarelo The News para triunfo
    success: {
      bg: 'bg-yellow-400',
      text: 'text-black',
      button: 'bg-black text-white'
    },
    // Estilo "End-game": Vermelho para atenção (Derrota)
    error: {
      bg: 'bg-red-600',
      text: 'text-white',
      button: 'bg-white text-red-600'
    },
    // Estilo "Atenção": Para as 5 tentativas ou avisos
    warning: {
      bg: 'bg-black',
      text: 'text-white',
      button: 'bg-yellow-300 text-black-900'
    }
  };

  const currentStyle = styles[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
      <div className={`${currentStyle.bg} ${currentStyle.text} w-full max-w-sm p-8 rounded-lg shadow-2xl transform transition-all scale-100 animate-in fade-in zoom-in duration-300`}>
        <h2 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">
          {title}
        </h2>
        <p className="text-lg font-medium leading-tight mb-6">
          {message}
        </p>
        <button
          onClick={onClose}
          className={`${currentStyle.button} w-full py-3 font-bold uppercase tracking-widest active:scale-95 transition-transform`}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};