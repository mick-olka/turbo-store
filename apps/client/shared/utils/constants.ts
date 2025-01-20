export const localConfig = {
  userCanOrderWithoutAuth: process.env.NEXT_PUBLIC_USER_CAN_ORDER_WITHOUT_AUTH === "true" || true,
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "localhost:7500",
  localUrl: process.env.NEXT_PUBLIC_LOCAL_URL || "localhost:3000",
};
