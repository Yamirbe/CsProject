
 // Get the form and button elements
 const signinForm = document.getElementById('signinForm');
 const signinBtn = document.getElementById('signinBtn');
 let nameField = document.getElementById("nameField");
 let title = document.getElementById("title");
 let emailField = document.getElementById("emailField");
 let passwordField = document.getElementById("passwordField");

 // Function to handle form submission
 function handleFormSubmit(event) {
   event.preventDefault(); // Prevent the default form submission behavior

   // Get the form data
   const formData = new FormData(signinForm);
   const username = formData.get('username');
   const email = formData.get('email');
   const password = formData.get('password');

   // Perform validation or other actions here (e.g., sending data to server)

   // Example: Displaying form data
   console.log('Username:', username);
   console.log('Password:', password);
   console.log('Email:', email);

   // Reset the form
   signinForm.reset();
 }

 // Add event listener for form submission
 signinForm.addEventListener('submit', handleFormSubmit);


            


signinBtn.onclick = function(){
    nameField.style.maxHeight= "60px";
    title.innerHTML="Sign up";
    signinBtn.classList.remove("disable");
    
}