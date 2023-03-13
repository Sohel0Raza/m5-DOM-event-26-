document.getElementById('item2').addEventListener('click', function(event){
    console.log('item 2 clicked');
    event.stopPropagation();
    event.stopImmediatePropagation();
})
document.getElementById('list-items').addEventListener('click', function(){
    console.log('ul clicked');
})
document.getElementById('list-container').addEventListener('click', function(){
    console.log('list container clicked');
})
document.getElementById('body').addEventListener('click', function(){
    console.log('list clicked body');
})