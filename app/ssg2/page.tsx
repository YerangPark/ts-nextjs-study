import Head from 'next/head'

type SSG2Props = {
  message: string
}

async function getMessage(): Promise<SSG2Props> {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}에 SSG로 페이지가 실행됐습니다.`
  console.log(message);

  return { message }
}

const SSG2 = async () => {
  // const { message } = props
  const { message }: SSG2Props = await getMessage()

  return (
    <div>
      <Head>
        <title>Static Site Generate : getStaticProps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  )
}

export default SSG2;
