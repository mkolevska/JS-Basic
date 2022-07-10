
let textInput = $('#text')
let colorInput = $('#color')
let button = $('#btn')


button.on('click', function () {

    if (textInput.val() === '') {
        $('h3').text(`Error. Enter text`)
        $('h1').remove()
    } else {
        $('h3').text(``)
        $('h1').remove()
        button.after($(`<h1></h1`).text(textInput.val()).css('color', colorInput.val()))
    }
})