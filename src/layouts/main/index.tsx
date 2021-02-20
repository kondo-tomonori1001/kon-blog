import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header';

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
      </Head>
      <Header />
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </>
  )
}