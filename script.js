let Saisi = document.getElementById('InputText');
let Ajout = document.getElementById('ajout');
let List = document.getElementById('list');

Ajout.addEventListener('click', () => {
    if(Saisi.value == ''){
        return
    }else{
        let li = document.createElement('li');
        li.innerHTML = `<a href="#">${Saisi.value}</a>`
        let span = document.createElement('span');
        span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        li.appendChild(span);
        List.appendChild(li);
        
        span.onclick = () =>{
            li.remove();
            sauvegarde();
        }
        
        sauvegarde();
        
    }
    Saisi.value = ''
})

function sauvegarde(){
    let tableau = [];
    let lesElements = List.querySelectorAll('li a');
    lesElements.forEach(n => {tableau.push(n.textContent)});
    localStorage.setItem('todo', JSON.stringify(tableau))
}

function recupere(){
    let recupTab = JSON.parse(localStorage.getItem('todo'))
        recupTab.forEach(a => {
        let li = document.createElement('li');
        li.innerHTML = `<a href="#">${a}</a>`
        let span = document.createElement('span');
        span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        li.appendChild(span);
        List.appendChild(li);    
        span.onclick = () =>{
        li.remove();
        sauvegarde();
    }
})
}

recupere();

// localStorage.clear('donne');