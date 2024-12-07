const input = document.getElementById('input');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

function createTask() {
    const inputValue = input.value.trim();

    if(inputValue !== '') {
        const newTask = document.createElement('div');
        
        newTask.className = 'tasks active blur-in';
        newTask.innerText = inputValue;

        setTimeout(function() {
            output.appendChild(newTask);
        }, 100);

        input.value = '';

        function delTask() {
            if(newTask.style.textDecoration == '') {
                newTask.style.textDecoration = 'line-through';

                newTask.classList.add('blur-out');

                setTimeout(function() {
                    newTask.remove();
                }, 400);
            }
    
            else {
                newTask.style.textDecoration = '';
            }
        }

        newTask.addEventListener('click', delTask);
    }
}

btn.addEventListener('click', createTask);

input.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        btn.click();
    }
});