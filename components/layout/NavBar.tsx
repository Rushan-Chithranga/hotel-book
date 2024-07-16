"use client";

import React from "react";
import { useAuth, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SearchInput from "../SearchInput";
import { ModeToggle } from "../theme-toggole";
import { NavMenu } from "./NavMenu";

const NavBar = () => {
  const router = useRouter();
  const { userId } = useAuth();
  return (
    <div className="sticky top-0 border border-b-primary/10 bg-secondary p-3">
      <div className="flex justify-between items-center">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src="/logo.svg" alt="logo" width="30" height="30" />
          <div className="font-bold text-xl">Hotel Book</div>
        </div>
        <SearchInput />
        <div className="flex gap-3 items-center">
          <div>
            <ModeToggle />
          </div>
          <div>
            <NavMenu />
          </div>
          <UserButton afterSwitchSessionUrl="/" />
          {!userId && (
            <>
              <Button
                onClick={() => router.push("/sign-in")}
                variant="outline"
                size="sm"
              >
                Sign in
              </Button>
              <Button onClick={() => router.push("/sign-up")} size="sm">
                Sign up
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
