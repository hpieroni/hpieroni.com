import Head from "next/head";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a Fullstack Software Engineer. You can contact me on:</p>
        <ul className={`${utilStyles.list} ${utilStyles.flexCentered}`}>
          <li className={utilStyles.margin20px}>
            <a href="https://www.linkedin.com/in/hpieroni">
              <FaLinkedin color="black" size={36} />
            </a>
          </li>
          <li className={utilStyles.margin20px}>
            <a href="https://github.com/hpieroni">
              <FaGithub color="black" size={36} />
            </a>
          </li>
          <li className={utilStyles.margin20px}>
            <a href="https://twitter.com/hgpieroni">
              <FaTwitter color="black" size={36} />
            </a>
          </li>
          <li className={utilStyles.margin20px}>
            <a href="https://www.instagram.com/hernan.pieroni/">
              <FaInstagram color="black" size={36} />
            </a>
          </li>
          <li className={utilStyles.margin20px}>
            <a href="mailto:hernan.pieroni@gmail.com">
              <FaEnvelope color="black" size={36} />
            </a>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ slug, date, title }) => (
            <li className={utilStyles.listItem} key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
