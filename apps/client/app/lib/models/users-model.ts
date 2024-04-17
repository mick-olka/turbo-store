export enum UserRole {
  admin = "admin",
  user = "user",
}

export interface I_User {
  first_name: string;
  last_name: string;
  email: string;
  orders: string[];
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}
