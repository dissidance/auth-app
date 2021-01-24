type FormState = {
  showPassword: boolean,
  password: string,
  email: string,
  passwordErrorText?: string,
  emailInputError: boolean,
  passwordInputError: boolean,
};

type UserPayload = {
  password: string,
  email: string,
};

type FormProps = {
  variant: 'signup' | 'signin',
  onSubmit: (e: React.FormEvent<HTMLFormElement>, payload: UserPayload) => void
};

type AuthFormState = {
  activeTab: number,
  alertMessage: string,
  alertSeverity: 'success' | 'error',
  showAlert: boolean,
};

// eslint-disable-next-line import/prefer-default-export
export type {
  FormState, FormProps, UserPayload, AuthFormState,
};
