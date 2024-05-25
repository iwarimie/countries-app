"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NavButton = () => {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push("/")}>
      Back to homepage...
    </button>
  );
};

export default NavButton;
