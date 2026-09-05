const { createElement } = require("react");sdfs

function additem()
{
    let inputvalue = document.querySelector('#input-item').value;
    let  li = document.createElement('li');   
         li.textContent = inputvalue;               
    document.querySelector('#list').appendChild(li);
    
    document.querySelector('#input-item').value = '';
        
}