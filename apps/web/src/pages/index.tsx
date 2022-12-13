import { Box } from "@/components/box";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getHome } from "@/lib/sanity.client";
import { HomePayload } from "@/types";

interface HomeProps {
  data: HomePayload;
}

export default function Home({ data }: HomeProps) {
  console.log(data);

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
        <h1>Portfolio 2023</h1>
        <Link href="/project/coronadashboard">coronadashboard</Link>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps<{
  data: HomePayload;
}> = async () => {
  const data = await getHome({});

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 60, // In seconds
  };
};
