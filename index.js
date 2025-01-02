const bttn = document.querySelector("#btn");
bttn.addEventListener("click", () => {
  const Firstname = document.getElementById("firstname").value;
  const Lastname = document.getElementById("lastname").value;
  const Email = document.getElementById("email").value;
  const Password = document.getElementById("password").value;
  const ConfirmPassword = document.getElementById("confirmpassword").value;
  const Age = document.getElementById("age").value;
  // const Gender = document.getElementById("Gender").value;
  const gender = document.getElementById("Gender");
  const selectedGender = gender.options[gender.selectedIndex].text;
  const Terms = document.getElementById("terms").checked;

  if (Password.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }
  if (Password !== ConfirmPassword) {
    alert("Passwords do not match");
    return;
  }
  if (Age < 18) {
    alert("You must be at least 18 years old");
    return;
  }
  if (!Terms) {
    alert("You must accept the terms and conditions");
    return;
  }

  console.log(
    "name: " +
      Firstname +
      "lastname: " +
      Lastname +
      "Email: " +
      Email +
      "password: " +
      Password +
      "ConfirmPassword: " +
      ConfirmPassword,
    +"Age: " + Age + "Gender: " + selectedGender + "Terms: " + Terms
  );

  const display = document.createElement("div");
  display.innerText = `Your details:
    - Username: ${Firstname} ${Lastname}
    - Email: ${Email}
    - Age: ${Age}
    - Gender: ${selectedGender}`;
  document.body.appendChild(display);

  // const myForm = (e) => {
  //   // console.log(object);
  //   e.preventDefault();
  //   console.log("fullname: ", e.target[0].value);
  // };
});
