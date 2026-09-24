import Link from "next/link";
import React from "react";

export default function Applications() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <Link href="/dashboard/jobs">Jobs</Link>
      <Link href="/dashboard/applications">applications</Link>
    </div>
  );
}
