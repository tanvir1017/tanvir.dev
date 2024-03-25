import { getPostBySlug } from "@/lib/utils/mdx/mdxUtils";
import { BlogsSlugMetaData, SlugParamsProps as ParamsProps } from "@/ts/type";

const getPageContent = async (slug: string) => {
  const data: BlogsSlugMetaData = await getPostBySlug(slug);
  return { meta: data.meta, content: data.content };
};

export async function generateMetadata({ params }: ParamsProps) {
  const { meta } = (await getPageContent(params.slug)) as BlogsSlugMetaData;
  // @ts-ignore
  return { title: meta.title };
}

const Page = async ({ params }: ParamsProps) => {
  const { content } = await getPageContent(params.slug);

  return (
    <section className="py-24">
      <div className="container py-4 prose">{content}</div>
    </section>
  );
};

export default Page;
