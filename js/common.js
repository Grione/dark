// console.log('in common.js');
// console.log($);

$('#order-form').on('submit', submitForm);

function submitForm (ev) {
    // console.log('in submitForm');
    ev.preventDefault();
   console.log(ev);
    var form = $(ev.target),//событие - target - хранятся все input
        data = form.serialize(),//собирает все данные из формы в строку
        url = form.attr('action');
        type = form.attr('method');

    // console.log(form);
    //  console.log(data);   
    // console.log(url);
    // console.log(type);      
    
    var request = $.ajax({
        type: type,
        url: url,
        dataType : 'JSON',
        data: data

    });

    request.done(function(msg) {
        alert(msg);
    });
    
    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
};