import { useState } from "react";

export default function useAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);
  function login() {
    setTimeout(() => {
      setIsAuth(true);
    }, 1000);
  }
  function signup() {
    setTimeout(() => {
      setIsAuth(false);
    }, 1000);
  }
  return [isAuth, login, signup];
}