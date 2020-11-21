 function readURL(input) {
    if (input.files && input.files[0]) {
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

  var link = document.createElement('a');
    link.innerHTML = 'download image';
    link.addEventListener('click', function (ev) {
      link.href = canvas.toDataURL();
      link.download = "mypainting.png";
    }, false);
    document.body.appendChild(link);
  
}

window.onload = function(){
  var dwn = document.getElementById('btndownload');
      canvas = document.getElementById('canvas'),
      // context = canvas.getContext('2d');

  // Event handler for download
  dwn.onclick = function(){
    download(canvas, 'myimage.png');
  }

}


/* Canvas Donwload */
function download(canvas, filename) {
  /// create an "off-screen" anchor tag
  var lnk = document.createElement('a'), e;

  /// the key here is to set the download attribute of the a tag
  lnk.download = filename;

  /// convert canvas content to data-uri for link. When download
  /// attribute is set the content pointed to by link will be
  /// pushed as "download" in HTML5 capable browsers
  lnk.href = canvas.toDataURL("image/png;base64");

  /// create a "fake" click-event to trigger the download
  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window,
                     0, 0, 0, 0, 0, false, false, false,
                     false, 0, null);

    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}