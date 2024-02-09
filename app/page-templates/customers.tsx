type DataType = {
  Title: string;
  Slug: string;
};

export default function Customers({
  params,
  searchParams,
  data,
}: {
  params: { slug: string[] };
  searchParams?: {
    query?: string;
    page?: string;
  };
  data:any;
}) {
  return <div>
    <h1>{data.Title}</h1>
    <div>{data.Content}</div>
  </div>;
}