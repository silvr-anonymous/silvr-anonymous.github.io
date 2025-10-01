window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "/" + String(i).padStart(6, "0") + ".jpg";
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function () {
    return false;
  };
  image.oncontextmenu = function () {
    return false;
  };
  $("#interpolation-image-wrapper").empty().append(image);
}

$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  var options = {
    slidesToScroll: 3,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    pagination: false,
    autoplaySpeed: 3000,
  };

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach(".carousel", options);

  var options_orig = {
    slidesToScroll: 1,
    slidesToShow: 4,
    loop: true,
    infinite: true,
    autoplay: false,
    pagination: true,
    autoplaySpeed: 3000,
  };

  // // Initialize all div with carousel_single class
  var carouse_best_results = bulmaCarousel.attach(
    "#best-results-carousel",
    options_orig
  );

  // carousels = carousels + carousels_orig;

  // Loop on each carousel initialized
  for (var i = 0; i < carousels.length; i++) {
    // Add listener to  event
    carousels[i].on("before:show", (state) => {
      console.log(state);
    });
  }

  // Loop on each carousel initialized
  for (var i = 0; i < carouse_best_results.length; i++) {
    // Add listener to  event
    carouse_best_results[i].on("before:show", (state) => {
      console.log(state);
    });
  }

  //-------------------------------------
  var options_locomotion = {
    slidesToScroll: 5,
    slidesToShow: 5,
    loop: true,
    infinite: true,
    autoplay: false,
    pagination: false,
    autoplaySpeed: 3000,
  };

  // // Initialize all div with carousel_single class
  var carouse_locomotion = bulmaCarousel.attach(
    "#locomotion-carousel",
    options_locomotion
  );

  // Loop on each carousel initialized
  for (var i = 0; i < carouse_locomotion.length; i++) {
    // Add listener to  event
    carouse_locomotion[i].on("before:show", (state) => {
      console.log(state);
    });
  }

  // // Loop on each carousel initialized
  // for (var i = 0; i < carousels_orig.length; i++) {
  //   // Add listener to  event
  //   carousels_orig[i].on("before:show", (state) => {
  //     console.log(state);
  //   });
  // }

  // Access to bulmaCarousel instance of an element
  var element = document.querySelector("#my-element");
  if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on("before-show", function (state) {
      console.log(state);
    });
  }

  /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
  preloadInterpolationImages();

  $("#interpolation-slider").on("input", function (event) {
    setInterpolationImage(this.value);
  });
  setInterpolationImage(6);
  $("#interpolation-slider").prop("max", NUM_INTERP_FRAMES - 1);
  // $("#interpolation-slider").prop("max", 2);

  bulmaSlider.attach();
});
