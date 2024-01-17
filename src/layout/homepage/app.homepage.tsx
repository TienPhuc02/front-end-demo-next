"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
const HomePageLayout = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div>Phuc</div>
      ) : (
        <Link href={"/api/auth/signin"}>Dang Nhap</Link>
      )}
    </div>
  );
};

export default HomePageLayout;
