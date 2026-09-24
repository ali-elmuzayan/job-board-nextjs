type JobDetailsParams = {
  params: Promise<{
    id: string;
  }>;
};
export default async function JobDetails({ params }: JobDetailsParams) {
  const { id } = await params;
  return <div>job details with id {id}</div>;
}
