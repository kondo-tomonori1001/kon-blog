import Link from "next/link";
import { MainLayout } from "src/layouts/main";
import { GetStaticProps } from "next";
import { getPostsData } from "src/lib/posts";
import { Card } from "src/components/top/Card/Card";
import { ProfCard } from "src/components/ProfCard";
import Head from 'next/head';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <meta name="keywords" content="" />
        <meta content="地方WEB制作会社フロントエンドエンジニアのブログです" name="description" />
        <meta property="og:image" content="https://kon-blog.vercel.app/images/ogp.png" />
        <meta property="og:url" content="https://kon-blog.vercel.app/" />
        <meta property="og:site_name" content="kon-blog" />
        <meta property="og:title" content="KON-BLOG" />
        <meta property="og:description" content="地方WEB制作会社フロントエンドエンジニアのブログです"></meta>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <MainLayout home>
        <div className="xl:flex items-start pt-8 py-8">
          <ul className="flex flex-wrap xl:w-3/4 p-4">
            {allPostsData.map(
              ({ id, title, thumbnail, updatedAt, tag, description }) => (
                <li key={id} className="sm:w-1/2 w-full mb-8 px-4">
                  <Link href={`/posts/${id}`}>
                    <a className="block h-full">
                      <Card
                        src={thumbnail.url}
                        title={title}
                        date={updatedAt}
                        desc={description}
                        tag={tag}
                      />
                    </a>
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="xl:w-1/4 xl:p-4">
            <ProfCard />
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getPostsData();
  return {
    props: {
      allPostsData,
      // blog:data.contents,
    },
  };
};
