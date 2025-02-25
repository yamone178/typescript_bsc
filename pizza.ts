type Pizza ={
    name: string;
    price: number;
}

type Order ={
    id: number;
    pizza: Pizza,
    status: string;
}

const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9}
]

const cashInRegister = 100
const orderQueue = []
const nextOrderId = 0

const addNewPizza = (pizzaObj: Pizza) =>{
    menu.push(pizzaObj)
}

const placeOrder = (name) => {
    const newOrder = menu.find(pizza => pizza.name === name)
    cashInRegister += newOrder.price
    orderQueue.push({id: nextOrderId++, pizza: newOrder, status: "ordered"})

    return newOrder
}

const completeOrder = (orderId) => {  
    const order = orderQueue.find(order =>order.id === orderId)
    order.status = "completed"

    return order
}

addNewPizza({name: "Chicken Bacon", price: 12})
addNewPizza({name: "BBQ  Chicken", price: 12})

placeOrder("Chicken Bacon")
completeOrder("1")

console.log("Menu:", menu);
console.log("Cash in Register:", cashInRegister);
console.log("Order Queue:", orderQueue);
