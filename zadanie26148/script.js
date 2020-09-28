let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let newList = document.createElement('ol');
let newListId = document.createAttribute('id');
newListId.value = 'orderedList';
newList.setAttributeNode(newListId);
document.body.appendChild(newList);

for (i=0; i<cities.length; i++) {
    let newItem = document.createElement('li');
    let newItemContent = document.createTextNode(cities[i]);
    let newItemClass = document.createAttribute('class');
    newItemClass.value = 'item';
    newItem.appendChild(newItemContent);
    newItem.setAttributeNode(newItemClass);
    newList.appendChild(newItem);
}

document.getElementsByClassName.style.color = 'red';







