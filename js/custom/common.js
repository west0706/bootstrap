/* custom js */

$(function(){

    $('#btn-default').click(function(){
        //alert($(this).text());  //기본 버튼
        if ($(this).is('.btn-primary')) {
            $(this).removeClass('btn-primary');
        }
        else {
            $(this).addClass('btn-primary');

        };

    });

    $('#btn-blue').click(function(){
        var li_items = $('li');
        li_items.each(function(index) { 
            $(this).text(index + "Number");
            //alert($(this).text());
             
        });
    });


});