let list = document.getElementById('items');
let btn = document.getElementById('btn');

const addListItem = () => {
    let newItem = document.createElement('li');
    let newItemContent = document.createTextNode(`Item ` + (list.children.length+1));
    let newItemAttr = document.createAttribute('class');
    newItemAttr.value = 'item';
    newItem.appendChild(newItemContent);
    newItem.setAttributeNode(newItemAttr);
    list.appendChild(newItem);
};

btn.onclick = addListItem;

console.log(list.children.length+1);
