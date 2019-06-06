'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

/**
 *  Check login validation condition
 * @param {string} login
 * @returns {boolean}
 */
const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

/**
 * Checks for the login of a common login array
 * @param {array} all
 * @param {string} login
 * @returns {boolean}
 */
const isLoginUnique = (all, login) => !all.includes(login);

/**
 * Displays the status of adding a login to the console
 * @param {string} message
 */
const printMessage = message => console.log(message);

/**
 * Add login if passed checks
 * @param {array} all
 * @param {string} login
 */
const addLogin = (all, login) => {
  if (!(isLoginValid(login))) {
    printMessage('Mistake! Login must be from 4 to 16 characters');
  } else {
    isLoginUnique(all, login);
  }

  if (!(isLoginUnique(all, login))) {
    printMessage('This login is already in use!');
  }

  if (isLoginValid(login) && isLoginUnique(all, login)) {
    all.push(login);
    printMessage('Login successfully added!');
  }
};


addLogin(logins, 'Ajax');
addLogin(logins, 'robotGoogles');
addLogin(logins, 'Zod');
addLogin(logins, 'jqueryisextremelyfast');
