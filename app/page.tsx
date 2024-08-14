"use client";

import { Button } from "@/components/ui/button";
import { api } from "../convex/_generated/api";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useSession,
} from "@clerk/nextjs";
import { useMutation } from "convex/react";

export default function Home() {
  // console.log(api);
  const createFile = useMutation(api.files.createFile);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignInButton mode="modal">
          <Button>Sign in</Button>
        </SignInButton>
      </SignedIn>
      <SignedOut>
        <SignOutButton>
          <Button>Sign out</Button>
        </SignOutButton>
      </SignedOut>

      <Button
        onClick={() => {
          createFile("hello");
        }}
      >
        Click me
      </Button>
    </main>
  );
}
