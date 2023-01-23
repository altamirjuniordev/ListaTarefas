let input = document.getElementById("tarefa");
let add = document.getElementById("add");
let main = document.getElementById("areaLista")
let contador = 0

function addTarefa() {
    let tarefaInput = input.value

    if ((tarefaInput !== "") && (tarefaInput !== null) && (tarefaInput !== undefined)) {
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
        <div  class="itemIcone" onclick="tarefaConcluida(${contador})">
             <i id="i${contador}" class="fa-regular fa-circle"></i></div>
        <div class="itemNome" onclick="tarefaConcluida(${contador})">${tarefaInput}</div>
        <div class="itemBotao"><button onclick="deletar(${contador})" class="delete"><i class="fa-solid fa-trash">    Excluir</i></button></div>
    </div>`
        main.innerHTML += novoItem;
        input.value = ""
        input.focus()
        console.log(contador)
    }
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        add.click()
    }
})

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
};

function tarefaConcluida(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe)
    if(classe==="item") {
        item.classList.add('item-feito')

        var icone = document.getElementById('i'+id)
        icone.classList.remove(`fa-circle`)
        icone.classList.add('fa-circle-check')
    }
};