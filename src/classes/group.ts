

export class Group {
    private id: number
    private managerId: number
    private departId: number = 0

    constructor(id: number, managerId: number, departId: number) {
        this.id = id
        this.managerId = managerId
        this.departId = departId
    }

    get() {
        return { id: this.id, managerId: this.managerId }
    }

}
