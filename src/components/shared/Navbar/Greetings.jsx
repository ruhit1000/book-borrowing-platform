"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";

const Greetings = () => {
  const { data: session } = authClient.useSession();

  if (session) {
    return <h2 className="mr-4 font-medium">Welcome, {session.user.name.split(" ")[0]}!</h2>;
  } else {
    return null;
  }
};

export default Greetings;