const userName = document.querySelector("#username");
const submit = document.querySelector("#submit");
const error = document.querySelector("#error");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value === "") {
    userName.style.border = "1px solid red";
    error.style.display = "block";
  } else {
    userName.style.border = "1px solid gray";
    error.style.display = "none";
    const nameOfUser = userName.value.replace(/ی/gi, "ي");
     location.href = `https://vroom.shirazu.ac.ir/elmi23?guestname=${nameOfUser}`;
  }
});