
$('#btn').on('click', function() {
    if ($('#input').val() == '') {
        alert('Enter a name')
    } else {
    $('h1').last().text(`Hello there ${$('#input').val()} !`)
    }
})


