import React from "react";

type ApplicationReviewProps = {
  params: Promise<{ applicationId: string }>;
};
export default async function ApplicationReview({
  params,
}: ApplicationReviewProps) {
  const { applicationId } = await params;
  console.log(applicationId);
  return <div>EditJobPage</div>;
}
