import {IPageableStore} from "./pageable-store";

export interface IItemsStore<T> {
    items: T[],
    updateItems(items: T[]): void
}

export interface IItemsStoreWithPageable<T> extends IItemsStore<T>, IPageableStore {

}