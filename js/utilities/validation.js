export function validateEmail(newsletter) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(newsletter);
  return patternMatches;
}
