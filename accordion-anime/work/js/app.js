const titles = document.querySelectorAll(".list-tit");
　  
console.log(titles);

titles.forEach(function(title) {
　  title.addEventListener("click", function() {
        const item = title.parentElement;
        const content = item.querySelector(".list-content");
        const contentHeight = content.scrollHeight;
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            content.style.height = contentHeight + "px";
        } else {
            content.style.height = "0px";
        }
　  });
});