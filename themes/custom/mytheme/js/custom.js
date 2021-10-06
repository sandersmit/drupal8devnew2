/*jshint esversion: 6 */
console.log('normaljs');

function showloader() {
  console.log("show loader loading..");
}
showloader();
window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
  init();
});
// window.addEventListener('beforeunload', function(event) {
//         console.log('beforeunload firedevent.');
//       });
//       window.addEventListener('unload', function(event) {
//         console.log('unload event fired');
//       });
// The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting 
//for stylesheets, images, and subframes to finish loading. 
//A very different event load should be used only to detect a fully-loaded page.
// It is an incredibly popular mistake to use load where DOMContentLoaded would be much more appropriate, so be cautious.
// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("DOM fully loaded and parsed");
//   init();
// });
const body = document.querySelector("body");
const loader = document.querySelector('#loader');
let siteTitle = document.querySelector(".sitetitle");
var mainmenu = document.getElementsByTagName("nav");
var topRegion = document.getElementsByTagName("section");
var mobCloseButton = document.createElement("span");
var mobOpenButton = document.createElement("span");
var taxonomie = document.querySelector('.taxo');
var footer = document.querySelector('footer');
var contactpage = document.querySelector('.contact');
let header = document.querySelector('.hero');
const headerInnerContainer = document.querySelector('.hero .innercontainer');
const headerInnerContainerText = document.querySelector('.hero .innercontainer h2');
let contentwrapper = document.querySelector('.contentwrapper');
const commingLink = document.querySelector('.comming');
const FrontendLink = document.querySelector('.comming2');
//const headerImg = document.querySelector('.heroContainer .innercontainer').nextElementSibling.lastElementChild.style.backgroundColor = "orange";
//const headerImg = document.querySelector('.heroContainer .innercontainer').nextElementSibling.lastElementChild;
const heroContainer = document.querySelector('.heroContainer');
const myimgHolder = document.querySelector('.heroContainer .imgHolder');
const aboutmeImage = document.querySelector('.aboutme .block img');
const aboutmepage = document.querySelector('.aboutme');
const portfolioImg = document.querySelector('.portfolio.block img');
const arrayImg = document.querySelectorAll('.portfolio.block img');
const arrayImg2 = document.querySelectorAll('.portnavcontainer .block img');
const menuitems = document.querySelectorAll('.menu-item a');
let quote = document.querySelector('.meters h2');

function init() {
  const sessieCheck = function() {
    //session storage
    // Sla data op in sessionStorage
    // Vraag opgeslagen data op uit sessionStorage
    var data = sessionStorage.getItem('introscherm');
    console.log("session check set to " + data);
    if (data === 'nee') {
      console.log("skip intro animatie");
      return data;
    } else {
      console.log('show intro animatie');
    }
    // Verwijder opgeslagen data uit sessionStorage
    //sessionStorage.removeItem('key')
  }
  //sessieCheck();
  console.log("sessieCheck setting" + sessieCheck());
  if (document.querySelector('.portfolioContentTypePage2')) {
    const contentpageheaderContainer = document.querySelector('.contentpageheaderContainer');
    const contentheader = document.querySelector('.contentpageheaderimage');
    const contentheaderImage = document.querySelector('.contentpageheaderimage img');
    const contentheadertitle = document.querySelector('.contentpageheaderContainer h1');
    const contentextraImage = document.querySelector('.extraImage');
    const contentText = document.querySelector('.textContent');
    var tl = new TimelineMax({ delay: 0.5, repeat: 0, repeatDelay: 2 });
    contentheader.style.backgroundImage = "url('" + contentheaderImage.src + "')";
    //tl.fromTo(contentheader, 0.5, { opacity: 0}, { opacity: 0.8 , ease: Strong.easeOut });
    tl.fromTo(contentheader, 0.5, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 0.8, ease: Strong.easeOut });
    tl.fromTo(contentpageheaderContainer, 0.5, { backgroundColor: 'white' }, { backgroundColor: 'black', ease: Strong.easeOut });
    tl.fromTo(contentheadertitle, 0.5, { opacity: 0 }, { opacity: 1 });
    if (window.innerWidth < 768) {
      console.log('lower' + window.innerWidth);
      tl.fromTo(contentextraImage, 0.5, { marginTop: -104, opacity: 0 }, { marginTop: -100, opacity: 1, ease: Strong.easeOut });
      tl.fromTo(contentText, 0.5, { marginTop: -50, opacity: 0 }, { marginTop: 0, opacity: 1, ease: Strong.easeOut });
    } else {
      console.log('higher' + window.innerWidth);
      tl.fromTo(contentextraImage, 0.5, { marginTop: -120, opacity: 0 }, { marginTop: -150, opacity: 1, ease: Strong.easeOut }).addCallback(mynewcallback);
      tl.fromTo(contentText, 0.5, { marginTop: -50, opacity: 0 }, { marginTop: 40, opacity: 1, ease: Strong.easeOut });
    }

    function mynewcallback() {
      contentheader.parentElement.parentElement.classList.add('extra');
    }
  }
  if (document.querySelector('.aboutme')) {
    //const kopjes = document.querySelector('.aboutme .block h3');
    const afb = document.querySelector('.aboutme .block').nextElementSibling;
    //const par = document.querySelector('.aboutme .block p');
    const blok = document.querySelector('.aboutme .block');
    var tl = new TimelineMax({ delay: 0.5, repeat: 0, repeatDelay: 2 });
    tl.fromTo(blok, 0.2, { top: 50, opacity: 0 }, { top: 0, opacity: 1, ease: Strong.easeOut });
    tl.fromTo(afb, 0.2, { top: 50, opacity: 0 }, { top: 0, opacity: 1, ease: Strong.easeOut });
    tl.fromTo(quote, 0.2, { marginTop: 500, opacity: 0 }, { marginTop: 0, opacity: 1, ease: Strong.easeOut });
    let startMeters = function() {
      console.log("show loader loading..");
      const meter1 = document.querySelector('#meter1');
      var bar1 = new ProgressBar.Circle(meter1, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 1,
        trailWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        text: {
          // Initial value for text.
          // Default: null
          value: '0%',
          // Class name for text element.
          // Default: 'progressbar-text'
          className: 'progressText1',
          // Inline CSS styles for the text element.
          // If you want to modify all CSS your self, set null to disable
          // all default styles.
          // If the style option contains values, container is automatically
          // set to position: relative. You can disable behavior this with
          // autoStyleContainer: false
          // If you specify anything in this object, none of the default styles
          // apply
          // Default: object speficied below
          style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#ddd',
            position: 'absolute',
            left: '',
            top: '',
            padding: 0,
            margin: 0,
            // You can specify styles which will be browser prefixed
            transform: {
              prefix: true,
              value: ''
            }
          },
        },
        from: { color: '#5788b7', width: 2 },
        to: { color: '#5788b7', width: 5 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value + "%");
          }
        }
      });
      //bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      //bar1.text.style.fontSize = '2rem';
      // Number from 0.0 to 1.0
      var bar2 = new ProgressBar.Circle(meter2, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 1,
        trailWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        text: {
          // Initial value for text.
          // Default: null
          value: '0%',
          // Class name for text element.
          // Default: 'progressbar-text'
          className: 'progressText2',
          // Inline CSS styles for the text element.
          // If you want to modify all CSS your self, set null to disable
          // all default styles.
          // If the style option contains values, container is automatically
          // set to position: relative. You can disable behavior this with
          // autoStyleContainer: false
          // If you specify anything in this object, none of the default styles
          // apply
          // Default: object speficied below
          style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#ddd',
            position: 'absolute',
            left: '',
            top: '',
            padding: 0,
            margin: 0,
            // You can specify styles which will be browser prefixed
            transform: {
              prefix: true,
              value: ''
            }
          },
        },
        from: { color: '#5788b7', width: 2 },
        to: { color: '#5788b7', width: 5 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value + "%");
          }
        }
      });
      // Number from 0.0 to 1.0
      var bar3 = new ProgressBar.Circle(meter3, {
        //    color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 1,
        trailWidth: 5,
        easing: 'easeInOut',
        duration: 2000,
        text: {
          // Initial value for text.
          // Default: null
          value: '0%',
          // Class name for text element.
          // Default: 'progressbar-text'
          className: 'progressText3',
          // Inline CSS styles for the text element.
          // If you want to modify all CSS your self, set null to disable
          // all default styles.
          // If the style option contains values, container is automatically
          // set to position: relative. You can disable behavior this with
          // autoStyleContainer: false
          // If you specify anything in this object, none of the default styles
          // apply
          // Default: object speficied below
          style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#ddd',
            position: 'absolute',
            left: '',
            top: '',
            padding: 0,
            margin: 0,
            // You can specify styles which will be browser prefixed
            transform: {
              prefix: true,
              value: ''
            }
          },
        },
        from: { color: '#5788b7', width: 2 },
        to: { color: '#5788b7', width: 5 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value + "%");
          }
        }
      });
      //   bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      //   bar3.text.style.fontSize = '2rem';
      // Number from 0.0 to 1.0
      bar1.animate(0.8, function() {
        console.log('Animation has finished');
        bar2.animate(0.85, function() {
          bar3.animate(0.7);
        });
      });
    }
    let theelement = document.querySelector('.meters');
    let firstelement = document.querySelector('.meters').children[1];
    let secondelement = document.querySelector('.meters').children[2];
    let thirdelement = document.querySelector('.meters').children[3];
    // let elementBlock = document.querySelector('.aboutme').nextElementSibling.nextElementSibling;
    // elementBlock.children[0].style.border = "solid 1px red";
    var tl2 = new TimelineMax();
    window.addEventListener('scroll', dothis);

    function dothis() {
      if (document.querySelector('.meters')) {
        //console.log("offsetTop!" + theelement.offsetTop);
        if (window.innerWidth > 1024) {
          const triggerpoint = window.innerHeight / 2;
          console.log("triggerpoint!" + triggerpoint);
          console.log("scrolly" + window.scrollY);
          if (triggerpoint < window.scrollY) {
            console.log("match!!");
            window.removeEventListener('scroll', dothis);
            tl2.fromTo(quote, 0.2, { marginTop: 0, opacity: 1 }, { marginTop: -100, opacity: 0 }).addCallback(mynewcallback);
            startMeters();
            tl2.fromTo(firstelement, 0.2, { marginTop: 150, opacity: 0 }, { marginTop: 0, opacity: 1 });
            tl2.fromTo(secondelement, 0.5, { marginTop: 150, opacity: 0 }, { marginTop: 0, opacity: 1 });
            tl2.fromTo(thirdelement, 0.5, { marginTop: 150, opacity: 0 }, { marginTop: 0, opacity: 1 });
          }
        } else if (window.innerWidth < 1024) {
          //const triggerpoint = theelement.scrollTop;
          const triggerpoint = theelement.getBoundingClientRect().top;
          console.log("triggerpoint!" + triggerpoint);
          console.log("scrolly" + window.scrollY);
          if (triggerpoint < 100) {
            console.log("match!! mobile");
            window.removeEventListener('scroll', dothis);
            tl2.fromTo(quote, 0.2, { marginTop: 0, opacity: 1 }, { marginTop: -100, opacity: 0 }).addCallback(mynewcallback);
            startMeters();
            tl2.fromTo(firstelement, 0.2, { marginTop: 150, opacity: 0 }, { marginTop: 0, opacity: 1 });
            tl2.fromTo(secondelement, 0.5, { marginTop: 150, opacity: 0 }, { marginTop: 0, opacity: 1 });
            tl2.fromTo(thirdelement, 0.5, { marginTop: 150, opacity: 0 }, { marginTop: 0, opacity: 1 });
          }
        }

        function mynewcallback() {
          console.log("ttt");
          theelement.classList.add('extra');
        }
        //
        //window.removeEventListener('scroll', dothis);
      }
    }
  }
  // document.querySelectorAll('.aboutme .block').forEach(function(item) {
  //     var rect = item.getBoundingClientRect();
  //     item.addEventListener('scroll', CallbackFunctionblock);
  //   });
  // Execute the function "doThis" with another function as parameter,
  // in this case "andThenThis". doThis will execute whatever code it has 
  //and when it finishes it should have "andThenThis" being executed.
  // doThis(andThenThis, andLast)
  // // Inside of "doThis" it's referenced as "callback" which is 
  // //just a variable that is holding the reference to this function
  // function andThenThis() {
  //   console.log('and then this')
  // }
  // function andLast() {
  //   console.log('andLast')
  // }
  // // You can name it whatever you want, "callback" is common approach
  // function doThis(callback, callback2) {
  //   console.log('this first');
  //   // the '()' is when you are telling your code to execute the 
  //   //function reference else it will just log the reference
  //   callback();
  //   callback2();
  // }
  loader.style.display = "none";
  console.log(loader);
  //////////////PAGE NAVIGATION ANIMATION ---met callback
  function removeClass1(targetpage) {
    console.log('removeClass1');
    if (header) {
      header.classList.add('animate-fadeOut');
      header.addEventListener("transitionend", myFunction);
    }
    contentwrapper.classList.add('animate-fadeOut');
    contentwrapper.addEventListener("transitionend", myFunction);
  }

  function removeClass2() {
    console.log('removeClass2');
  }

  function myFunction() {
    console.log("transitionend!!");
    console.log(window.targetpage);
    window.location.href = window.targetpage;
  }

  function CallbackFunction(removeClass1, removeClass2) {
    removeClass1(targetpage);
    removeClass2();
  }

  function eventDelFunction() {
    console.log('click');
    event.preventDefault();
    if (header) {
      header.classList.remove('animate-fadeIn');
    }
    if (contentwrapper) {
      contentwrapper.classList.remove('animate-fadeIn');
      console.log("set")
    }
    window.targetpage = event.target.href;
    CallbackFunction(removeClass1, removeClass2);
  };
  //////////////END PAGE NAVIGATION ANIMATION ---met callback
  /////// START Intro animation.
  function showOverlaytext() {
    console.log("showOverlaytext");
    headerInnerContainerText.classList.add("fadIneffectTextOverlay");
    headerInnerContainer.addEventListener("transitionend", showFoto);
    body.removeEventListener("transitionend", showOverlaytext);
  }

  function showFoto() {
    myimgHolder.classList.add('picOpacity');
    headerInnerContainer.removeEventListener("transitionend", showFoto);
  }

  function fadeoverlaytext() {
    console.log("fade click")
    headerInnerContainerText.classList.remove("fadIneffectTextOverlay");
    headerInnerContainer.classList.add("effectTextOverlay");
    myimgHolder.classList.remove('picOpacity');
    myimgHolder.addEventListener("transitionend", removeOverLay);
    //myimgHolder.classList.remove('picOpacity');
    body.removeEventListener("click", fadeoverlaytext);
  }

  function removeOverLay() {
    console.log("remove!!!!!")
    myimgHolder.removeEventListener("transitionend", removeOverLay);
    headerInnerContainer.classList.remove('effectTextOverlay');
    body.classList.remove('intro');
    loader.parentNode.style.display = "none";
    header.addEventListener("transitionend", animateHeroTextBlock);
  }
  ///End intro animation 
  ///start hero block animation
  function animateHeroTextBlock() {
    headerInnerContainer.classList.add("effectInnercontainer");
    headerInnerContainer.addEventListener("transitionend", animateHeroText);
  }

  function animateHeroText() {
    headerInnerContainer.classList.add("effectInnercontainer2");
    headerInnerContainer.addEventListener("transitionend", animateInnerText);
  }

  function animateInnerText() {
    headerInnerContainerText.classList.add('animateInnerText1');
    headerInnerContainerText.addEventListener("transitionend", animateInnerText2);
  }

  function animateInnerText2() {
    //console.log("set!!");
    headerInnerContainerText.classList.add('animateInnerText2');
    headerInnerContainerText.addEventListener("transitionend", commingLinkshow);
  }

  function commingLinkshow() {
    console.log("set!!");
    commingLink.classList.add('animateshow');
    commingLink.removeEventListener("transitionend", commingLinkshow);
    commingLink.addEventListener("transitionend", FrontendLinkshow);
  }

  function FrontendLinkshow() {
    console.log("set!!2");
    FrontendLink.classList.add('animateshow2');
    commingLink.removeEventListener("transitionend", FrontendLinkshow);
    //sessionStorage.setItem('introscherm', 'nee');
  }
  ///////////end hero block animation
  function startSkiptintro() {
    console.log("startSkiptintro");
    animateHeroTextBlock();
  }

  function showBody() {
    console.log("showbody!!!!");
    if (header) {
      //bij eerste session laten zien, deze inbouwen met session storage
      if ((sessieCheck()) === ("nee")) {
        console.log("show intro: " + sessieCheck());
        console.log("start skip intro function: " + sessieCheck());
        //startSkiptintro();
      } else {
        console.log("start intro function");
        body.classList.add('intro');
        if (document.querySelector("body.intro")) {
          console.log("yes");
          body.addEventListener("click", fadeoverlaytext);
          body.addEventListener("transitionend", showOverlaytext);
        } else {
          console.log("geen");
          //header.classList.add('animate-fadeIn');
          //header.addEventListener("transitionend", animateHeroText);
        }
      }
    }
    if (!document.querySelector('body.intro')) {
      loader.parentNode.style.display = "none";
      if (document.querySelector('#meter1')) {
        // 
      }
      console.log("wel");
    } else {
      console.log("niet");
    }
    if (!document.querySelector('.wrapper.front')) {
      document.querySelector('.top').style.position = "relative";
    } else {
      console.log("niet");
    }
    contentwrapper.classList.add('animate-fadeIn');
  }
  if (header || contentwrapper) {
    showBody();
  }
  if (document.querySelector('#comming')) {
    document.querySelector('#comming').addEventListener("click", scrollDown);

    function scrollDown() {
      var element_to_scroll_to = document.getElementById('block-recentwork-2');
      event.preventDefault(event);
      //event.preventDefault();
      element_to_scroll_to.scrollIntoView({
        behavior: 'smooth'
      });
      console.log("set!!!!");
    }
  }

  function activeMenu() {

    var item;
for (item = 0; item < menuitems.length; item++) { 
  console.log("set---"+menuitems[item]);
  const newMenuItem = menuitems[item];
   newMenuItem.addEventListener("click", eventDelFunction);
      if (aboutmepage) {
        console.log('aboutpage!');
        if (newMenuItem.innerHTML.includes("Vision")) {
          console.log('aboutme menuitem active!');
          newMenuItem.classList.add('is-active');
        }
      }
      if (contactpage) {
        console.log('contactpage!');
        if (newMenuItem.innerHTML.includes("Contact me")) {
          console.log('contact menuitem active!');
          newMenuItem.classList.add('is-active');
        }
      }
}
   //NIET ONDERSTEUND ie
    // menuitems.forEach(function(item) {
    //   item.addEventListener("click", eventDelFunction);
    //   if (aboutmepage) {
    //     console.log('aboutpage!');
    //     if (item.innerHTML.includes("Vision")) {
    //       console.log('aboutme menuitem active!');
    //       item.classList.add('is-active');
    //     }
    //   }
    //   if (contactpage) {
    //     console.log('contactpage!');
    //     if (item.innerHTML.includes("Contact me")) {
    //       console.log('contact menuitem active!');
    //       item.classList.add('is-active');
    //     }
    //   }
    // });
  }
  activeMenu();
  //logo animation
  // if (siteTitle.innerHTML === "sander smit") {
  //   siteTitle.innerHTML = "Sander <span>Smit</span>";
  //   console.log("Sander Smit");
  // } else if (siteTitle.innerHTML === "Maarten Smit") {
  //   siteTitle.innerHTML = "Maarten <span>Smit</span>";
  //   console.log("Maarten Smit");
  // } else {
  //   console.log("Website Naam");
  //   siteTitle.innerHTML = "<div>Website <span>Naam</span></div>";
  // }
  //popup photo
  const myphotoArray = document.querySelectorAll(".block img");
  const sectionPhotos = document.querySelector(".portfolioContentTypePage");
  //console.log("mijnfoto" + myphotoArray);
  if (window.innerWidth > 1024) {
    // console.log("activate lightbox");
    myphotoArray.forEach(function(photo) {
      //console.log("hallo");
      photo.addEventListener("click", klikker);
    });
  }

  function klikker(event) {
    //console.log(event);
    const container = document.createElement("div");
    const container2 = document.createElement("div");
    container2.classList.add('child');
    container.classList.add('photoOverlay');
    const photo = document.createElement("img");
    photo.src = event.target.currentSrc;
    container.append(photo);
    //container2.append(photo);
    sectionPhotos.append(container);
    const imgOverlay = document.querySelector('.photoOverlay');
    TweenLite.fromTo(imgOverlay, 0.5, { opacity: 0 }, { opacity: 1 });
    checkforOverlay(imgOverlay);
    checkImgDimension(photo);
  }

  function checkImgDimension(photo) {
    console.log("versie2.1");
    document.querySelector('html').classList.add('noScroll');
    console.log("photowidth : " + photo.width);
    console.log("photoheight : " + photo.height);
    console.log("window width : " + window.innerWidth);
    console.log("window height : " + window.innerHeight);
    if ((photo.width <= window.innerWidth) && (photo.height <= window.innerHeight)) {
      console.log("default size");
      const newMarginTop = (window.innerHeight - photo.height) / 2;
      photo.style.marginTop = newMarginTop + "px";
    } else if ((photo.width > window.innerWidth) && (photo.height > window.innerHeight)) {
      console.log("te breede foto en te hoog");
      photo.style.height = "auto";
      const newMarginTop = (window.innerHeight - photo.height) / 2;
      photo.style.marginTop = newMarginTop + "px";
    } else if (photo.height > window.innerHeight) {
      console.log("te hoge foto");
      const newheight = window.innerHeight - 50;
      console.log("newimghoogte" + newheight);
      photo.style.height = newheight + "px";
      // 
      photo.style.width = 'auto';
      const newMarginLeft = (window.innerWidth - photo.width) / 2;
      photo.style.marginLeft = newMarginLeft + 'px';
      photo.style.marginTop = 25 + "px";
    } else if (photo.width > window.innerWidth) {
      console.log("te breede foto");
      const newwidth = window.innerWidth - 50;
      console.log("nieuwe breedte: " + newwidth);
      photo.style.width = newwidth + "px";
      photo.style.height = 'auto';
      const newMarginTop = (window.innerHeight - photo.height) / 2;
      console.log("nieuwe topmargin: " + newMarginTop);
      photo.style.marginTop = newMarginTop + 'px';
    }
  }

  function checkforOverlay(imgOverlay) {
    if (document.querySelector('.photoOverlay')) {
      const overLay = document.querySelector('.photoOverlay:not(img)');
      overLay.addEventListener("click", sluiten);

      function sluiten(event, animating) {
        /* Act on the event */
        if (event.target !== this) {
          // console.log("niet this");
        } else {
          TweenLite.fromTo(imgOverlay, 0.5, { opacity: 1 }, { opacity: 0 });
          // console.log("wel this");
          document.querySelector('html').classList.remove('noScroll');
          console.log("sluiten!");
          overLay.remove();
        }
      }
    }
  }
  //console.log(arrayImg);
  arrayImg.forEach(function(img) {
    //console.log("doetie");
    img.parentElement.style.backgroundImage = "url('" + img.src; + "')";
  });
  arrayImg2.forEach(function(img) {
    // console.log("doetie2");
    img.parentElement.style.backgroundImage = "url('" + img.src; + "')";
    img.parentElement.classList.add('newImg');
  });
  if (aboutmeImage) {
    const aboutmeImageblock = aboutmeImage.parentElement;
    aboutmeImageblock.style.backgroundImage = "url('" + aboutmeImage.src + "')";
  } else {}
  if (portfolioImg) {
    const portImageblock = portfolioImg.parentElement;
    portImageblock.style.backgroundImage = "url('" + portfolioImg.src + "')";
  } else {
    //return;
  }
  if (header) {
    //TweenLite.fromTo(siteTitle, 0.5, { opacity: 0, x: -150 }, { opacity: 1, x: 0 });
    //const headeratt = headerImg.src;
    //header.style.backgroundImage = "url('" + headeratt + "')";
    const afbCommingsoon = document.querySelector('.commingsoon img');
    const afbRecent = document.querySelector('.recentwork img');
    if (afbCommingsoon) {
      //  console.log("succes");
    } else {
      // console.log("geen succes");
    }
    const afbRecentParent = afbRecent.parentElement;
    afbRecentParent.classList.add('cont');
    afbRecentParent.style.backgroundImage = "url('" + afbRecent.src + "')";
    const afbCommingsoonParent = afbCommingsoon.parentElement;
    afbCommingsoonParent.classList.add('cont');
    afbCommingsoonParent.style.backgroundImage = "url('" + afbCommingsoon.src + "')";
  } else {
    //return;
  }
  // + "')";
  mobCloseButton.classList.add('mobBut');
  mobOpenButton.classList.add('mobButopen');
  topRegion[0].appendChild(mobCloseButton);
  topRegion[0].appendChild(mobOpenButton);
  if (window.innerWidth < 769) {
    mainmenu[0].classList.add("mobile");
    //console.log('opened on window.innerWidth < 769');
  } else {
    //console.log('no class added');
  }
  window.addEventListener('resize', resize);

  function resize() {
    if (window.innerWidth < 769) {
      if (mainmenu[0].classList.contains("mobile")) {
        //console.log('classname is allready there');
      } else {
        //console.log('there is no classname so add one');
        mainmenu[0].classList.add("mobile");
      }
    } else {
      if (mainmenu[0].classList.contains("mobile")) {
        // console.log('classname is allready there, so remove it because its no mobile');
        mainmenu[0].classList.remove("mobile");
      } else {
        // console.log('no classname needed because its none mobile');
      }
    }
  }
  console.log("testing");
  if (document.getElementsByClassName("layout-sidebar").length > 0) {
    //console.log("set sitebar class");
    document.getElementsByClassName("layout-sidebar")[0].style.background = "ivory";
    document.getElementsByClassName("layout-sidebar")[0].style.display = "block";
    let things = document.getElementsByClassName("main");
    for (var i = 0; i < things.length; i++) {
      things[i].classList.add("use-aside");
    }
  } else {
    //console.log("dont set sitebar class");
  }
  //var logo = document.getElementsByClassName("logo")[0];
  var submenus = document.getElementsByClassName("submenu");
  for (var m = 0; m < submenus.length; m++) {
    //console.log("submenu" + submenus[m]);
    var targetMainMenuLink = submenus[m].parentElement;
    targetMainMenuLink.style.background = "";
    targetMainMenuLink.classList.add("dropdownItem");
    //submenus[m].style.background = 'white';
    targetMainMenuLink.addEventListener("mouseenter", function(event) {
      //console.log("mouseover");
      event.target.classList.add("visible");
    });
    targetMainMenuLink.addEventListener("mouseleave", function(event) {
      //console.log("mouseleave");
      event.target.classList.remove("visible");
    });
  }
  mobOpenButton.addEventListener("click", function(event) {
    //console.log("click open menu");
    event.preventDefault(event);
    mainmenu[0].classList.add("active");
    topRegion[0].classList.add("mobile");
    document.querySelector('body').classList.add('noscroll');
    if (document.querySelector('.contentpageheaderContainer h1')) {
      document.querySelector('.contentpageheaderContainer h1').style.zIndex = '0';
    }
  });
  mobCloseButton.addEventListener("click", function(event) {
    event.preventDefault(event);
    //console.log('clcick');
    mainmenu[0].classList.remove("active");
    topRegion[0].classList.remove("mobile");
    document.querySelector('body').classList.remove('noscroll');
    if (document.querySelector('.contentpageheaderContainer h1')) {
      document.querySelector('.contentpageheaderContainer h1').style.zIndex = '1';
    }
  });
  if (taxonomie) {
    checkTaxo();

    function checkTaxo() {
      //console.log("aanwezig");
      footer.classList.add("margin");
    }
    var tl = new TimelineMax({ delay: 0.5, repeat: 0, repeatDelay: 2 });
    const portnavTitles = document.querySelectorAll('.taxo h2');
    portnavTitles.forEach(function(item) {
      console.log(item);
      tl.fromTo(item, 0.2, { top: 0, opacity: 0 }, { top: 20, opacity: 1, ease: Strong.easeOut });
    });
  }
  var SomeElements = document.getElementsByTagName("h2");
  for (var teller = 0; teller < SomeElements.lenght; teller++) {
    //console.log("aantal h3's " + SomeElements[teller]);
  }
}
