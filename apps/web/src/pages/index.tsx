import { Box } from "@/components/box";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getHome } from "@/lib/sanity.client";
import { HomePayload } from "@/types";

interface HomeProps {
  content: HomePayload;
}

export default function Home({ content }: HomeProps) {
  return (
    <Box
      css={{
        backgroundColor: "black",
      }}
    >
      <Head>
        <title>Portfolio 2023</title>
        <meta name="description" content="Portfolio 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        css={{
          color: "white",
        }}
      >
        <h1>{content.title}</h1>
        <p>{content.descriptionFirst}</p>
        <p>{content.descriptionSecond}</p>

        <Link href="/elements">Go to the elements</Link>

        <ul>
          {content.showcaseProjects.map((project) => (
            <li key={project.id}>
              <Link href={`project/${project.slug}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </Box>
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
