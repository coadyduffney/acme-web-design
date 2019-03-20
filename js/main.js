// $(document).ready(function() {
//   animateNav();
//   $(window).scroll(function() {
//     animateNav();
//   });
// });

// // Transition effect for navbar
// function animateNav() {
//   if ($(this).scrollTop() > 200) {
//     $('.navbar').addClass('invert-nav');
//     $('.logo').addClass('invert-nav-logo');
//     $('.navbar').addClass('invert');
//     $('.navbar').addClass('invert');

//     // $('.navbar-brand').addClass('visible');
//   } else {
//     $('.navbar').removeClass('invert');
//     $('.navbar-brand').removeClass('visible');
//   }
// }

// Animate Smooth Scroll for Nav
$('#home-link').on('click', function() {
  const home = $('#home').position().top;
  $('html, body').animate(
    {
      scrollTop: home
    },
    700
  );
});

$('#about-link').on('click', function() {
  const about = $('#about').position().top;
  $('html, body').animate(
    {
      scrollTop: about
    },
    700
  );
});

$('#services-link').on('click', function() {
  const services = $('#services').position().top;
  $('html, body').animate(
    {
      scrollTop: services
    },
    700
  );
});

$('#portfolio-link').on('click', function() {
  const portfolio = $('#portfolio').position().top;
  $('html, body').animate(
    {
      scrollTop: portfolio
    },
    700
  );
});

$('#team-link').on('click', function() {
  const team = $('#team').position().top;
  $('html, body').animate(
    {
      scrollTop: team
    },
    700
  );
});

$('#contact-link').on('click', function() {
  const contact = $('#contact').position().top;
  $('html, body').animate(
    {
      scrollTop: contact
    },
    700
  );
});
function submitForm(e) {
  e.preventDefault();
  Swal.fire({
    title: 'Message Sent!',
    text: "We'll be in touch as soon as possible.",
    type: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor: '#333'
  });
}
