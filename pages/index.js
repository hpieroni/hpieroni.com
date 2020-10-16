import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import Icon from "../components/icon";
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
              <Icon width={32} name="linkedin" />
            </a>
          </li>
          <li className={utilStyles.margin20px}>
            <a href="https://github.com/hpieroni">
              <Icon width={32} name="github" />
            </a>
          </li>
          <li className={utilStyles.margin20px}>
            <a href="https://twitter.com/hgpieroni">
              <Icon width={32} name="twitter" />
            </a>
          </li>
          <li className={utilStyles.margin20px}>
            <a href="https://www.instagram.com/hernan.pieroni/">
              <Icon width={32} name="instagram" />
            </a>
          </li>
          <li className={utilStyles.margin20px}>
            <a href="mailto:hernan.pieroni@gmail.com">
              <Icon width={32} name="gmail" />
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
