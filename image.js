// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             $('#blah').attr('src', e.target.result).width(150).height(200);
//         };
//         reader.readAsDataURL(input.files[0]);
//     }
// }

function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}

function pixelOnEdgeDifferentThicknesses(pixel, image, hori, verti) {
    var imagewidth = image.getWidth();
    var imageheight = image.getHeight();
    var x = pixel.getX();
    var y = pixel.getY();
    if (x <= hori | x >= imagewidth-hori | 
        y <= verti | y >= imageheight-verti) {
            return true;
        }
    else return false;   
}

var image = new SimpleImage("usain.jpg");
for (var pixel of image.values()) {
    var s = pixelOnEdgeDifferentThicknesses(pixel, image, 10, 13);
    if (s == true) {
        pixel = setBlack(pixel);
    }
}

print(image)