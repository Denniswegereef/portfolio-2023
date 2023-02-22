import { Box } from "@/components/base";
import Head from "next/head";
import { GetStaticProps } from "next";
import { getHome } from "@/lib/sanity.client";
import { HomePayload } from "@/types";
import Link from "next/link";

interface HomeProps {
  content: HomePayload;
}

export default function Home({ content }: HomeProps) {
  return (
    <Box>
      <Head>
        <title>Portfolio 2023</title>
        <meta name="description" content="Portfolio 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Portfolio</h1>
      <p>{content.description}</p>
      <ul>
        {content.expertises?.map((expertise, index) => (
          <li key={`${expertise}-${index}`}>{expertise}</li>
        ))}
      </ul>

      <section>
        <h2>Highglighted</h2>
        <ul>
          {content.projects.highlighted?.map((project, index) => (
            <Link
              href={`project/${project.slug}`}
              key={`${project.slug}-${index}`}
            >
              {project.title}
            </Link>
          ))}
        </ul>
      </section>

      <section>
        <h2>Archived</h2>
        <ul>
          {content.projects.archived?.map((project, index) => (
            <Link
              href={`project/${project.slug}`}
              key={`${project.slug}-${index}`}
            >
              {project.title}
            </Link>
          ))}
        </ul>
      </section>
    </Box>
  );
}

export const getStaticProps: GetStaticProps<{
  content: HomePayload;
}> = async () => {
  const data = await getHome({});

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content: data,
    },
    revalidate: 60, // In seconds
  };
};
