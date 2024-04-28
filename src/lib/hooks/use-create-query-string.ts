"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

export const useCreateQueryString = () => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return {
    createQueryString,
  };
};
