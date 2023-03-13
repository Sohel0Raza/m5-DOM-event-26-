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
