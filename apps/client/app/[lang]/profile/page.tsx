"use client";

import { Button } from "@/app/[lang]/components/button";
import { UserForm } from "@/app/[lang]/profile/user-form";
import { useAuthGuard, useDeleteProfile, useGetProfile, useLogout, useUpdateProfile } from "@/shared/hooks";
import { E_AppRoutes, PageProps, T_UserForm } from "@/shared/models";
import Link from "next/link";

import { localeUrl } from "@/shared/utils";

type Props = PageProps<{}>;

export default function ProfilePage({ params: { lang } }: Props) {
  useAuthGuard(lang);
  const { data, isLoading } = useGetProfile(lang);
  const { updateProfile } = useUpdateProfile();
  const { deleteProfile } = useDeleteProfile(lang);
  const { logout } = useLogout();
  const handleUpdateProfile = (data: T_UserForm) => {
    updateProfile(data);
  };
  const handleDeleteProfile = () => {
    if (confirm("Are you sure you want to delete this profile")) {
      deleteProfile();
    } else {
      //
    }
  };
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
            <UserForm defaultValues={defaultValues} onSubmit={handleUpdateProfile} />
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-bold tracking-tight">Check my orders history</h2>
            <div className="text-sm text-muted-foreground">
              <Link href={localeUrl(E_AppRoutes.orders, lang)}>
                <Button variant="bordered">My Orders</Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-bold tracking-tight">Log out and remove all my cache from this session</h2>
            <div className="text-sm text-muted-foreground">
              <Button onClick={logout} variant="bordered">
                Logout
              </Button>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-bold tracking-tight">You can delete all data about you here</h2>
            <p className="text-md font-normal tracking-tight">This action is irreversible</p>
            <div className="text-sm text-muted-foreground">
              <Button onClick={handleDeleteProfile} variant="danger" size="sm">
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
