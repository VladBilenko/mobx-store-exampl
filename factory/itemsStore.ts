import {IItemsStoreWithPageable} from "./interfaces/items-store";

export default class ItemsStore<T> implements IItemsStoreWithPageable<T> {
    public items: T[] = [];

    public pageable = {
        isLoading: false,
        isNext: false,
        isPageable: false,
        isPrev: false,
        pageIndex: 1,
    };

    public updateItems = (items: T[]) => {
        this.items = items
    };

    public updatePageableStatus = (count: number) => {
        let newState;
        if (+count > 8) {
            newState = {
                isPageable: true
            };
        } else {
            newState = {
                isPageable: false
            };
        }

        this.updatePrevStatus();
        this.updateNextStatus(count);
        this.pageable = {...this.pageable, ...newState};
    };

    public set loadingStatus(status: boolean) {
        const newState = {
            isLoading: status
        };

        this.pageable = {...this.pageable, ...newState};
    };

    public plusToPageIndex = () => {
        const newState = {
            pageIndex: this.pageable.pageIndex + 1
        };

        this.pageable = {...this.pageable, ...newState};
    };

    public minusToPageIndex = () => {
        const newState = {
            pageIndex: this.pageable.pageIndex - 1
        };

        this.pageable = {...this.pageable, ...newState};
    };

    private updatePrevStatus = () => {
        const newState = {
            isPrev: this.pageable.pageIndex > 1
        };

        this.pageable = {...this.pageable, ...newState};
    };

    private updateNextStatus = (count: number) => {
        const newState = {
            isNext: (this.pageable.pageIndex * 8 + 1) < count
        };

        this.pageable = {...this.pageable, ...newState};
    };

}