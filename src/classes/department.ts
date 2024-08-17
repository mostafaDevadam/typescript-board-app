

export class Department {
    private id: number
    private managerId: number
    private name: string
    constructor(id: number, managerId: number, name: string) {
        this.id = id
        this.managerId = managerId
        this.name = name
    }

    get() {
        return { id: this.id, managerId: this.managerId, name: this.name }
    }
}
