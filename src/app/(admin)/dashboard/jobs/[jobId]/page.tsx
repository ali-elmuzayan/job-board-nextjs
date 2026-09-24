import React from "react";

type JobDetailsProps = {
  params: Promise<{ jobId: string }>;
};
export default async function JobDetails({ params }: JobDetailsProps) {
  const { jobId } = await params;
  console.log(jobId);

  return <div>page of get details in the admin</div>;
}
