const validateEmail = (email: string): boolean => {
  const regex = /^[A-Za-z0-9\-_]+@\w+\.\w{2,}$/;

  return regex.test(email);
};

const validatePassword = (password: string): { isValid: boolean, message?: string } => {
  const regexMinLength = /(?=^.{8,})/;
  const regexLeastDigit = /(?=.*\d)/;
  const regexLeastUpperCase = /(?=.*[A-Z])/;
  const regexSpecialSymbol = /(?=.*[!@#$%^&*()])/;

  if (!regexMinLength.test(password)) return { isValid: false, message: 'Password should be at least 8 symbols' };
  if (!regexLeastDigit.test(password)) return { isValid: false, message: 'Password should be contain one digit' };
  if (!regexLeastUpperCase.test(password)) return { isValid: false, message: 'Password should be contain one uppercase symbol' };
  if (!regexSpecialSymbol.test(password)) return { isValid: false, message: 'Password should be contain one of !@#$%^&*()' };

  return { isValid: true };
};

export { validateEmail, validatePassword };
