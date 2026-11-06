
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