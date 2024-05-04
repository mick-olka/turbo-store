"use client";

import { Button } from "@/app/[lang]/components/button";
import { TextField } from "@/app/[lang]/components/inputs/text-field";
import { T_UserForm } from "@/shared/models";
import { useForm } from "react-hook-form";

import { emailRule, requiredRule } from "@/shared/utils";

type Props = {
  defaultValues: T_UserForm;
  onSubmit: (data: T_UserForm) => void;
};

export const UserForm = ({ onSubmit, defaultValues }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<T_UserForm>({ defaultValues: defaultValues });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <TextField
        {...register("email", { ...requiredRule, ...emailRule })}
        error={errors.email?.message}
        variant={errors.email ? "error" : "bordered"}
        placeholder="Email"
        className="w-96 mt-4"
      />
      <TextField
        {...register("first_name", { ...requiredRule })}
        error={errors.first_name?.message}
        variant={errors.first_name ? "error" : "bordered"}
        placeholder="First name"
        className="w-96 mt-4"
      />
      <TextField
        {...register("last_name", { ...requiredRule })}
        error={errors.last_name?.message}
        variant={errors.last_name ? "error" : "bordered"}
        placeholder="Last name"
        className="w-96 mt-4"
      />
      <Button disabled={!isDirty} className="w-36 mt-4" type="submit">
        Save
      </Button>
    </form>
  );
};
