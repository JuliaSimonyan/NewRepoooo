let modal=document.querySelector(".modal");
let xbutton=document.getElementById("open");
let image=document.querySelectorAll ("#iimage");
let modalImage = document.querySelector("#img");
let imageDescription = document.getElementById("description");
console.log(image);

for(let i =0; i < image.length; i++) {
    image[i].onclick = function(){
    modal.style.display="block";
    modalImage.src = this.src;
    imageDescription.innerHTML = this.alt;
   }
}


xbutton.onclick=function (){
    modal.style.display="none";
}

function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".sample-section").offset().top;
    var header_height = $(".sample-header-section").outerHeight();
    $(".sample-section").css({ "margin-top": header_height });
    $(".sample-header").css({ height: header_height - scroll_top });
  }
  // parallax_height();
  // $(window).scroll(function() {
  //   parallax_height();
  // });
  // $(window).resize(function() {
  //   parallax_height();
  // });



  /* ========================================= * 
		        BEST VIEWED FULLSCREEN
   https://codepen.io/ig_design/full/KKVQpVP
 * ========================================= */