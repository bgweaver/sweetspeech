    function toggleNavbar() {
      const navbar = document.getElementById("navbar");
      const expanded = navbar.querySelector(".navbar-toggler").getAttribute("aria-expanded") === "true";
      if (expanded) {
        navbar.classList.add("navbar-toggler-active");
      } else {
        navbar.classList.remove("navbar-toggler-active");
      }
    }