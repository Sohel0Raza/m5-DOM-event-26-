// step 1: add event listener to the post button
document.getElementById('btn-post').addEventListener('click', function(){
    //step 2: get the comment inside the text area
    const newComment =document.getElementById('new-comment');
    const comment = newComment.value;
    // step 3: set the comment inside comment 
    // 1. get the comment 
    //2. create a new element (p tag)
    // 3. set the text of the comment as innerText of the p tag
    //4. add the p tag using apppendChild
    const allComment = document.getElementById('all-comment')
    const p = document.createElement('p')
    p.innerText = comment;
    allComment.appendChild(p);
    newComment.value = ''; 
})