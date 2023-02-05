function createDiv(){
    $(document).ready(function() {
        var test = {
            id: 'div',
            class: 'divclass',
            css: {
                'color': 'Purple'
            }
        };
    var $div = $('<div>', test);
    $div.html('Hello, I am a new Div. Beep bop boop');
    $('body').append($div);
    });
}