// jQuery(document).ready(function(){
//              if (jQuery) {  
//                // jQuery is loaded  
//                console.log("Yeah!");
//                jQuery("aside").css('background', 'orange');
//              } else {
//                // jQuery is not loaded
//                alert("Doesn't Work");
//              }
//           });
//var $vid = $('video');
//$vid.addClass('play');
//var $vidStatusPlay = $('video.play');
//var $vidStatusPauze = $('.jumbotron.pauze');
// if ($('.video').paused){
//  console.log("paused!")
// }
// function playVid() {
//  console.log("play pushed");
//     //$('.video').get(0).play();
//     $('.video').addClass( 'play' );
//     $('.video').removeClass( 'pause' );
// }
// function pauseVid() {
//     //$('.video').get(0).pause();
//     console.log("pause pushed")
//     $('.video').removeClass( 'play' );
//     $('.video').addClass( 'pause' );
// }
// console.log("check it on mac");
// // $('.video.play').on("click", pauseVid);
// // $('.video.pause').on("click", playVid);
// $( ".video" ).click(function(e) {
// $( ".video" ).toggleClass( "play" );
// $(".videoContainer").toggleClass("play");
// $(".videoContainer").toggleClass("pause");
//  if ( $( this ).hasClass( "play" )) {
//     console.log("happy");
//     $('.video').get(0).pause();
//   } else {
//     console.log("sad");
//     $('.video').get(0).play();
//   }
// checkToggle();
// });
// function checkToggle(){
//  console.log("pushed");
// }
// $( ".pauze" ).click(function() {
//    console.log("pause pushed");
//    $('.video').get(0).pause();
//    $('.control').removeClass( 'pauze' );
//     $('.control').addClass( 'play' );
// });
/////////////////////////
/////////////////////////
/////////////////////////
/////Page animation START
// Note, we are purposely binding our listener on the document object
// so that we can intercept any anchors added in future.
// var cache = {};
// function loadPage(url) {
//   if (cache[url]) {
//     return new Promise(function(resolve) {
//       resolve(cache[url]);
//     });
//   }
//   return fetch(url, {
//     method: 'GET'
//   }).then(function(response) {
//     cache[url] = response.text();
//     return cache[url];
//   });
// }
// var main = document.querySelector('.contentwrapper');
// function changePage() {
//   var url = window.location.href;
//   loadPage(url).then(function(responseText) {
//     var wrapper = document.createElement('div');
//         wrapper.innerHTML = responseText;
//     var oldContent = document.querySelector('main');
//     var newContent = wrapper.querySelector('main');
//     main.appendChild(newContent);
//     animate(oldContent, newContent);
//   });
// }
// function animate(oldContent, newContent) {
//   oldContent.style.position = 'absolute';
// var fadeOut = new TweenLite.fromTo(oldContent, 1, {opacity: 1, x: 0},{opacity: 1, x: 10000});
// var fadeIn = new TweenLite.fromTo(newContent, 1, {opacity: 1, x: -10000},{opacity: 1, x: 0});
// fadeOut.eventCallback("onComplete", myFunction);
// function myFunction() {
//     console.log("remove");
//     newContent.parentNode.removeChild(oldContent);
//   };
// }
// window.addEventListener('popstate', changePage);
// document.addEventListener('click', function(e) {
//   var el = e.target;
//   while (el && !el.href) {
//     el = el.parentNode;
//   }
//   if (el) {
//     e.preventDefault();
//     history.pushState(null, null, el.href);
//     changePage();
//     return;
//   }
// });
///////////////////
///////////////////
//PAGE ANIMATION END