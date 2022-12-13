import { groq } from "next-sanity";

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    overview,
    slug,
    title,
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug] {
    _id,
    awards,
    caption,
    client,
    coverImage,
    description,
    seo {
      overview,
      title,
    },
    "slug": slug.current,
  }
`;

export const projectsSlug = groq`
  *[_type == "project"] {
    "slug": slug.current,
  }
`;
