import { User } from "../classes/user"
import { IStore } from "../interfaces/store.interface"

export class StoreUsers implements IStore<User> {
    private users: User[] = []
    private list: any[] = []

    constructor() { }

    set(users: User[]): void {
        this.users = users
        const _id = this.list.length > 0 ? this.list.length++ : 1
        this.list.push({ id: this.list.length++, 'users': this.users })
    }
    get(): User[] {
        return this.users
    }
}
