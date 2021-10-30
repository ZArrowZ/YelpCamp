// get the button
const btn = document.getElementById("btn");
const error = document.querySelector("p");

btn.addEventListener("click", () => {
  error.style.display = "block";
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
});
