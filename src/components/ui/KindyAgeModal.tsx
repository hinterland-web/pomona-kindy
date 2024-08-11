interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const KindyAgeModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`fixed inset-0 bg-base-400 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-base-white p-8 rounded-lg max-w-md w-full transition-all duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button onClick={onClose} className="float-right text-2xl">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default KindyAgeModal;
