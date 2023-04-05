import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <h3>NO matter how many times you refreshed the page the content will remain same in Static Rendering.By Default NextJS rendering is Static.
      </h3>

      <div className={styles.grid}>
        <a
          href="/static"
          className={styles.card}
      
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Static for Books Api <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="/StaticQuotes"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Static for Quotable <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="/Server_Dynamic"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Server_Dynamic_Rendering <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="/ClientSide"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Client_Side_Rendering <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="/Parallel"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Parallel  DataFetching <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="/Sequential"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Sequential DataFetching <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>


        
      </div>
    </main>
  )
}
