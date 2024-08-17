import { Department } from "../classes/department"
import { Group } from "../classes/group"
import { User } from "../classes/user"
import { StoreDeparts } from "./depart.store"
import { StoreGroups } from "./group.store"
import { StoreUsers } from './user.store'

export class Store {
    private users: User[] = []
    private groups: Group[] = []
    private departs: Department[] = []

    private list: any[] = []

    private storeUsers: StoreUsers
    private storeGroups: StoreGroups
    private storeDeparts: StoreDeparts

    private name: string = ""


    constructor() {
        //this.name = name
        this.storeUsers = new StoreUsers()
        this.storeGroups = new StoreGroups()
        this.storeDeparts = new StoreDeparts()
    }

    set(table_name: string, list: any[]) {
        switch (table_name) {
            case "users":
                this.setUsers(list)
                break;

            case "departs":
                this.setDeparts(list)
                break;

            case "groups":
                this.setGroups(list)
                break;

            default:
                return
        }

    }

    get(table_name: string): any {
        let s: any[] = []
        switch (table_name) {
            case "users":
                s = this.storeUsers.get()
                console.log("s:", s)
                break;

            case "departs":
                s = this.getDeparts()
                break;

            case "groups":
                s = this.getGroups()
                break;

        }

        return s
    }

    private generateId = () => this.list.length > 0 ? this.list.length + 1 : 1

    private setUsers(users: User[]) {
        //this.users = users
        const _id = this.list.length > 0 ? this.list.length + 1 : 1
        this.storeUsers.set(users)
        this.list.push({ id: this.generateId(), 'users': this.storeUsers.get() })
    }

    private getUsers(): User[] {
        return this.storeUsers.get()
    }

    private setGroups(groups: Group[]) {
        //this.groups = groups
        this.storeGroups.set(groups)
        this.list.push({ id: this.generateId(), 'groups': this.storeGroups.get() })
    }

    private getGroups(): Group[] {
        return this.storeGroups.get()
    }

    private setDeparts(departs: Department[]) {
        //this.departs = departs
        this.storeDeparts.set(departs)
        this.list.push({ id: this.generateId(), 'departs': this.storeDeparts.get() })
    }

    private getDeparts(): Department[] {
        return this.storeDeparts.get()
    }

    getAll(): any[] {
        return this.list
    }

}
