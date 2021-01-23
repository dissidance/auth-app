type FormState = {
  showPassword: boolean,
  password: string,
  email: string
};

type FormProps = {
  variant: 'signup' | 'signin',
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
};

// eslint-disable-next-line import/prefer-default-export
export type { FormState, FormProps };
