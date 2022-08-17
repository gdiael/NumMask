/* Máscaras ER */
const PHONE_INPUT_ID = "form-field-telefone";
const SUBMIT_DIV_CLASSNAME = "elementor-button elementor-size-sm elementor-animation-grow";

let SubmitBtPointerEventsOld;

(function( $ ) {
    $(function() {
      $('#' + PHONE_INPUT_ID).mask('(00) 0 0000-0000');
    });
})(jQuery);

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

function getSubimitButton() {
    let submitBt = document.getElementsByClassName(SUBMIT_DIV_CLASSNAME);
    if(submitBt.length > 0) {
        return submitBt.item(0);
    }
    return null;
}

window.onload = function() {
    // pega a referência para o elemento 'input' do telefone
    let phoneInput = getById(PHONE_INPUT_ID);
    // não sei o que este trecho está pretendendo fazer, por isso comentei ele pra fora
    phoneInput.maxlength = 16;
    // pegar o botão de submeter
    let submitBt = getSubimitButton();
    // desativa a capacidade de clicar
    SubmitBtPointerEventsOld = submitBt.style.pointerEvents;
    submitBt.style.pointerEvents = 'none';
    phoneInput.addEventListener('input', function(e) {
        let phoneStr = e.target.value;
        let submitBtBase = getSubimitButton();
        if(mtel(phoneStr).length == 16) {
            submitBtBase.style.pointerEvents = SubmitBtPointerEventsOld;
        } else {
            submitBtBase.style.pointerEvents = 'none';
        }
    });
}