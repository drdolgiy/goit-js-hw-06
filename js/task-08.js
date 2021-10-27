const loginForm = document.querySelector(".login-form");
console.log(loginForm);

loginForm.addEventListener("submit", onLoginFormClick);

function onLoginFormClick(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if ((email.value, password.value === "")) {
    return alert("Bсе поля должны быть заполнены!");
  }

  const dataFormResult = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    dataFormResult[name] = value;
  });

  console.log(dataFormResult);

  loginForm.reset();
}
