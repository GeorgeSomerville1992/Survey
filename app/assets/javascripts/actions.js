$(function(){
  $("#getRetails").on("click",function(e){
    e.preventDefault
    $('#all_events,#new_retail,#new_event').hide();
    $('#all_retails').show();
    getRetails();


  })
  $("#getEvents").on("click",function(e){
    e.preventDefault
    $('#all_retails,#new_retail,#new_event').hide();
    $('#all_events').show();
    getEvents();
  })

  $("#showRetail").on("click",function(e){
    e.preventDefault
    $('#new_retail').show();
    $('#new_event').hide();
    $('#all_retails,#all_events,#new_event').hide();
    $("#showRetail").addClass('boxcontainerborder')
    $("#showEvents").removeClass('boxcontainerborder')
    // console.log(fields[0])
    // console.log(fields[0]).val() come back to this
    return false
  })
  $("#showEvents").on("click",function(e){
    e.preventDefault
    $('#all_retails,#all_events,#new_retail').hide();
    $('#new_retail').hide();
    $('#all_retails').hide();
    $('#new_event').show();

    $("#showEvents").addClass('boxcontainerborder')
    $("#showRetail").removeClass('boxcontainerborder')
    return false
  })

  $("#rentailAppearance_emptyyyy").click(function(e){
    e.preventDefault
    console.log("hi")
    $("#appearOne").addClass('boxcontainerborder')
    $("#appearTwo").removeClass('boxcontainerborder')
    $("#appearThree").removeClass('boxcontainerborder')
  })
  $("#rentailAppearance_half").click(function(e){
    e.preventDefault
    $("#appearTwo").addClass('boxcontainerborder')
    $("#appearOne").removeClass('boxcontainerborder')
    $("#appearThree").removeClass('boxcontainerborder')
  })
  $("#rentailAppearance_full").click(function(e){
    e.preventDefault
    $("#appearThree").addClass('boxcontainerborder')
    $("#appearOne").removeClass('boxcontainerborder')
    $("#appearTwo").removeClass('boxcontainerborder')
  })
  $("#eventAppearance_empty").click(function(e){
    e.preventDefault
    $("#appearEventOne").addClass('boxcontainerborder')

  })
  $("#eventAppearance_half").click(function(e){
    e.preventDefault
    $("#appearEventTwo").addClass('boxcontainerborder')
    $("#appearEventOne").removeClass('boxcontainerborder')
    $("#appearEventThree").removeClass('boxcontainerborder')
  })

$("#eventAppearance_full").click(function(e){
    e.preventDefault
    $("#appearEventThree").addClass('boxcontainerborder')
    $("#appearEventOne").removeClass('boxcontainerborder')
    $("#appearEventTwo").removeClass('boxcontainerborder')

  })









})