import IsEmail from 'isemail';

const emailValidator = value => {
  const isValid = IsEmail.validate(value);
  return isValid ? undefined : 'Email est invalide.';
};

const passwordValidator = value => {
  const isValid = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$/.test(value);
  return isValid && value.length >= 8 ? undefined : 'Le mot de passe est invalide.';
};

const cguValidator = value => (value ? undefined : 'Vous devez accepter les CGU.');

export { cguValidator, emailValidator, passwordValidator };
