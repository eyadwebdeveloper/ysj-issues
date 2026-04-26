let accordion = document.getElementsByClassName("lecture");
      for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
          this.classList.toggle("active3");
        });
      }