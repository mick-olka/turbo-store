"use client";

import { Button } from "@/app/[lang]/components/button";
import { TextField } from "@/app/[lang]/components/inputs/text-field";
import { UserForm } from "@/app/[lang]/profile/user-form";
import { useAuthGuard, useGetProfile } from "@/shared/hooks";
import { E_AppRoutes } from "@/shared/models";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  useAuthGuard();
  const { data, isLoading } = useGetProfile();
  if (data) {
    const defaultValues = {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
    };
    return (
      <div className="w-full p-4">
        <div className="hidden space-y-6 p-10 pb-16 md:block bg-white">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">
              {data.first_name} {data.last_name}
            </h2>
            <p className="text-muted-foreground">{data.email}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-tight">Account</h2>
            <p className="text-sm mb-4 text-muted-foreground">
              Update your account settings. Set your preferred language and timezone.
            </p>
            <UserForm defaultValues={defaultValues} onSubmit={data => console.log(data)} />
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-bold tracking-tight">Check my orders history</h2>
            <div className="text-sm text-muted-foreground">
              <Link href={E_AppRoutes.orders}>
                <Button variant="bordered">My Orders</Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-bold tracking-tight">Log out and remove all my cache from this session</h2>
            <div className="text-sm text-muted-foreground">
              <Link href={E_AppRoutes.orders}>
                <Button variant="bordered">Logout</Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
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
    );
  }
  return <div>Loading...</div>;
}
