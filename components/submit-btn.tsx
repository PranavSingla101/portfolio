import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-12 px-7 bg-indigo-500 text-white rounded-xl text-sm font-semibold hover:bg-indigo-400 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
      ) : (
        <>
          Send Message
          <FaPaperPlane className="text-xs transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </>
      )}
    </button>
  );
}
