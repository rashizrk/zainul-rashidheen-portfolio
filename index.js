window.onscroll = () => {
let header =document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
};


const darkModeIcon = document.getElementById("darkMode-icon");

    darkModeIcon.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Change icon based on mode
      if (document.body.classList.contains("dark-mode")) {
        darkModeIcon.classList.replace("bx-moon", "bx-sun");
      } else {
        darkModeIcon.classList.replace("bx-sun", "bx-moon");
      }
    });




    // Select all navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // prevent default jump
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // adjust for fixed header height
        behavior: 'smooth'
      });
    }
  });
});
