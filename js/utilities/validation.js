export function validateEmail(email, newsletter) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email, newsletter);
  return patternMatches;
}
