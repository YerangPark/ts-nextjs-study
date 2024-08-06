import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head'

type SSRProps = {
  message: string
}

export const getServerSideProps = (async () => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}에 SSG로 페이지가 실행됐습니다.`
  const ssrProp: SSRProps = { message: message }
  console.log(message);

  return { props: { ssrProp } }
}) satisfies GetServerSideProps<{ ssrProp: SSRProps }>

export default function SSRPage({
  ssrProp,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Static Site Generate : getStaticProps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
        <p>{ssrProp.message}</p>
      </main>
    </div>
  )
}
