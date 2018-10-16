import {action, decorate, observable} from "mobx";
import {IItemsStoreWithPageable} from "./interfaces/items-store";
import ItemsStore from "./itemsStore";

interface IStoreFactory<T> {
    createItemsStore(): IItemsStoreWithPageable<T>
}

class StoreFactory<T> implements IStoreFactory<T> {
    public createItemsStore(): IItemsStoreWithPageable<T> {
        const itemsStore: IItemsStoreWithPageable<T> = new ItemsStore();

        decorate(itemsStore, {
            items: observable,
            minusToPageIndex: action,
            pageable: observable,
            plusToPageIndex: action,
            updateItems: action,
            updatePageableStatus: action,
        });

        return itemsStore;
    }
}



const storeFactory = new StoreFactory();
export default storeFactory;


