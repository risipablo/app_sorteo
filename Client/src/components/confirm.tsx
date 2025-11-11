import type { ModalConfirmationProps } from "../interfaces/type";
import "../style/modal.css"

export const ModalConfirmation = ({
    isOpen,onClose,onConfirm,  title = "Confirmar eliminación",
    message = "¿Estás seguro de eliminar a todos los participantes?",
    confirmText = "Eliminar",
    cancelText = "Cancelar"
    }: ModalConfirmationProps) => {
        if (!isOpen) return null

        return(
            <div className="modal-overlay" onClick={onClose}>

                <div className="modal-container" onClick={(e) => e.stopPropagation()}>

                    <div className="modal-content">

                    <h2 className="modal-title">{title}</h2>

                    <p className="modal-message">{message}</p>
                    
                    <div className="modal-buttons">
                        <button 
                        className="modal-btn modal-btn-confirm"
                        onClick={onConfirm}
                        >
                        {confirmText}
                        </button>
                        <button 
                        className="modal-btn modal-btn-cancel"
                        onClick={onClose}
                        >
                        {cancelText}
                        </button>

                    </div>
                    </div>
                </div>
            </div>
        );
}