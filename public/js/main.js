const form = document.getElementById('form')

$("#form").on('submit', event => {
    event.preventDefault()

    fetch('/generator/generate',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            in: form.elements.in.value,
            month: parseInt($("#month-select").val())
        })
    }).then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then(data => {
          createDataTable(data)
      })
})

function createDataTable(data){
    $('tbody').empty()
    data.forEach((element) => {
        $('tbody').append(buildRow(element))
    })
    // $('#table').show()
    $('#table').slideDown(1000)
    scrollTable()
}

function buildRow(rowData){
    var tr = $('<tr>',{scope:'row'})

    tr.append(buildTd(rowData.monthDay))
    tr.append(buildTd(rowData.weekDay))
    tr.append(buildTd(rowData.inTime))
    tr.append(buildTd(rowData.lunchIn))
    tr.append(buildTd(rowData.lunchOut))
    tr.append(buildTd(rowData.outTime))

    return tr
}

function buildTd(tableData){
    var td = $('<td>')
    td.append(tableData)
    return td
}

function scrollTable(){
    var position = $('#table').offset().top
    $('html, body').animate({
        scrollTop: `${position}px`
    },1000)
}
