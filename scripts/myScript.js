
$(function(){
  let i=1;
  $('#addBtn').click(function(){
    $('<p><input type="text" class="textbox" id="'+i+'">'+
    '<a class="dynamic-link">Delete!</a></p>').hide().fadeIn(1000).appendTo("#wellcome");
    i++
  })
  $("#mainsection").on("click",".dynamic-link",function(){
    $(this).parent().fadeOut(1000);
  })
})