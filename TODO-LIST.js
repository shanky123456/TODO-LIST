function fun()
{
    var task=document.getElementById("input_task").value;
    
    Html=`<div class="i1"> ${task}
    <input type="checkbox" name="" id="check_box">
</div>`;

let incomplete_content = document.querySelector('.incomplete_content');
incomplete_content.insertAdjacentHTML( "beforeend", Html);




}