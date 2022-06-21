import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useState,useEffect } from 'react';

export default function Home({posts})  {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
	setIsSSR(false);
}, []);
  
  return (
    
    
    
    <div>
     { !isSSR &&  posts.map((post) =>
    <div key={post.id}>
    <h1 className={styles.title} dangerouslySetInnerHTML={{__html: post.title.rendered }}></h1>
    <p>{post.date}</p> 
    <p className={styles.single} dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
    <p dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
    </div> 
  )}
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

