$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const addTarefa = $('#novaTarefa').val();
        const addLinha = $('<li></li>');
        addLinha.text(addTarefa);
        $(addLinha).appendTo('ul');

        $('#novaTarefa').val('');

        $('ul').on('click','li', function(){
            $(this).css('text-decoration', 'line-through');
        })
    })
})