
// About Page Stat Cards Counter

// document.addEventListener("DOMContentLoaded", () => {
//   const counters = document.querySelectorAll(".counter");

//   const runCounter = (counter) => {
//     const target = +counter.getAttribute("data-target");
//     let count = 0;

//     const updateCount = () => {
//       const remaining = target - count;

//       // Yahan magic hota hai: Bacha hua distance jitna kam hoga, increment utna hi chota hoga
//       const increment = remaining / 15; // Is '8' ko adjust kar ke speed control kar sakte hain (zyada number = aur slow)

//       if (count < target) {
//         // Math.max(increment, 1) ensure karta hai ke last mein ruk na jaye, kam az kam 1 add ho
//         count += Math.max(increment, 1);

//         // Agar count target se exceed kar jaye toh exact target set kar do
//         if (count >= target) {
//           counter.innerText = target.toLocaleString();
//         } else {
//           counter.innerText = Math.floor(count).toLocaleString();
//           setTimeout(updateCount, 45); // Speed/smoothness delay
//         }
//       } else {
//         counter.innerText = target.toLocaleString();
//       }
//     };
//     updateCount();
//   };

//   const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           runCounter(entry.target);
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.5 },
//   );

//   counters.forEach((counter) => {
//     observer.observe(counter);
//   });
// });


new PureCounter();



// About Page Progress Bar JS
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".custom-progress-bar");

  const progressObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute("data-width");
          // Thoda sa delay de kar width apply karte hain taake animation smooth dikhe
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 200);
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.4 },
  );

  progressBars.forEach((bar) => {
    progressObserver.observe(bar);
  });
});



// About Page Progress Bar JS
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(
    ".custom-leadership-pills .nav-link",
  );
  const leaderItems = document.querySelectorAll(".leader-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Active class shift karein
      filterButtons.forEach((btn) =>
        btn.classList.remove("active", "shadow-sm"),
      );
      this.classList.add("active", "shadow-sm");

      const targetCategory = this.getAttribute("data-filter");

      // Cards ko filter karein
      leaderItems.items = leaderItems.forEach((item) => {
        const itemCategories = item.getAttribute("data-category");

        if (
          targetCategory === "all" ||
          itemCategories.includes(targetCategory)
        ) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 50);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.95)";
          setTimeout(() => {
            item.style.display = "none";
          }, 200); // Transition matching time
        }
      });
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".tier-tab-btn");
  const tierCards = document.querySelectorAll(".tier-cards-container > .col");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 1. Remove 'active' class from all buttons and add to clicked button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // 2. Get selected filter value
      const filterValue = this.getAttribute("data-filter");

      // 3. Filter Cards
      tierCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filterValue === "all" || category === filterValue) {
          card.style.display = "block";
          // Smooth fade-in effect
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});