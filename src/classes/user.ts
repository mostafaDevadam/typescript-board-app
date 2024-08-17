
import {IUser} from '../interfaces/user.interface'

export class User implements IUser {

    id: number
    name: string
    position: string

    constructor(id: number, name: string, position: string) {
        this.id = id
        this.name = name
        this.position = position
    }
    get() {
        return { id: this.id, name: this.name }
    }

}
