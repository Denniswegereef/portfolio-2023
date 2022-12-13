import {
  getPageBySlug,
  getProjectBySlug,
  sanityClient,
} from "@/lib/sanity.client";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { ProjectPayload } from "@/types";

interface ProjectDetailProps {
  data: ProjectPayload;
}

const ProjectDetail = ({ data }: ProjectDetailProps) => {
  const route = useRouter();

  return <h1>Project detail - {route.query.slug}</h1>;
};

export default ProjectDetail;

export const getStaticProps: GetStaticProps<{ data: ProjectPayload }> = async (
  context
) => {
  if (!context?.params?.slug || Array.isArray(context.params.slug)) {
    return {
      notFound: true,
    };
  }

  const data = await getProjectBySlug({ slug: context.params.slug });

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

export async function getStaticPaths() {
  const data = await getPageBySlug({});

  const mappedSlugs = data?.map((item) => ({ params: { slug: item.slug } }));

  return {
    paths: mappedSlugs,
    fallback: true,
  };
}
