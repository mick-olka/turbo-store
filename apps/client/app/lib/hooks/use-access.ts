import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { E_AppRoutes } from "../models/app";
import { useSession } from "./use-session";

export const useAuthGuard = () => {
  const router = useRouter();
  // const profile = true;
  useEffect(() => {
    const accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      router.push(E_AppRoutes.login);
    }
  }, []);
};

// export async function signIn(email: string, password: string): Promise<TokensRes> {
//   const res = await fetch(url + "/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email: email, password: password }),
//   });
//   if (!res.ok) {
//     throw new Error("Login error");
//   }
//   const data: TokensRes = await res.json();
//   // console.log(data);
//   return data;
// }
