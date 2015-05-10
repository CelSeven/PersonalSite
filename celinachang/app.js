$(document).ready(function() {
$('.first').show();
$('.second').hide();
$('.third').hide();

$('#first').click(function() {
	$('.first').show();
	$('.second').hide();
	$('.third').hide();
});

$('#second').click(function() {
	$('.second').show();
	$('.first').hide();
	$('.third').hide();
});

$('#third').click(function() {
	$('.third').show();
	$('.first').hide();
	$('.second').hide();
});
});
