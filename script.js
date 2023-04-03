var aboutUsLink = document.getElementById("about-us-link");
var aboutUsSection = document.getElementById("about-us");

aboutUsLink.addEventListener("click", function(event) {
  event.preventDefault();
  
  var sectionTop = aboutUsSection.offsetTop;
  window.scrollTo({
    top: sectionTop,
    behavior: "smooth"
  });
});
