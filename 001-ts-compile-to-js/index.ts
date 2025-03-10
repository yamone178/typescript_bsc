// import add from "./math";

// const myName = "yamone"

// {
//     const myName = "Inner Scope yamone"
//     const output =`My name is ${myName}`
//     console.log(output);
    
// }

// add(1,2)

// let role : "admin"| "user" | string="admin"

// let anyNotation: any = 123;

// anyNotation = "abcd";

// console.log(anyNotation);

// let neverData : never;

// enum Role {
//     USER,
//     SUPERVISOR,
//     ADMIN,
//     SUPERADMIN
// }

// const userRole = Role.USER
// const adminRole = Role.ADMIN

// console.log(Role.SUPERADMIN, Role.SUPERVISOR)

// Object type

// const person : {
//     name: string,
//     age: number,
//     status: "active" | "inactive",
//     isAdmin ?: boolean // ? => optional properties

// }= {
//     name: "Yamone",
//     age: 20,
//     status: "active",
    
// }

// tuple

type ColorTuple = [number, number,number];

const redColor : ColorTuple = [255,0,0]
console.log(redColor)

const [red, green, blue] = redColor

console.log(green)

let ourTuple : [number, boolean, string];

ourTuple =[5,true, 'abcd']

console.log(ourTuple);



