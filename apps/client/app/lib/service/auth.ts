const url = process.env.API_URL;

type TokensRes = {
  access_token: string;
  refresh_token: string;
};

export async function signIn(email: string, password: string): Promise<TokensRes> {
  // const url = process.env.API_URL;
  const res = await fetch("http://localhost:7500/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  if (!res.ok) {
    throw new Error("Login error");
  }
  const data: TokensRes = await res.json();
  // console.log(data);
  return data;
}
