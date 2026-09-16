import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-7 text-sm font-semibold text-white transition-transform active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-aurora-violet via-aurora-fuchsia to-aurora-cyan bg-[length:200%_100%] animate-gradient-shift" />
      <span className="absolute inset-[1.5px] rounded-full bg-ink-800 transition-opacity duration-300 group-hover:opacity-0 group-disabled:opacity-100" />
      <span className="relative flex items-center gap-2">
        {pending ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        ) : (
          <>
            Send Message
            <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </span>
    </button>
  );
}
