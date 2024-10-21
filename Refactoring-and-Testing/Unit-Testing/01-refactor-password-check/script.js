import { checkPasswords } from "./lib.js";

function initApp() {
  const pwInput1 = document.querySelector("#password1");
  const pwInput2 = document.querySelector("#password2");
  const btn = document.querySelector("#button");
  const check = document.querySelector("#check");

  btn.addEventListener("click", () => {
    const result = checkPasswords(pwInput1.value, pwInput2.value);
    check.innerText = result;
  });
}

initApp();
