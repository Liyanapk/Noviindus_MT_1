 document.addEventListener("DOMContentLoaded", function () {
        const schoolToggle = document.getElementById("schoolDropdown");
        const schoolSubmenu = document.getElementById("schoolSubmenu");

        schoolToggle.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          schoolSubmenu.classList.toggle("show");
        });
      });
      // Header end

      // Banner

      document.addEventListener("DOMContentLoaded", function () {
        new Swiper(".mySwiper", {
          loop: true,
          autoplay: {
            delay: 3000,
          },
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });

      // Banner End
   
