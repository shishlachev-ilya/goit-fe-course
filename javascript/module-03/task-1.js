const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

/**
 *  Check login validation condition
 * @param {string} login
 * @returns {boolean}
 */
const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    console.log('Mistake! Login must be from 4 to 16 characters');
    return false;
  }
};

/**
 * Checks for the login of a common login array
 * @param {array} all
 * @param {string} login
 * @returns {boolean}
 */
const isLoginUnique = function (all, login) {
  if (!all.includes(login)) {
    return true;
  } else {
    console.log('This login is already in use!');
    return false;
  }
};

/**
 * Add login if passed checks
 * @param {array} all
 * @param {string} login
 */
const addLogin = function (all, login) {
  if (isLoginValid(login) && isLoginUnique(all, login)) {
    all.push(login);
    console.log('Login successfully added!');
  }
};

addLogin(logins, 'Ajax');
addLogin(logins, 'robotGoogles');
addLogin(logins, 'Zod');
addLogin(logins, 'jqueryisextremelyfast');