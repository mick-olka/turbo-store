"use client";

import { useAuthGuard, useGetProfile } from "../lib/hooks";

export default function ProfilePage() {
  useAuthGuard();
  const { data } = useGetProfile();
  console.log(data);
  return <div className="w-full p-4">Profile</div>;
}
