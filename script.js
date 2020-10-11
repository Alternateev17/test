$(document).ready(function () {
  $("#first_form").submit(function (e) {
    e.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    // let tel = $('#tel').val();



    let regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
    let validEmail = regEx.test(email);

    let tel = $('input[name="tel"]').val();
    tel = Number(tel);
    console.log(tel);
    let intRegex = /[0-9 -()+]+$/;

    $(".error").remove();

    if (name.length < 1) {
      $("#name").after('<span class="error">This field is required</span>');
    }
    if (email.length < 1) {
      $("#email").after('<span class="error">This field is required</span>');
    }
    if (validEmail) {
      $("#email").after('<span class="error">Enter a valid email</span>');
    }
    if (tel.length < 6 || !intRegex.test(tel)) {
      $("#tel").after('<span class="error">Invalid phone number</span>');

    }
  });
});


$(document).ready(function () {
  $(".next").click(function () {

    let currentImage = $(".img.curry");
    let currentImageIndex = $(".img.curry").index();
    let nextImageIndex = currentImageIndex + 1;
    let nextImage = $(".img").eq(nextImageIndex);

    currentImage.fadeOut(1000);
    currentImage.removeClass("curry");

    if (nextImageIndex == $(".img:last").index() + 1) {
      $(".img").eq(0).fadeIn(500);
      $(".img").eq(0).addClass("curry");
    } else {
      nextImage.fadeIn(500);
      nextImage.addClass("curry");
    }
  });

  $(".prev").click(function () {
    let currentImage = $(".img.curry");
    let currentImageIndex = $(".img.curry").index();
    let prevImageIndex = currentImageIndex - 1;
    let prevImage = $(".img").eq(prevImageIndex);

    currentImage.fadeOut(500);
    currentImage.removeClass("curry");
    prevImage.fadeIn(500);
    prevImage.addClass("curry");
  });
});

$(document).ready(function () {
  let video_bg_el = document.getElementById('video-el');
  if (video_bg_el) {
    video_bg_el.play();
  }

  let accordion = function() {
  let data = $(".accordion").attr("data-accordion");

    $(".accordion-header").on("click", function() {
      if (data === "close") {
        $(".accordion-body").slideUp();
        if ($(this).hasClass("active")) {
            $(this).toggleClass("active");
        } else {
          $(".accordion-header").removeClass("active");
          $(this).toggleClass("active");
        }
      } else {
        $(this).toggleClass("active");
      }
      $(this).next(".accordion-body").not(":animated").slideToggle();
    });
  }
  accordion();
});



