function readURL(input) {
    if (input.files && input.files[0]) {
        document.getElementById("blah").style.display="block";
        document.getElementById("addframe").style.display="block";
        document.getElementById("canvas").style.display="block";
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result).width(150).height(200);
        };
        reader.readAsDataURL(input.files[0]);

     }
    }
  function addFrame(){
  // let imgEle1 = document.getElementById("image1");
  var imgEle1 = new Image();
  var src = "https://cdn.pixabay.com/photo/2020/12/01/14/48/14-48-07-577_1280.png";
//   imgEle1.crossOrigin = "";
//   imgEle1.src = "https://cdn.pixabay.com/photo/2020/12/01/14/48/14-48-07-577_1280.png";
  imgEle1.width = 200;
 // document.body.appendChild(imgEle1);
  let imgEle2 = document.getElementById("blah");
        let resEle = document.querySelector(".result");
        var context = resEle.getContext("2d");
//   let BtnEle = document.querySelector(".Btn");
//       BtnEle.addEventListener("click", () => {
      resEle.width = imgEle2.width;
      resEle.height = imgEle2.height;
      context.drawImage(imgEle2, 0, 0,imgEle2.width,imgEle2.height);
      
      //adding frame function
    // imgEle1.onload = function() {
    //   context.drawImage(this, 0, 0,imgEle2.width,imgEle2.height);
    // }
    //if (/^([\w]+\:)?\/\//.test(src) && src.indexOf(location.host) === -1) {
  //img.crossOrigin = "true"; // or "use-credentials"
//}
    imgEle1.src = "assets/frame.png";
//  });
 
}

function display(){
    document.getElementById("instagrampic").style.display="none";
}

function displayinsta(){
    document.getElementById("blah").style.display="none";
    document.getElementById("canvas").style.display="none";
    document.getElementById("addframe").style.display="none";
}