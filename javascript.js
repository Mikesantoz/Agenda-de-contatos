let formulario = document.getElementById('formulario-principal');

let adicionar_html = '';

formulario.addEventListener('submit',function(e){
    e.preventDefault();

    let nome_do_contato = document.getElementById('nome').value;
    let numero_do_contato = document.getElementById(`numero-de-telefone`).value;

    let adicionar = `<tr>`;
    adicionar += `<td>${nome_do_contato}</td>`;
    adicionar += `<td>${numero_do_contato}</td>`;
    adicionar += `</tr>`;

    adicionar_html += adicionar; 

    let valor = document.querySelector('tbody');
    valor.innerHTML = adicionar_html;

    document.getElementById('nome').value = '';
    document.getElementById('numero-de-telefone').value = '';
});