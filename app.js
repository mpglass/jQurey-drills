let submitButton = $('#submitButton');
$(submitButton).prop('disabled', true);

$('[type="text"]').keypress(function () {
    $(submitButton).prop('disabled', false);

})
$('[type="submit"]').click(function () {
    event.preventDefault();
    let inputVal = $('[type="text"]').val();
    console.log(inputVal);
});