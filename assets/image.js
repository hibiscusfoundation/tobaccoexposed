function randommessage() {
  var message = [
    "Tobacco consumption kills 8 million people every year." ,
    "Tobacco use is responsible for 25% of all cancer deaths globally." ,
    "Over 1 million people die from second-hand smoke exposure every year." ,
    "The tobacco industry spends an average of 23 million dollars every day on marketing." ,
    "Smokeless doesn’t mean that it’s harmless." ,
    "Children and adolescents who use e-cigarettes at least double their chance of smoking cigarettes later in life." ,
    "E-cigarette use increases your risk of heart disease and lung disorders."
  ]
  var i = Math.floor(Math.random()*message.length);
  document.getElementById('msg').innerHTML = message[i];
}

function readURL(input) {
    if (input.files && input.files[0]) {
        document.getElementById("canvas").style.display="block";
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result).width(150).height(200);
        };
        reader.readAsDataURL(input.files[0]);
     }
    }

    function getPhoto(a) {
      document.getElementById("canvas").style.display="block";
        $.get("https://www.instagram.com/"+a+"/?__a=1")
        .done(function(data) { 
          var photoURL = data["graphql"]["user"]["profile_pic_url_hd"];
          $("#photoReturn").attr("src",photoURL)
         })
        .fail(function() { 
          alert('Username was not found!')
        })  
    }

  function addFrame(imgEle2) {
    let imgEle1 = document.getElementById("frame");
    let resEle = document.querySelector(".result");
    var context = resEle.getContext("2d");
    resEle.width = imgEle2.width;
    resEle.height = imgEle2.height;
    context.drawImage(imgEle2, 0, 0,imgEle2.width,imgEle2.height);
    context.drawImage(imgEle1, 0, 0,imgEle2.width,imgEle2.height);
    downloadimage();
}

function display(){
    document.getElementById("instagrampic").style.display="none";
}

function displayinsta(){
    document.getElementById("canvas").style.display="none";
    document.getElementById("usernameInput").style.display="inline-block";
    document.getElementById("getphoto").style.display="inline-block";
}

function downloadimage() {
  document.getElementById('dwnlink').style.display="inline-block";
  var link = document.getElementById('dwnlink');
  link.addEventListener('click', function (ev) {
  link.href = canvas.toDataURL();
  link.download = "myimage.png";
  }, false);
  document.body.appendChild(link);
}