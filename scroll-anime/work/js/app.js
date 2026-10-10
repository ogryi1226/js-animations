
const boxes = document.querySelectorAll(".scroll-in");

console.log(boxes);


const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("displayed");
    } else {
      entry.target.classList.remove("displayed");
    }
  });
});

boxes.forEach(function(box) {
  observer.observe(box);
});