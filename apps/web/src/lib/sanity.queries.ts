import { groq } from "next-sanity";

export const homeQuery = groq`
  *[_type == "home"][0] {
    title,
    descriptionFirst,
    descriptionSecond,
    seo {
      overview,
      title,
    },  
    showcaseProjects[] -> {
      id,
      title,
      caption,
      "slug": slug.current,
    }
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
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
