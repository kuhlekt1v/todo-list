// Check of specific todos by clicking
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

// Remove item when X is clicked
$('ul').on('click', 'span', function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    // Grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val('');
    // Create a new li and add to ul
    $('ul').append('<li><span>X</span> ' + todoText + '</li>')
  }
});