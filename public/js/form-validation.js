$(document).ready(() => {
    $("#month-select").val(new Date().getMonth()+1)
})

// $('[name="in"]').on('blur', () => {
//     if($('[name="in"]').val() < 8 || $('[name="in"]').val() > 12){
//         $('#submit').attr("disabled", true)
//         $('#submit').toggleClass("btn-primary btn-secondary")
//     }
//     else{
//         $('#submit').attr("disabled", false)
//     }

// })