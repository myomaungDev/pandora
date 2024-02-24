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
