import { MainLayout } from "src/layouts/main";
import { getAllPostIds, getPostData } from "src/lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import cheerio from "cheerio";
import styles from 'src/pages/posts/style.module.css';

type Props = {
  postData: {
    id: string;
    title: string;
    body: string;
  };
  toc: string;
};

export default function Post({ postData, toc }) {
  return (
    <MainLayout page={postData.title}>
      <div className="max-w-screen-xl mx-auto">
        <main className="p-8">
          <div>
            <h1 className="text-center font-bold text-3xl">{postData.title}</h1>
          </div>
          <div className="flex">
            <article className="w-3/4 p-8">
              <div className="bg-white dark:bg-gray-700 p-8">
                <h1>{postData.title}</h1>
                <div className={styles.contents} dangerouslySetInnerHTML={{ __html: postData.body }} />
              </div>
            </article>
            <aside className="w-1/4 p-8">
              <div>
                <div
                  className="toc bg-white dark:bg-gray-700 p-8"
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

/*---------------------------------
 intersectionObserver
 ---------------------------------*/
 function observeFunc(targetEl:string, rootMargin:string, inFn, outFn) {
  const callback = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // target要素が画面内に表示されたら実行
        inFn();
      } else {
        // target要素が画面外になると実行
        outFn();
      }
    })
  }
  // intersection observerの設定 
  const options = {
    root: null,
    rootMargin: rootMargin,
    threshold: 0,
  }
  // intersection observerのインスタンスを生成
  const observer = new IntersectionObserver(callback, options);
  // 要素の監視
  const target = document.querySelector(targetEl);
  //  propsに格納された要素がページ内に無かった場合、observerを実行しない
  if (target === null) {
    return;
  } else {
    observer.observe(target);
  }
}

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
  const toc: string = genToc(postData.body);
  return {
    props: {
      postData,
      toc,
    },
  };
};
