$(function(){
  $('#menu-toggle').on('click', function(ev){
    ev.preventDefault();
    $('#underbelly').toggleClass('open');
    return false
  });
})
