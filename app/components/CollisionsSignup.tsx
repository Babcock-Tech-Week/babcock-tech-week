"use client";

import { useState } from "react";
import EmailSignupForm from "./EmailSignupForm";

// "Sign up for updates" turns into the email field in place when clicked.
export default function CollisionsSignup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 md:mt-14">
      <p className="text-lg md:text-2xl font-semibold">
        Speaker lineup announced in January.{" "}
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="underline underline-offset-4 hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white cursor-pointer"
          >
            Sign up for updates.
          </button>
        )}
      </p>
      {open && (
        <div className="mt-6">
          <EmailSignupForm autoFocus align="left" />
        </div>
      )}
    </div>
  );
}
