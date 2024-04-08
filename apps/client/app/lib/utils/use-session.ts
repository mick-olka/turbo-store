enum SessionItems {
  access_token = "access_token",
}

export const useSession = () => {
  const setAccessToken = (token: string) => {
    sessionStorage.setItem(SessionItems.access_token, token);
  };
  return {
    accessToken: sessionStorage.getItem(SessionItems.access_token),
    setAccessToken,
  };
};
