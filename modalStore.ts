import {action, decorate, observable} from "mobx";
import {ModalStatus} from "../configs/enums/modalStatus";

export interface IModalStore {
    modalStatus: string,
    modalMessage: string,
    modalTitle: string,

    setModalStatus(modal: ModalStatus): void,
    setModalInfo(modal: ModalStatus): void,
    clearModalInfo(): void,
}

class ModalStore implements IModalStore {
    public modalStatus: ModalStatus = ModalStatus.Disabled;
    public modalMessage: string;
    public modalTitle: string;

    public setModalStatus = (modal: ModalStatus) => {
        this.modalStatus = modal;
    };

    public setModalInfo = (title?: string, message?: string) => {
        if (message) {
            this.modalMessage = message;
        }
        if (title) {
            this.modalTitle = title;
        }
    };

    public clearModalInfo = () => {
        this.modalMessage = '';
        this.modalTitle = '';

    };
}

decorate(ModalStore, {
    clearModalInfo: action,
    modalMessage: observable,
    modalStatus: observable,
    modalTitle: observable,
    setModalInfo: action,
    setModalStatus: action,
});

export default new ModalStore();