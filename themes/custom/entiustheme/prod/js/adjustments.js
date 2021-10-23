$(document).ready(function () {
console.log("loading new script");
    var headerImage = $(".carousel-inner picture img");
  var headerImage2 = $(".carousel-inner img");
  if (headerImage.length > 0) {
    console.log("use picture"); 
    $(".carousel").css("background-image", `url('${headerImage[0].currentSrc}')`);
  } else if (headerImage2.length > 0) {
    console.log("use only image"); 
         $(".carousel").css("background-image", `url('${headerImage2[0].currentSrc}')`);
  } else {
    //return;
  }

  var lightboxPhotoLink = $(".projectsection.detail a");
      lightboxPhotoLink.each(function( index, thisTile ) {
          //console.log( index + ": " + $( this ).text() );
          console.log("link found");
          thisLink = $(this);
          console.log(index,thisLink);
          thisLink.attr("class", "example-image-link");
          thisLink.attr("data-lightbox", "example-set");

          thisLink.find('img').attr("class","example-image")
      });      

});