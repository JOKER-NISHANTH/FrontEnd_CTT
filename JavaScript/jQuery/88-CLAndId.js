$('#ID').text('Changed by Class');
$('.One').text("Changed by ID");

//console.log($('.Cool').html())
// $('li').html('<li>I Hacked You</li>')

// $('li').css('color','blue')




//=====================================================
//JavaScript

 let List = document.querySelectorAll('li')
// console.log(List)  // REturn ROW so WE will do forEach
List.forEach((li) => {
    li.style.color = 'pink';

})
