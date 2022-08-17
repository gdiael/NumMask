/* Máscaras ER */

function mtel(v){
    //Remove tudo o que não é dígito
    v = v.replace(/\D/g,"");
    //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/^(\d{2})(\d)/g,"($1) $2 ");
    //Coloca hífen entre o quarto e o quinto dígitos
    v = v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;
}

function getById(idName){
    return document.getElementById(idName);
}

function getSubmitButton() {
    // com o botão não tem id, acessei ele usando o nome da classe, pois existe apenas um botão na página
    // caso sejam adicionados mais botões, deve ser revisto esse código
    try {
        let collection = document.getElementsByClassName("elementor-button elementor-size-sm elementor-animation-grow");
        if(collection.lenght > 0){
            return collection.item(0);
        }
    } catch(ex) {
        alert(ex.tostring());
    }
    return null;
}

window.onload = function(){
    // desativa o botão de enviar
    // let submitBt = getSubmitButton();
    // submitBt.disabled = true;
    // pega a referência para o elemento 'input' do telefone
    let phoneInput = getById('form-field-telefone');
    // não sei o que este trecho está pretendendo fazer, por isso comentei ele pra fora
    // phoneField.pattern = ".{15,}"; 
    phoneInput.maxlength = 16;
    phoneInput.addEventListener('input', function(e) {
        let phoneStr = e.target.value;
        phoneStr = mtel(phoneStr);
        e.target.value = phoneStr;
        if(phoneStr.lenght == 16) {
            alert('ok');
        }
    });
}