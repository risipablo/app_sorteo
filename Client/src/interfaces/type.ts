
export interface IParticipants{
    _id:number
    name: string
}


export interface IReloj{
    day: number
    hour: number
    min: number
    seg: number
}

export interface ModalConfirmationProps {
    isOpen: boolean,
    onClose: () => void;
    onConfirm: () => void;  // Esta prop espera una función que no recibe parámetros y no retorna nada
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
}