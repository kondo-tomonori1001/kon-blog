import { MainLayout } from "src/layouts/main";
import { getAllPostIds, getPostData } from "src/lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import cheerio from "cheerio";

type Props = {
  postData: {
    id: string;
    title: string;
    body: string;
  },
  toc:string,
};

export default function Post({ postData,toc }) {
  return (
    <MainLayout page={postData.title}>
      <div className="flex">
        <section className="w-3/4 p-8">
          <div className="bg-white dark:bg-gray-700 p-8">
            <h1>{postData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postData.body }} />
          </div>
        </section>
        <aside className="w-1/4 p-8">
          <div>
            <div className="bg-white dark:bg-gray-700 p-8" dangerouslySetInnerHTML={{ __html: toc }} />
          </div>
        </aside>
      </div>
    </MainLayout>
  );
}

const genToc = (body:string) => {
  const $ = cheerio.load(body,{ decodeEntities:false});
  let genHtml = '';
  genHtml = genHtml + '<ul>';
  $('h2,h3').each((index,el) => {
    const text = $(el).html();
    const tag = $(el)[0].name;
    const refId = $(el)[0].attribs.id;
    genHtml = genHtml +
    `<li class="toc_${tag}" key=${index}>`+
    `  <a href="#${refId}">${text}</a>`+
    '</li>' 
  })
  genHtml = genHtml + '</ul>';
  return genHtml;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params.id を使用して、ブログの投稿に必要なデータを取得する
  const postData = await getPostData(params.id as string);
  const toc:string = genToc(postData.body);
  return {
    props: {
      postData,
      toc
    },
  };
};
