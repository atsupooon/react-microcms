import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import { client } from '../libs/client';
import styles from '../styles/Home.module.css'

// SSG
export const getStaticProps = async() => {
  const data = await client.get({endpoint:"blog"});
  return {
    props: {
      blog: data.contents,
    }
  }
};

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <a href="">{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  )
}
