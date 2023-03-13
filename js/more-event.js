// document.getElementById('btn-more').addEventListener('mousemove', function(){
//     console.log('clicked ')
// })

// document.getElementById('text-field').addEventListener('keydown', function(event){
//     console.log(event.target.value)
// })
// document.getElementById('text-field').addEventListener('keypress', function(event){
//     console.log(event.target.value)
// })
// document.getElementById('text-field').addEventListener('keyup', function(event){
//     console.log(event.target.value)
// })
document.getElementById('text-field').addEventListener('keyup',function(event){
    const text = event.target.value ;
    const deleteButton = document.getElementById('btn-more');
    if(text === 'delete'){
        deleteButton.removeAttribute('disabled')
    }
    else{
        deleteButton.setAttribute('disabled', true)
    }
})
document.getElementById('btn-more').addEventListener('click', function(){
    const secret = document.getElementById('secret-info')
    secret.style.display = 'none';

})
