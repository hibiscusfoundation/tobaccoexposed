 function readURL(input) {
    if (input.files && input.files[0]) {
        document.getElementById("blah").style.display="block";
        document.getElementById("addframe").style.display="block";
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result).width(150).height(200);
        };
        reader.readAsDataURL(input.files[0]);
     }
    }
print(image)

function addFrame(){
  let imgEle1 = document.getElementById("image1");
  let imgEle2 = document.getElementById("blah");
  let resEle = document.querySelector(".result");
  var context = resEle.getContext("2d");
  let BtnEle = document.querySelector(".Btn");
  BtnEle.addEventListener("click", () => {
      resEle.width = imgEle2.width;
      resEle.height = imgEle2.height;
      context.globalAlpha = 1.0;
      context.drawImage(imgEle2, 0, 0,imgEle2.width,imgEle2.height);
      context.globalAlpha = 1.0;
      context.drawImage(imgEle1, 0, 0,imgEle2.width,imgEle2.height);
  });
}

function display(){
    document.getElementById("uploadpic").style.display="block";
}

function displayinsta(){
    document.getElementById("uploadpic").style.display="none";
}