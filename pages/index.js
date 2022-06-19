import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  console.log(posts)
  return (
    <div>
    <Head>
    <title>Menstylefort | Home</title>
    <meta name="keywords" content="menstylefort"/>
    </Head>
    {posts.map(post => {
            const [id] = posts    
          return (
            
            <div  key={post.id} >
            <h3>{post.title.rendered}</h3>
            <h2 className={styles.single}>{post.date}</h2>
            <p className={styles.postid}>{post.id}</p>
            <p className={styles.para}>{post.guid.link}</p>
            <p>{post.slug}</p>
            <p>{post.content.rendered}</p>
            <p>{post.link}</p>
            <p>{post.guid.rendered}</p>
            
          </div>
           )
           } ) }
         
    
    

      

  </div>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://menstylefort.com/wp-json/wp/v2/posts');
  const posts = await res.json()
  return {
    props : {
      posts
    }
  }
  };