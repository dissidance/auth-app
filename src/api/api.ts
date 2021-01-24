type UserData ={
  email: string,
  password: string
};

const postData = (url: string, data: UserData) => fetch(url, {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json()
    .then((result) => {
      if (res.status !== 200) throw new Error(result.message);
      return result;
    }));

const signIn = (userData: UserData) => {
  const data = {
    email: userData.email,
    password: userData.password,
  };
  return postData('http://localhost:8080/signin', data);
};

const signUp = (userData: UserData) => {
  const data = {
    email: userData.email,
    password: userData.password,
  };
  return postData('http://localhost:8080/signup', data);
};

export { signIn, signUp };
