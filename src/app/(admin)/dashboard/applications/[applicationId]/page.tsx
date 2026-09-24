import React from "react";

type ApplicationProps = {
  params: Promise<{ applicationsID: string }>;
};
export default async function Application({ params }: ApplicationProps) {
  const { applicationsID } = await params;
  console.log(applicationsID);

  return <div>page of get details in the admin</div>;
}
