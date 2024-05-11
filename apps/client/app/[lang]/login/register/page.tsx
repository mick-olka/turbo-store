"use client";

import { ArrowRight } from "@/app/[lang]/assets/icons/arrow-right";
import { Button } from "@/app/[lang]/components/button";
import { TextField } from "@/app/[lang]/components/inputs/text-field";
import { useRegister } from "@/shared/hooks";
import { E_AppRoutes, PageProps, T_RegisterForm } from "@/shared/models";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { emailRule, localeUrl, requiredRule } from "@/shared/utils";

export default function RegisterPage({ params }: PageProps<{}>) {
  const { signUp } = useRegister();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<T_RegisterForm>();
  const onSubmit = (data: T_RegisterForm) => {
    signUp(data);
  };
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Shop.</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form onSubmit={handleSubmit(onSubmit)} className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
            <TextField
              {...register("email", { ...requiredRule, ...emailRule })}
              error={errors.email?.message}
              variant={errors.email ? "error" : "bordered"}
              placeholder="Email"
              className="w-full"
              type="email"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block mt-4">First name</label>
            <TextField
              {...register("first_name", { ...requiredRule })}
              error={errors.first_name?.message}
              variant={errors.first_name ? "error" : "bordered"}
              placeholder="First name"
              className="w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block mt-4">Last name</label>
            <TextField
              {...register("last_name", { ...requiredRule })}
              error={errors.last_name?.message}
              variant={errors.last_name ? "error" : "bordered"}
              placeholder="Last name"
              className="w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block mt-4">Password</label>
            <TextField
              {...register("password", { ...requiredRule })}
              error={errors.password?.message}
              variant={errors.password ? "error" : "bordered"}
              placeholder="Password"
              type="password"
              className="w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block mt-4">Repeat Password</label>
            <TextField
              {...register("password_repeat", {
                ...requiredRule,
                validate: value => value === getValues("password") || "Passwords do not match",
              })}
              error={errors.password_repeat?.message}
              variant={errors.password_repeat ? "error" : "bordered"}
              placeholder="Repeat Password"
              type="password"
              className="w-full"
            />
            <br />
            <br />
            <RegisterButton />
            <Link href={localeUrl(E_AppRoutes.login, params.lang)}>
              <Button className="mt-4 w-full" variant="bordered">
                Back to login
              </Button>
            </Link>
          </form>
          <div className="py-5">
            {/* <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="inline-block ml-1">Forgot Password</span>
                </button>
              </div>
              <div className="text-center sm:text-right  whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-bottom	"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span className="inline-block ml-1">Help</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap">
              <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block align-text-top"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="inline-block ml-1">Back to main page</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterButton() {
  // const { pending, data } = useFormStatus();

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data]);

  const handleClick = (event: any) => {
    // if (pending) {
    event.preventDefault();
    // }
  };

  return (
    <Button className="w-full" type="submit">
      <span className="inline-block mr-2">Register</span>
      <ArrowRight variant="white" />
    </Button>
  );
}
