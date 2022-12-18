import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Home({content}) {
  return (
    <div className={styles.container}>
      {content.title}
      <br />
      <Link href="/notes">
        <a>go notes</a>
      </Link>
    </div>
  );
}

export async function getStaticProps(){
  return {
    props: {
      content: {
        title: 'this is my beautifull website'
      }
    }
  }
}