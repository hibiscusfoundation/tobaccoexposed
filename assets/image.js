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

function addFrame() {
  let imgEle1 = document.getElementById("frame");
  let imgEle2 = document.getElementById("blah");
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