export interface postProps {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  user: userProps;
}

export interface userProps {
  id: number;
  username: string;
  email: string;
}

export interface signinFormProps {
  email: string;
  password: string;
}

export interface signupFormProps extends signinFormProps {
  username: string;
  confirm_password: string;
}

export interface userProdileUpdateFormProps extends signupFormProps {}

export interface postFormProps {
  title: string;
  content: string;
}

export interface errorMessageProps {
  location: string;
  msg: string;
  path: string;
  type: string;
  value: string;
}
