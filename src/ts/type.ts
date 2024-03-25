import { JSXElementConstructor, ReactElement } from "react";

/************************** Blogs Dynamic Page blogs/[slug]/page.tsx **************************************/
export type SlugParamsProps = { params: { slug: string } };

export type BlogsSlugMetaData = {
  meta: { slug: string; title?: string } | BlogContentProps;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
/************************** ************************************ *************************************/

/************************** Blogs Directory blogs/page.tsx **************************************/
export type BlogContentProps = {
  title: string;
  description: string;
  publishedAt: string;
  status: string;
  tags: string | number[];
  bannerUrl: string;
  blurHash: string;
  series: { order: number; title: string };
  slug: string;
};
/************************** ************************************ *************************************/
