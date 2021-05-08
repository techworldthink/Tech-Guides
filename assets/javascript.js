// Function to increase image size
var stat = 0;
function enlargeImg(img) {
  if (stat == 1) {
    img.style.transform = "scale(1.8)";
    img.style.transition = "transform 0.25s ease";
    stat = 0;
  } else {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
    stat = 1;
  }
}
