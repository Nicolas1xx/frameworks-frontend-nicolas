const form=document.querySelector('#form'), input=document.querySelector('#task'), list=document.querySelector('#list');
let tasks=JSON.parse(localStorage.getItem('tasks')||'[]');
const save=()=>localStorage.setItem('tasks',JSON.stringify(tasks));
function render(){list.innerHTML='';tasks.forEach((t,i)=>{const li=document.createElement('li');const check=document.createElement('input');check.type='checkbox';check.checked=t.done;check.onchange=()=>{tasks[i].done=check.checked;save();render()};const span=document.createElement('span');span.textContent=t.text;span.className=t.done?'done':'';const del=document.createElement('button');del.textContent='Excluir';del.className='remove';del.onclick=()=>{tasks.splice(i,1);save();render()};li.append(check,span,del);list.append(li)})}
form.onsubmit=e=>{e.preventDefault();const text=input.value.trim();if(!text)return;tasks.push({text,done:false});input.value='';save();render()};render();
