// Check of specific todos by clicking
$('li').on('click', function(){
  $(this).toggleClass('completed');
});

// Remove item when X is clicked
$('span').on('click', function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});