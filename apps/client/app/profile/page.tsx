"use client";

import { useAuthGuard } from "../lib/utils/use-access";

export default function Profile() {
  useAuthGuard();
  return <div className="w-full p-4">Profile</div>;
}
