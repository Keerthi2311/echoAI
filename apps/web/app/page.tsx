"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

export default function Page() { 
  const users = useQuery(api.user.getMany);
  
  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>apps/dev</p>
          <UserButton />
          <div className="max-w-sm w-full mx-auto">
            {JSON.stringify(users, null, 2)}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Please sign in to view this content.</p>
        <SignInButton>SIGN IN</SignInButton>
      </Unauthenticated>
    </>
  )
}
