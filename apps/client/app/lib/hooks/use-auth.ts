import { useRouter } from "next/navigation";

import { E_AppRoutes } from "../models/app";
import { useSession } from "./use-session";

const api_url = process.env.NEXT_PUBLIC_API_URL;

type TokensRes = {
  access_token: string;
  refresh_token: string;
};

export const useSignIn = () => {
  const { setAccessToken } = useSession();
  const router = useRouter();
  const signIn = async (body: { email: string; password: string }) => {
    const res = await fetch(api_url + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      alert("Invalid credentials");
    } else {
      const data: TokensRes = await res.json();
      if (data) {
        setAccessToken(data.access_token);
        router.push(E_AppRoutes.profile);
      }
    }
  };
  return { signIn };
};

export const useLogout = () => {
  const router = useRouter();
  const { setAccessToken } = useSession();
  const logout = () => {
    setAccessToken(null);
    router.push(E_AppRoutes.login);
  };
  return { logout };
};
