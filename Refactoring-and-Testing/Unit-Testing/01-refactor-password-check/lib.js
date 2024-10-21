export function arePasswordsEqual(pw1, pw2) {
  return pw1 === pw2;
}

export function checkPasswords(pw1, pw2) {
  return arePasswordsEqual(pw1, pw2) ? " Richtig" : " Falsch";
}
