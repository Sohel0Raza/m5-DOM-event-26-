// const items = document.getElementsByClassName('item');
// for(const item of items){
//     item.addEventListener('click', function(event){
//         // console.log(item)
//         // console.log(event.target)
//         // console.log(event.target.parentNode)
//         event.target.parentNode.removeChild(event.target)

//     })
// }
document.getElementById('list-items').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
})

document.getElementById('btn-add-item').addEventListener('click', function(){
    const listItems = document.getElementById('list-items');
    const li = document.createElement('li');
    li.innerText = 'random item added';
    li.classList.add('item');
    listItems.appendChild(li);
})