import {action, decorate, observable} from "mobx";
import {ICountriesInfoModel} from "../models/info/countries.model";
import {IDaysInfoModel} from "../models/info/days.model";
import {IQuantityInfoModel} from "../models/info/quantity.model";
import {ITypesInfoModel} from "../models/info/types.model";

export interface IInfoStore {
    countries: ICountriesInfoModel[],
    qtys: IQuantityInfoModel[],
    days: IDaysInfoModel[],
    types: ITypesInfoModel[],

    updateCountries(countries: ICountriesInfoModel[]): void,
    updateQtys(qtys: IQuantityInfoModel[]): void,
    updateDays(days: IDaysInfoModel[]): void,
    updateTypes(types: ITypesInfoModel[]): void,
}

class InfoStore implements IInfoStore {
    public countries: ICountriesInfoModel[] = [];
    public qtys: IQuantityInfoModel[] = [];
    public days: IDaysInfoModel[] = [];
    public types: ITypesInfoModel[] = [];

    public updateCountries = (countries: ICountriesInfoModel[]) => {
        this.countries = countries
    };

    public updateQtys = (qtys: IQuantityInfoModel[]) => {
        this.qtys = qtys;
    };

    public updateDays = (days: IDaysInfoModel[]) => {
        this.days = days;
    };

    public updateTypes = (types: ITypesInfoModel[]) => {
        this.types = types;
    }

}

decorate(InfoStore, {
    countries: observable,
    days: observable,
    qtys: observable,
    types: observable,
    updateCountries: action,
    updateDays: action,
    updateQtys: action,
    updateTypes: action,
});

export default new InfoStore();