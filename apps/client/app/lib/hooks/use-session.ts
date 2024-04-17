enum SessionItems {
  access_token = "access_token",
}

export const useSession = () => {
  const setAccessToken = (token: string | null) => {
    if (token) sessionStorage.setItem(SessionItems.access_token, token);
    else sessionStorage.removeItem(SessionItems.access_token);
  };
  const getAccessToken = () => {
    return sessionStorage.getItem(SessionItems.access_token);
  };

  return {
    setAccessToken,
    getAccessToken,
  };
};
