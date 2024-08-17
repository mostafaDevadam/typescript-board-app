import { Group } from "../classes/group"
import { IStore } from "../interfaces/store.interface"

export class StoreGroups implements IStore<Group> {
    private groups: Group[] = []
    private list: any[] = []

    constructor() { }

    set(groups: Group[]): void {
        this.groups = groups
        const _id = this.list.length > 0 ? this.list.length++ : 1
        this.list.push({ id: this.list.length++, 'groups': this.groups })
    }
    get(): Group[] {
        return this.groups
    }
}
