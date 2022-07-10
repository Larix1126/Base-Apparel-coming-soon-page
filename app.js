const email = document.querySelector("[emailInput]");
const button = document.querySelector("[myButton]");
const result = document.querySelector("[result]");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
  const emailVal = email.value;
  if (validateEmail(emailVal)) {
    result.classList.remove("bad_email");
    email.classList.remove("bad_email_input");
    alert("You're request has been sent!");
    window.location.reload(true);
  } else {
    result.innerHTML = "Please provide a valid email";
    result.classList.add("bad_email");
    email.classList.add("bad_email_input");
  }
  return false;
};

button.addEventListener("click", () => {
  validate();
  button.classList.add("active");
});
