$(document).ready(function() {
			
    $.ajax({
          url: 'https://blood-support-demo.herokuapp.com/api/',
            type: 'get',
            contentType: 'application/json',
            success: function (data) {
            let div = document.createElement('div');
            for(let i=0; data.length;i++){
                let div = document.createElement('div');
                div.innerHTML = "<div><h1>Name</h1></div>"
              div.innerHTML = div.innerHTML+"<div><h1>Email</h1></div>"
              div.innerHTML = div.innerHTML+"<div><h1>Blood Group</h1></div>"

              $("#card-deck").append(div);
                             
          }
          alert(JSON.stringify(data));
        }
      });
  });
