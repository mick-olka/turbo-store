"use client";

import { Button } from "@/app/components/button";
import { useAuthGuard, useGetProfile } from "@/shared/hooks";
import { E_AppRoutes } from "@/shared/models";
import Link from "next/link";

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
                  <Button variant="bordered" size="lg">
                    My Orders
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <div className="flex-1 lg:max-w-2xl">
              <h2 className="text-lg font-bold tracking-tight">You can delete all data about you here</h2>
              <p className="text-md font-normal tracking-tight">This action is irreversible</p>
              <div className="text-sm text-muted-foreground">
                <Button variant="danger" size="sm">
                  Delete my account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return <div>Loading...</div>;
}
