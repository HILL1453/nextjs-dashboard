import { getPage } from "../lib/data";
import { PageTemplates } from "../page-templates/page-templates";

export default async function Page({ params, searchParams }: {
  params: { slug: string[] }; searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const slug = `/${params.slug.join("/")}`;
  const page = await getPage(slug);

  let Component = PageTemplates.find(item => item.key === "Dashboard")!.component;

  console.log(slug);
  if (PageTemplates.some(item => item.key === page.ComponentKey)) {
    Component = PageTemplates.find(item => item.key === page.ComponentKey)!.component;
  }

  return <Component params={params} searchParams={searchParams} data={page.Data} />;
}