export interface IStore<T> {
    set(list: T[]): void
    get(): T[]
}
