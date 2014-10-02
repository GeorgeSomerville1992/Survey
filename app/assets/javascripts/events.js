
$(function(){
  eventfields = ["eventName", "eventPLan", "rentailAppearance", "eventAlcohol"]


  console.log("EVENT JS LOADDDING")
  getEvents = function(){
      console.log("i'mbeing called")
      // console.log({retail: data})
      $("#all_events table tbody").empty();
      $.getJSON("/events", function(data){
      $.each(data, function(i, item){ // get Retails and illterate though
        var row = $("<tr>" +
          "<td>" + item.eventName+"</td>"+
          "<td>" + item.eventPlan+"</td>" +
          "<td>" + item.eventApperance +"</td>"+
          "<td>" + item.eventAlcohol+"</td>"+
          "<td><button data-id = '"+ item.id+"' class='delete_event'>Delete</button></td>"+ 
           + "</tr>");
        console.log(row)
        row.appendTo("#all_events table tbody")
      })
    }) 
  }

  deleteEvent = function(){
      console.log("delete being called")
      $this = $(this);
      id = $this.data("id");
      console.log(id)
      path = "/events/" +id;
      $.ajax({
        url: path,
        type: "DELETE",
        dataType: "json",
        success: function(){
          getEvents();
        } 
      }) 
    }

 $("#event_form").on("submit", function(e){
    e.preventDefault();
    alert("hi") 
    data = {}
    $.each(eventfields, function(i,field){
      data[field] = $('input[name="'+field+'"]').val()
      console.log(data[field])
    })
    $.ajax({
      url: "/events",
      type: "POST",
      data: {event: data},
      dataType: "json",
      success: function(){
        getEvents()
        
        // togglePages("#all_Retails");
      } 
    }) // follow raisl routes take has but we need it in 

  })
})