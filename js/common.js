console.log('in common.js'); //проверяем подключение файла
console.log($); //проверяем подключение JQ

$('#order-form').on('submit', submitForm); //обращаемся к событию submit (не click!)

function submitForm (ev) {
    console.log('in submitForm');
    ev.preventDefault();
    console.log(ev);
    var form = $(ev.target), //событие - target - хранятся все input
        data = form.serialize(), //собирает все данные из формы в строку
        url = form.attr('action'),
        type = form.attr('method');

        ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        var formAppend = $('.forms');
        
        if (status === 'OK') {
            formAppend.append('<p class="success append">' + mes + '</p>');
        } else{
            formAppend.append('<p class="error append">' + mes + '</p>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

//Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};