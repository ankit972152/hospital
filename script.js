const form = document.getElementById("feedbackForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  
  successMessage.style.display = "block";

  
  form.reset();

 
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 5000);
});