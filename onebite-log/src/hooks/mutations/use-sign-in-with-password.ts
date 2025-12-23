import { signInWithPassword } from "@/api/auth";
import type { UseMutaionCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithPassword(callbacks?: UseMutaionCallback) {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      console.log(error);

      if (callbacks?.onError) callbacks?.onError(error);
    },
  });
}
