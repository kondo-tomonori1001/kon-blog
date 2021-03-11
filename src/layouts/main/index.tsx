import Link from 'next/link';
import Head from 'next/head';
import { Header } from '../../components/Header/Header';
import { existsGaId, GA_ID } from 'src/lib/gaTag'


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
        <meta property="og:type" content="website" />
        {/* Google Analytics */}
        {existsGaId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
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