type Address ={
    street: string;
    city: string;
    country: string;
}

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address?: Address;
}


let person1: Person ={
    name: 'John',
    age: 30,
    isStudent: true,
   
}

let person2: Person ={
    name: 'Jill',
    age: 60,
    isStudent: false,
    address: {
        street: '456 Queen St',
        city: 'Toronto',
        country: 'Canada'   
    }
}

function displayInfo(person){
    console.log(`${person.name} lives at ${person.address?.street}`);
    
}

displayInfo(person1);