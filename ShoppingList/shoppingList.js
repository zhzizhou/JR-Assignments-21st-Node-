let shoppingList = [
    "milk", "egg", "bread"
];


const showItems = function(inputList) {
    for (let i = 0; i< inputList.length; i++){
        console.log(i+1, inputList[i]);
    }

}

shoppingList.push("Onions");
shoppingList.push("chicken");
console.log("Welcome to your shoppoing list");
console.log("currently you have following items in your shopping list:");
shoppingList.showItems();

const checkItems = (inputList) => inputList.length > 5 ? true : false; 
const moreItems = function(inputList){
    const newItem = prompt("What items would you like to add to the shopping list?");
    inputList.push(newItem);
}



const searchItem = function(inputList, items){
    inputList.forEach(element => {
        if(element === items){
            return true;
        }
        
    });
    return false;
} 

let itemObject = {
    name: "Chocolate",
    price: 12,
    quantity: 1
}