/* Máscaras ER */
const PHONE_INPUT_ID = 'form-field-telefone';

(function( $ ) {
    $(function() {
      $('#' + PHONE_INPUT_ID).mask('(00) 0 0000-0000');
    });
})(jQuery);

function getById(idName){
    return document.getElementById(idName);
}

window.onload = function() {
    // pega a referência para o elemento 'input' do telefone
    let phoneInput = getById(PHONE_INPUT_ID);
    // não sei o que este trecho está pretendendo fazer, por isso comentei ele pra fora
    phoneInput.maxlength = 16;
    phoneInput.addEventListener('input', function(e) {
        let phoneStr = e.target.value;
        phoneStr = mtel(phoneStr);
        e.target.value = phoneStr;
    });
}