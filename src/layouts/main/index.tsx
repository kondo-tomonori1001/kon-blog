import Link from 'next/link';
import Head from 'next/head';
import { Header } from '../../components/Header/Header';
import { getPostData } from 'src/lib/posts';

type Props = {
  children:React.ReactNode,
  home?:boolean,
  page?:string
}

export const MainLayout:React.FC<Props> = ({children,home,page}):JSX.Element => {
  return(
    <>
      <Head>
        <title>{!home ? (`${page} | `):""}MyBlog</title>
        <meta charSet="utf-8"></meta>
      </Head>
      <Header />
      <main className="bg-blue-100 text-sm md:text-base dark:bg-gray-800 dark:text-white min-h-screen">
        <div className="max-w-screen-xl mx-auto">{children}</div>
        {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      </main>
    </>
  )
}