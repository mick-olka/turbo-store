"use client";

import Link from "next/link";

import { DefaultButton } from "../components/buttons/default-button";
import { useAuthGuard, useGetProfile } from "../lib/hooks";
import { E_AppRoutes } from "../lib/models/app";

export default function ProfilePage() {
  useAuthGuard();
  const { data, isLoading } = useGetProfile();
  if (data)
    return (
      <div className="w-full p-4">
        <div className="hidden space-y-6 p-10 pb-16 md:block bg-white">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">
              {data.first_name} {data.last_name}
            </h2>
            <p className="text-muted-foreground">{data.email}</p>
          </div>
          <div className="shrink-0 bg-border h-[1px] w-full"></div>
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <div className="flex-1 lg:max-w-2xl">
              <h2 className="text-lg font-bold tracking-tight">Account</h2>
              <p className="text-sm text-muted-foreground">
                Update your account settings. Set your preferred language and timezone.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <div className="flex-1 lg:max-w-2xl">
              {/* <h2 className="text-lg font-bold tracking-tight">My Orders</h2> */}
              <div className="text-sm text-muted-foreground">
                <Link href={E_AppRoutes.orders}>
                  <DefaultButton>My Orders</DefaultButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return <div>Loading...</div>;
}
