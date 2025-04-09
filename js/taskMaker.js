import Task from './task.js'

export default class TaskMaker{
    static tasksDivRef;

    constructor(mainDiv, tasksDiv){
        const title = document.createElement('input');
        title.type = 'text';
        title.maxLength = 26;

        const description = document.createElement('input');
        description.type = 'text';
        description.maxLength = 56;

        const time = document.createElement('input');
        time.type = 'text';
        time.maxLength = 14;
        time.placeholder = 'HH:MM DD.MM.YY';
        time.addEventListener('input',function(e) {
            const value = e.target.value.replace(/\D/g, ''); // Удаляем все не-цифры
            let formattedValue = '';
            
            // Форматируем строку по шаблону
            for (let i = 0; i < value.length; i++) {
                if (i === 2) formattedValue += ':';
                if (i === 4) formattedValue += ' ';
                if (i === 6) formattedValue += '.';
                if (i === 8) formattedValue += '.';
                if (i >= 12) break; // Ограничиваем длину
                
                formattedValue += value[i];
            }
            
            e.target.value = formattedValue;
            
            // Проверяем валидность
            if (isValidTimeFormat(formattedValue)) {
                e.target.style.borderColor = 'green';
            } else {
                e.target.style.borderColor = 'red';
            }
        });

        //time.maxLength = 14;

        TaskMaker.tasksDivRef = tasksDiv;

        const target = document.createElement('select');
        target.classList.add('bg-light', 'border-dark');
        target.style.padding = '0.375rem 0.75rem';
        target.style.fontSize = '1rem';
        target.style.lineHeight = '1.5';
        target.style.borderRadius = '0.25rem';

        const targetOption1 = document.createElement('option');
        const targetOption2 = document.createElement('option');
        const targetOption3 = document.createElement('option');

        targetOption1.value = 'all';
        targetOption2.value = 'enoonni';
        targetOption3.value = 'Angel';
        
        targetOption1.textContent = 'all';
        targetOption2.textContent = 'enoonni';
        targetOption3.textContent = 'Angel';

        target.appendChild(targetOption1);
        target.appendChild(targetOption2);
        target.appendChild(targetOption3);

        const buttonCreate = document.createElement('button');
        buttonCreate.textContent = 'create';
        buttonCreate.classList.add('btn', 'btn-light', 'btn-outline-dark');
        buttonCreate.addEventListener('click', () => {            
            if(isValidTimeFormat(time.value)){
                let textTitle = '';
                let textDescription = '';
                
                if(textTitle === title.value){
                    textTitle = '________________________________________';
                }
                else{
                    textTitle = title.value;
                }

                if(textDescription === description.value){
                    textDescription = '________________________________________';
                }
                else{
                    textDescription = description.value;
                }
                
                let task = new Task(
                    TaskMaker.tasksDivRef, 
                    Task.countInstances + 1, 
                    textTitle, 
                    textDescription, 
                    time.value, 
                    target.value);
            }
            else{            
                console.log('unvalid time');
            }

        });
        
        const taskMakerDiv = document.createElement('div');
        taskMakerDiv.style.display = 'flex';
        taskMakerDiv.style.flexDirection = 'row';
        taskMakerDiv.style.alignItems = 'center';
        taskMakerDiv.style.justifyContent = 'center';
        taskMakerDiv.style.padding = '10px';
        taskMakerDiv.style.border = '1px solid black';
        taskMakerDiv.style.borderRadius = '5px';
        taskMakerDiv.style.marginBottom = '10px';
        taskMakerDiv.style.backgroundColor = 'black';

        taskMakerDiv.appendChild(title);
        taskMakerDiv.appendChild(description);
        taskMakerDiv.appendChild(time);
        taskMakerDiv.appendChild(target);
        taskMakerDiv.appendChild(buttonCreate);
        
        mainDiv.appendChild(taskMakerDiv);
    }

    CreateTask(){
        if(isValidTimeFormat(time.value)){
            let task = new Task(
            TaskMaker.tasksDivRef, 
            Task.countInstances + 1, 
            title.value, 
            description.value, 
            time.value, 
            'ggw[');

        }
        else{            
            console.log('unvalid time');
        }
    }
    
    Validation(){

    }

    ValidationTitle(){
        //if(this.title.textContent.)
    }

    ValidationDescription(){

    }

    ValidationTime(){

    }

    isValidTimeFormat(time) {
        // const regex = /^([01]\d|2[0-3]):([0-5]\d) ([0-2]\d|3[01])\.(0\d|1[0-2])\.(\d{2})$/;
        // if (!regex.test(time)) return false;
        
        // const [_, hours, minutes, day, month, year] = time.match(regex);
        // const date = new Date(`20${year}-${month}-${day}T${hours}:${minutes}:00`);
        
        // return (
        //   date.getDate() == day &&
        //   date.getMonth() + 1 == month &&
        //   date.getFullYear() % 100 == year
        // );
      }
}

function isValidTimeFormat(time) {
    const regex = /^([01]\d|2[0-3]):([0-5]\d) ([0-2]\d|3[01])\.(0\d|1[0-2])\.(\d{2})$/;
    if (!regex.test(time)) return false;
    
    const [_, hours, minutes, day, month, year] = time.match(regex);
    const date = new Date(`20${year}-${month}-${day}T${hours}:${minutes}:00`);
    
    return (
      date.getDate() == day &&
      date.getMonth() + 1 == month &&
      date.getFullYear() % 100 == year
    );
  }