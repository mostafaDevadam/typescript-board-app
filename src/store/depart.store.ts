import { Department } from "../classes/department"
import { IStore } from "../interfaces/store.interface"

export class StoreDeparts implements IStore<Department> {
    private departs: Department[] = []
    private list: any[] = []

    constructor() { }

    set(departs: Department[]): void {
        this.departs = departs
        const _id = this.list.length > 0 ? this.list.length++ : 1
        this.list.push({ id: this.list.length++, 'departs': this.departs })
    }
    get(): Department[] {
        return this.departs
    }
}
