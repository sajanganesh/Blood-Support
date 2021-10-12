$(document).ready(function() {
    $("#register").click(function(){
        event.preventDefault();
        let payload = {};
        payload.Name= $("#name").val();
        payload.Email = $("#email").val();
        payload.BloodGroup = $("#blood").val();
        payload.AvailableStatus=true;
      console.log(payload);
      $.ajax({
            url: 'https://blood-support-demo.herokuapp.com/api/user',
          type: 'post',
          contentType: 'application/json',
          success: function (data) {
              window.location.href="index.html";
          },
          data: JSON.stringify(payload)
      });
    });
  });