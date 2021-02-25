import Link from 'next/link';
import { MainLayout } from 'src/layouts/main'
import { GetStaticProps } from 'next';
import { getPostsData } from "src/lib/posts";
import { Card } from "src/components/top/Card"
import { ProfCard } from "src/components/ProfCard"

export default function Home({allPostsData}) {
  console.log(allPostsData);
  return (
    <MainLayout home>
      <div className="flex items-start pt-8">
        <ul className="flex flex-wrap w-3/4 p-4">
          {allPostsData.map(({ id, title, thumbnail, updatedAt}) => (
            <li key={id} className="w-1/2 px-4">
              <Link href={`/posts/${id}`}>
                <a>
                  <Card src={thumbnail.url} title={title} date={updatedAt}/>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-1/4 p-4">
          <ProfCard />
        </div>
      </div>
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