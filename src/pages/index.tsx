import Link from 'next/link';
import { MainLayout } from 'src/layouts/main'
import { GetStaticProps } from 'next';
import { getPostsData } from "src/lib/posts";
import { Card } from "src/components/top/Card"
export default function Home({allPostsData}) {
  return (
    <MainLayout home>
      <ul>
        {allPostsData.map(({ id, title,　thumbnail }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>
                <Card src={thumbnail.url} title={title}/>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

export const getStaticProps = async () => {
  const allPostsData = await getPostsData();
  return {
    props: {
      allPostsData
      // blog:data.contents,
    }
  }
}