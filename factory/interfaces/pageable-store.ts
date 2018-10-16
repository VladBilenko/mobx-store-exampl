interface IPageableConfig {
    isLoading: boolean,
    isNext: boolean,
    isPageable: boolean,
    isPrev: boolean,
    pageIndex: number,
}

export interface IPageableStore {
    pageable: IPageableConfig,
    loadingStatus: boolean,

    updatePageableStatus(count: number): void,
    plusToPageIndex(): void,
    minusToPageIndex(): void,
}