$(document).ready(function(){
    $("#submitrequest").click(function(){
      event.preventDefault();
        let payload = {};
      payload.Email= $("#user").val();
        payload.Name= $("#Pname").val();
        payload.Discription = $("#desc").val();
        payload.BloodType = $("#blood").val();
        payload.Status= true;
      $.ajax({
    type: "POST",
    url:"https://blood-support-demo.herokuapp.com/api/create", 
    contentType: 'application/json',
    data: JSON.stringify(payload),
    success:function(data){
         window.location.href="index.html";
    },
    dataType:"json"
  });
  
    });
  });