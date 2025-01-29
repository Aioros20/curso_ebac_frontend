$(document).ready(function() {
    $('#task-form').submit(function(event){
        event.preventDefault();

        const taskInput = $('#task-input');
        const taskList = $('#task-list');

        const newTask = taskInput.val();

        if (newTask !== ''){
            taskList.append(`<li>${newTask}</li>`);
            taskInput.val('');
        }
    });

    $('#task-list').on('click','li',function(){
        $(this).toggleClass('completed');
    });
});