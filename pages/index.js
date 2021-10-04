import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
 
export default function Home() {
  return (
  <>
    <div>
      <Head>
        <title>Mirum india | Home </title>
        <meta name="keyword" content="mirum india"></meta>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/mirum/">
        <a className={styles.btn}>
          See Mirum Listing
        </a>
      </Link>
      
    </div>
    </>
  )
}
