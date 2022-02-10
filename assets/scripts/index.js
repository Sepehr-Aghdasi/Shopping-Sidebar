$(document).ready(function () {
      function slideToggleFilter() {
            const filterBox = $(".filter-box");

            for (let i = 0; i < filterBox.length; i++) {
                  filterBox[i].addEventListener("click", function () {
                        $(this).toggleClass("rotateX180");
                        $(this).css("transition", "0.3s");

                        $(this).parent().next().slideToggle();
                  });
            }
      }

      function productCarouselAutoPlay() {
            const swiper = new Swiper(".product-carousel-ad", {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                  },
                  // navigation: {
                  //       nextEl: ".swiper-button-next",
                  //       prevEl: ".swiper-button-prev",
                  // },
            });
      }

      function dropdownFilter() {
            const dropdown = $(".dropdown-btn");
            let i;

            for (i = 0; i < dropdown.length; i++) {
                  dropdown[i].addEventListener("click", function () {
                        this.classList.toggle("active");
                        this.children[0].classList.toggle("rotate270");

                        const dropdownContent = this.nextElementSibling;
                        if (dropdownContent.style.display === "block") {
                              dropdownContent.style.display = "none";
                        } else {
                              dropdownContent.style.display = "block";
                        }
                  });
            }
      }
      
      dropdownFilter();
      productCarouselAutoPlay();
      slideToggleFilter();
});

function rangeInputSlider() {
      const rangeInput = document.querySelectorAll(".range-input input"),
            priceInput = document.querySelectorAll(".price-input input"),
            range = document.querySelector(".slider .progress");
      let priceGap = 1000;

      priceInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                  let minPrice = parseInt(priceInput[0].value),
                        maxPrice = parseInt(priceInput[1].value);

                  if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
                        if (e.target.className === "input-min") {
                              rangeInput[0].value = minPrice;
                              range.style.right = (minPrice / rangeInput[0].max) * 100 + "%";
                        } else {
                              rangeInput[1].value = maxPrice;
                              range.style.left = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                        }
                  }
            });
      });

      rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                  let minVal = parseInt(rangeInput[0].value),
                        maxVal = parseInt(rangeInput[1].value);

                  if (maxVal - minVal < priceGap) {
                        if (e.target.className === "range-min") {
                              rangeInput[0].value = maxVal - priceGap;
                        } else {
                              rangeInput[1].value = minVal + priceGap;
                        }
                  } else {
                        priceInput[0].value = minVal;
                        priceInput[1].value = maxVal;
                        range.style.right = (minVal / rangeInput[0].max) * 100 + "%";
                        range.style.left = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                  }
            });
      });
}
rangeInputSlider();
