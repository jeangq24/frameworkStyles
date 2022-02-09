$('#alert-primary').click(function(){
    $('.alert-primary').css('display','block');
    setTimeout(function() {
        $('.alert').hide();
    }, 2000)   
})

$('#alert-danger').click(function(){
    $('.alert-danger').css('display','block');
    setTimeout(function() {
        $('.alert').hide();
    }, 2000)   
})

$('#alert-warning').click(function(){
    $('.alert-warning').css('display','block');
    setTimeout(function() {
        $('.alert').hide();
    }, 2000)   
})
