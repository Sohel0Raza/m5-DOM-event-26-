function handleOnclick (){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handled by function attached on onclick attribute';
}
document.getElementById('listener-button').addEventListener('click',function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text update by add event listener button'
})

document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value;
    const p = document.getElementById('input-text')
    p.innerText = inputText;
    inputField.value = '';
})