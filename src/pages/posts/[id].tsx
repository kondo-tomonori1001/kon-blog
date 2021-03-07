import { useEffect } from "react";
import { MainLayout } from "src/layouts/main";
import { getAllPostIds, getPostData } from "src/lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import cheerio from "cheerio";
import styles from "src/pages/posts/style.module.css";
import clsx from "clsx";
import hljs from "highlightjs";
import "highlightjs/styles/night-owl.css";
import { observeFunc } from "src/lib/util";

type Props = {
  postData: {
    id: string;
    title: string;
    body: string;
  };
  toc: string;
};

export default function Post({ postData, highLighted, toc }) {
  useEffect(() => {
    // headingAddClass('h2');
    // headingCheck();
    // fixedSide();
  });
  return (
    <MainLayout page={postData.title}>
      <div className=" mx-auto">
        <main className="p-8">
          <div id="articleTitle">
            <h1 className="text-center font-bold text-3xl">{postData.title}</h1>
          </div>
          <div className="flex md:block">
            <article className="w-3/4 pr-8 py-8 overflow-hidden">
              <div className="bg-white dark:bg-gray-700 p-8 rounded">
                <h1>{postData.title}</h1>
                <h2 className="test">テスト</h2>
                <div
                  className={styles.contents}
                  dangerouslySetInnerHTML={{ __html: highLighted }}
                />
              </div>
            </article>
            <aside
              id="sideMenu"
              className="sticky top-0 block w-1/4 h-full max-h-screen overflow-y-auto py-8 rounded overflow-hidden"
            >
              <div>
                <img
                  src={postData.thumbnail.url}
                  className="block align-bottom mb-4 rounded"
                  alt=""
                />
                <div
                  className="toc bg-white dark:bg-gray-700 p-8 rounded"
                  dangerouslySetInnerHTML={{ __html: toc }}
                />
              </div>
            </aside>
          </div>
        </main>
      </div>
    </MainLayout>
  );
}

const headingAddClass = (heading: string) => {
  const body = document.getElementsByClassName("article_body")[0];
  const tags = body.querySelectorAll(heading);
  tags.forEach((el) => {
    el.classList.add(`${heading}_title`);
  });
};

const headingCheck = () => {
  const inFn = () => {
    console.log("in");
  };
  const outFn = () => {
    console.log("out");
  };
  observeFunc(".h2_title", true, "0px", inFn, outFn);
};

/*---------------------------------
 目次生成
 ---------------------------------*/
const genToc = (body: string) => {
  const $ = cheerio.load(body, { decodeEntities: false });
  let genHtml = "";
  genHtml = genHtml + '<ul class="toc_list">';
  $("h2,h3").each((index, el) => {
    const text = $(el).html();
    const tag = $(el)[0].name;
    const refId = $(el)[0].attribs.id;
    genHtml =
      genHtml +
      `<li class="toc_${tag}" key=${index}>` +
      `  <a href="#${refId}">${text}</a>` +
      "</li>";
  });
  genHtml = genHtml + "</ul>";
  return genHtml;
};

/*---------------------------------
 シンタックスハイライト用クラス付与
 ---------------------------------*/
const highLight = (body: string) => {
  const $ = cheerio.load(body);
  $("pre code").each((_, el) => {
    const res = hljs.highlightAuto($(el).text());
    $(el).html(res.value);
    $(el).addClass("hljs");
  });
  return $.html();
};

/*---------------------------------
 ルーティング
 ---------------------------------*/
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

/*---------------------------------
 記事データ取得
 ---------------------------------*/
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params.id を使用して、ブログの投稿に必要なデータを取得する
  const postData = await getPostData(params.id as string);
  const highLighted = highLight(postData.body);
  const toc: string = genToc(postData.body);
  return {
    props: {
      postData,
      highLighted,
      toc,
    },
  };
};
