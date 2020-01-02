function rand(number) {
    return Math.floor(Math.random()*number)
}

$(document).ready(function(){
    $('#statusBar').hide()
    $('#test').hide()
    $('#restart').hide()
})




$("#start").on('click',function(){
    Swal.fire({
        title:"準備好了嗎",
        showCancelButton: true,
        confirmButtonText:'好的',
        cancelButtonText:"還沒",
    }).then((result) => {
        if(result.value) {
            $('#statusBar').show();
            $('#start').hide()
            $('#test').show()
        }
    })
})

let count = 10

$("#test").on('click',function () {
    let pick = rand(count);
    console.log(pick);
    popEvent[pick]();
    popEvent.splice(pick,1)
    count--
    if(count==1){
        $('#test').hide()
        $('#restart').show()
        $('.card-text').text('你沒有大富大貴也沒有聲名遠播，就這樣勇者之途平凡的結束了，也許這也是一種不錯的結局吧...')
    }
})

$('#restart').on('click',function(){
    window.location.reload()
})
