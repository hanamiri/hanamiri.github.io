// Your code goes here!
let height, width, inputValue;

// Select color input
$('#colorPicker').change(function () {
    inputValue = $(this).val();
})

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height= $('#inputHeight').val();
    width= $('#inputWeight').val();
    makeGrid(height, width);
});
// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    $('tbody').remove();
    $('table').append('<tbody></tbody>');
    for (r=1; r<=height; r++) {
        $('tbody').append('<tr></tr>');
        for (c=1; c<=width; c++) {
            $('tr:last-child').append('<td></td>');
        }
    }
    $('td').click(function() {
        inputValue = $('#colorPicker').val();
        $(this).css('background-color', inputValue);
            });
}
