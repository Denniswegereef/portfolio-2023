import { getPageBySlug, getProjectBySlug } from "@/lib/sanity.client";
import { GetStaticProps } from "next";
import { ProjectPayload } from "@/types";
import { urlForImage } from "@/lib/sanity.image";
import { ImageBox } from "@/components/ImageBox";

interface ProjectDetailProps {
  data: ProjectPayload;
}

const ProjectDetail = ({ data }: ProjectDetailProps) => {
  if (!data) return <></>;

  return (
    <ul>
      <li>
        <h1>Title: {data.title}</h1>
      </li>
      <ImageBox
        image={data.coverImage}
        alt={`Cover image from ${data.title}`}
      />
      <li>Slug: {data.slug}</li>
      <li>Description: {data.caption}</li>
      <li>Client: {data.client}</li>
    </ul>
  );
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
