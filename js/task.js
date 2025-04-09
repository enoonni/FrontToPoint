export default class Task { 
    static instances = [];
    static countInstances = 0;

    constructor(tasksDiv, numberData, titleData, descriptionData, timeData, targetData){
        Task.instances.push(this);
        
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('bg-body-secondary', 'border-dark');
        taskDiv.style.display = 'flex';
        taskDiv.style.flexDirection = 'row';
        taskDiv.style.alignItems = 'center';
        
        taskDiv.style.borderBottom = '1px solid #eee';
        taskDiv.style.borderLeft = '1px solid #eee'; // Добавляем левую границу
        taskDiv.style.borderRight = '1px solid #eee'; // Добавляем правую границу
        taskDiv.style.borderTop = '1px solid #eee';

        const number = document.createElement('div');
        number.textContent = String(numberData);
        number.classList.add('border-dark');
        number.style.borderRight = '1px solid black'; // Добавляем правую рамку
        number.style.paddingRight = '10px'; // Добавляем отступ справа от текста до рамки
        number.style.marginRight = '10px';

        const title = document.createElement('div');
        title.style.borderRight = '1px solid black'; // Добавляем правую рамку
        title.style.paddingRight = '10px'; // Добавляем отступ справа от текста до рамки
        title.style.marginRight = '10px'; // Добавляем отступ справа от рамки до следующего элемента

        const description = document.createElement('div');
        description.style.borderRight = '1px solid black';
        description.style.paddingRight = '10px';
        description.style.marginRight = '10px';

        const time = document.createElement('div');
        time.style.borderRight = '1px solid black';
        time.style.paddingRight = '10px';
        time.style.marginRight = '10px';

        const target = document.createElement('div');
        target.textContent = targetData;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.classList.add('btn', 'btn-light', 'btn-outline-dark');
        deleteButton.addEventListener('click', () => {           
            taskDiv.remove();
            const index = Task.instances.indexOf(this);
            if(index !== -1){
                Task.instances.splice(index, 1);
            }
            Task.countInstances -= 1;
        });

        title.textContent = titleData;
        description.textContent = descriptionData;
        time.textContent = timeData;
        target.textContent = targetData;    

        taskDiv.appendChild(number);
        taskDiv.appendChild(title);
        taskDiv.appendChild(description);
        taskDiv.appendChild(time);
        taskDiv.appendChild(target);
        taskDiv.appendChild(deleteButton);
        
        tasksDiv.appendChild(taskDiv);

        Task.countInstances += 1;
    }    
}