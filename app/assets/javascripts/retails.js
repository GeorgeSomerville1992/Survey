$(function(){
    fields = ["retailStore", "retailBrand", "rentailAppearance", "retailSell"]
  $("#new_Retail_link, #all_Retails_link").on("click", function(e){
    e.preventDefault();
    
    var show_page = $(this).attr("id").replace("_link", "")
    console.log(show_page)
    togglePages("#"+ show_page)
  })
  // actaully call this on like a nava clikc event as well yeah! 
  getRetails = function(){
      $("#all_retails table tbody").empty();
      $.getJSON("/retails", function(data){
      $.each(data, function(i, item){ // get Retails and illterate though
        var row = $("<tr>" +
          "<td>" + item.retailStore+"</td>"+
          "<td>" + item.retailBrand+"</td>" +
          "<td>" + item.rentailAppearance +"</td>"+
          "<td>" + item.retailSell+"</td>"+
          "<td><button data-id = '"+ item.id+"' class='delete_retail'>Delete</button></td>"+ 
           + "</tr>");
        console.log(row)
        row.appendTo("#all_retails table tbody")
      })
    }) 
  }
  deleteRetail = function(){
      console.log("delete being called")
      $this = $(this);
      id = $this.data("id");
      console.log(id)
      path = "/retails/" +id;
      $.ajax({
        url: path,
        type: "DELETE",
        dataType: "json",
        success: function(){
          getRetails();
        } 
      }) 
    }
  $("#retail_form").on("submit", function(e){
    e.preventDefault(); 
    data = {}
    $.each(fields, function(i,field){
      data[field] = $('input[name="'+field+'"]').val()
      console.log(data[field])
    })
    $.ajax({
      url: "/retails",
      type: "POST",
      data: {retail: data},
      dataType: "json",
      success: function(){
        console.log({retail: data})
        //getRetails();
        // togglePages("#all_Retails");
      } 
    }) // follow raisl routes take has but we need it in 
  }); // hash
  // getRetails();
  $("#all_retails").on("click", ".delete_retail", deleteRetail);
}) // requires response cycle!