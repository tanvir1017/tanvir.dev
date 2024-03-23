import Head from "next/head";

function Meta({ metaTag }) {
  const { title, name, content, keywords } = metaTag;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name={name} content={content} keywords={keywords} />
      <meta name="author" content="tanvir1017" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;
