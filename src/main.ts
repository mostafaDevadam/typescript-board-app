
import { Department } from "./classes/department"
import { Group } from "./classes/group"
import { User } from "./classes/user"
import { Store } from "./store/store"

// TableUsers(id, name, position), TableGroups(id, managerId, departId), TableDeparts(id, managerId, name)

//----------- usage
// managers of group
const user1 = new User(1, "user1", "manager")
const user2 = new User(2, "user2", "manager")
// managers of depart
const user3 = new User(3, "user3", "manager")
const user4 = new User(4, "user4", "manager")
//console.log("user1: ",user1.get())
// depart
const depart1 = new Department(1, user3.get().id, "HR")
const depart2 = new Department(2, user4.get().id, "PR")
//console.log("depart1:", depart1.get())
// group
const group1 = new Group(1, user1.get().id, depart1.get().id)
const group2 = new Group(2, user2.get().id, depart2.get().id)
//console.log("group1: ", group1.get())

// list
const users: User[] = []

users.push(user1)
users.push(user2)
users.push(user3)
users.push(user4)
// departs
const departs: Department[] = []
departs.push(depart1)
departs.push(depart2)
// group
const groups: Group[] = []
groups.push(group1)
groups.push(group2)
//
const store = new Store()
store.set("users", users)
store.set("departs", departs)
store.set("groups", groups)
console.log("get users:", store.get("groups"))
console.log("getAll:", store.getAll())






