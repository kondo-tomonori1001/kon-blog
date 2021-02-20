import Link from 'next/link';
import { MainLayout } from 'src/layouts/main'
import { GetStaticProps } from 'next';

import { getPostsData } from "src/lib/posts";

export default function Home({allPostsData}) {
  return (
    <MainLayout home>
      <p>Hello world!</p>
      <Link href="/posts/first-post">link to first-post</Link>
      <Link href="/posts/style-demo/cssModules">CSS Modules Demo</Link>
      <hr/>
      <ul>
        {allPostsData.map(({ id, title }) => (
          <li key={id}>
            {/* <Link href={`/posts/${id}`}>{title}</Link> */}
            <br />
            {title}
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getPostsData();
  return {
    props: {
      allPostsData
      // blog:data.contents,
    }
  }
}