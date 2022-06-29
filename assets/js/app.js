// https://viacep.com.br/ws/54720105/json/

const xht = new XMLHttpRequest();
const inputText = document.getElementById('inputText');
const onHandleAction = document.getElementById('onHandleAction');

const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');

function getJSON(cep){
    xht.onload = function(){
        if(xht.readyState === 4){
            if(xht.status === 200){
                const response = JSON.parse(xht.responseText);
                
                rua.textContent = response.logradouro;
                bairro.textContent = response.bairro;
                cidade.textContent = response.localidade;
                estado.textContent = response.uf;
            }else {
                alert('cep não encontrado!');
            }
        }else{
            alert('O CEP não é valido, digite novamente!');
        }
    }
    xht.open('GET',`https://viacep.com.br/ws/${cep}/json/`);
    xht.send();
}

// 54720105

onHandleAction.addEventListener('click', function(){
    getJSON(inputText.value);
    inputText.value = '';
})

