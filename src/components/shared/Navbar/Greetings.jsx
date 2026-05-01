"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";

const Greetings = () => {
  const { data: session } = authClient.useSession();

  if (session) {
    return <h2 className="mr-4">Welcome, {session.user.name}!</h2>;
  } else {
    return null;
  }
};

export default Greetings;
