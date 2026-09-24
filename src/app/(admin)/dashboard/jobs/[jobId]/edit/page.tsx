import React from "react";

type EditJobProps = {
  params: Promise<{ jobId: string }>;
};
export default async function EditJob({ params }: EditJobProps) {
  const { jobId } = await params;
  console.log(jobId);
  return <div>EditJobPage</div>;
}
