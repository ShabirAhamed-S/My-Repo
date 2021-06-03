// Password title
const title = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
// Password pattern
const pattern = "(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}";
// Validate email Regex
const validEmailRegex =
  RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

module.exports = { title, pattern, validEmailRegex }