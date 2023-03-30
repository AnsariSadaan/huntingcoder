import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as fs from 'fs';
import styles from "../../styles/BlogPost.module.css";

const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog);
  

  return <div className={styles.container}>
    <main className={styles.main}>

      <h1>{blog && blog.title}</h1>
      <hr />
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} ></div>}
      {/* <div>{blog && blog.content}</div> */}
    </main>
  </div>
};


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-javascript' } }, 
      { params: { slug: 'how-to-learn-nextjs' } },
      { params: { slug: 'how-to-learn-flask' } },
    ],
    fallback: false, // can also be true or 'blocking'
  }
}



  // export async function getServerSideProps(context) {
  export async function getStaticProps(context) {
    // console.log(context)
  const { slug } = context.params;
  
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')  

    return {
      props: {myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
    }
  }
  
export default Slug;
