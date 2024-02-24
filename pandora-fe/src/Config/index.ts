export const AppConfig = {
  BASE_URL: "http://127.0.0.1:8000/api",
};

export const APIURLS = {
  users: {
    signup: "/users/signup",
    signin: "/users/signin",
    profile: "/users/profile",
    destroy: "/users/destroy",
    update:"/users/update"
  },
  post: {
    create: "/posts/create-post",
    update: "/posts/update-post",
    destroy: "/posts/destroy-post",
    all: "/posts/all-posts",
    single: "/posts/get-post",
  },
};
