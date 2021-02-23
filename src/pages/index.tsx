import Link from 'next/link';
import { MainLayout } from 'src/layouts/main'
import { GetStaticProps } from 'next';
import { getPostsData } from "src/lib/posts";
import { Card } from "src/components/top/Card"

export default function Home({allPostsData}) {
  return (
    <MainLayout home>
      <ul className="flex">
        {allPostsData.map(({ id, title,　thumbnail }) => (
          <li key={id} className="w-4/12 px-4">
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

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getPostsData();
  return {
    props: {
      allPostsData
      // blog:data.contents,
    }
  }
}