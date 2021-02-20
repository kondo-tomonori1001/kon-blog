import { MainLayout } from 'src/layouts/main'
import { getAllPostIds,getPostData } from 'src/lib/posts';
import { GetStaticProps, GetStaticPaths } from 'next'

type Props = {
  postData: {
    id:string;
    title: string;
    body: string;
  }
}

export default function Post({ postData }:Props) {
  return (
      <MainLayout page={postData.id}>
        {postData.title}
        <br />
        {postData.id}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.body }} />
      </MainLayout>
    )
}

export const getStaticPaths:GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps:GetStaticProps = async ({ params }) => {
  // params.id を使用して、ブログの投稿に必要なデータを取得する
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}