const colors = document.querySelectorAll(".colors");
const body = document.querySelector("body");

colors.forEach(color => {
    color.addEventListener("click", (e) => {
        if (e.target.id === e.target.id){
            body.style.backgroundColor = e.target.id;
        }
    });
});