$(function() {
    $('#work,#education,#links').hide();

    $('#sum').click(function(){
    	$('#work,#education,#links').hide()
    	$('#summary').show();
    });

    $('#wor').click(function(){
    	$('#summary,#education,#links').hide()
    	$('#work').show();
    });

    $('#edu').click(function(){
    	$('#summary,#work,#links').hide()
    	$('#education').show();
    });

    $('#lin').click(function(){
    	$('#content div').hide();
    	$('#links').show();
    });
});