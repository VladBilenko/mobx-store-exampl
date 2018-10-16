import storeFactory from "./factory/storeFactory";
import InfoStore from './infoStore';
import ModalStore from './modalStore';
import UserStore from './userStore';

const buyerProductsStore = storeFactory.createItemsStore();
const buyerOrdersStore = storeFactory.createItemsStore();
const buyerPaymentsStore = storeFactory.createItemsStore();
const sellerOffersStore = storeFactory.createItemsStore();
const sellerOrdersStore = storeFactory.createItemsStore();
const sellerPaymentsStore = storeFactory.createItemsStore();
const sellerWithdrawalsStore = storeFactory.createItemsStore();

const stores = {
    InfoStore,
    ModalStore,
    UserStore,
    buyerOrdersStore,
    buyerPaymentsStore,
    buyerProductsStore,
    sellerOffersStore,
    sellerOrdersStore,
    sellerPaymentsStore,
    sellerWithdrawalsStore,
};


export default stores;