import {action, decorate, observable} from "mobx";
import defaultUserData from "../configs/defaultObjects";
import {IUserModel} from "../models/user-data/user-data.model";
// tslint:disable:no-console

export interface IUserStore {
    userData: IUserModel,
    isUserLogout: boolean,

    loadUserData(user: IUserModel): void,
    clearUserData(): void,
    forceUserLogout(): void
}

class UserStore implements IUserStore {
    public userData: any;
    public isUserLogout = false;
    private localUserData = localStorage.getItem('userData');

    constructor() {
        this.loadInitialStateFromLocalStorage();
    }

    public loadUserData = (user: IUserModel) => {
        this.userData = user
    };

    public clearUserData = () => {
        this.userData = defaultUserData
    };

    public forceUserLogout = () => {
        console.log('force user logout');
        this.isUserLogout = true;
    };

    private loadInitialStateFromLocalStorage() {
        if (this.localUserData) {
            this.userData = JSON.parse(this.localUserData);
        } else {
            this.userData = defaultUserData;
        }
    }
}

decorate(UserStore, {
    clearUserData: action,
    forceUserLogout: action,
    isUserLogout: observable,
    loadUserData: action,
    userData: observable,
});

export default new UserStore();