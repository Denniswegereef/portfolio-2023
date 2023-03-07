import type { PortableTextBlock, Image } from "sanity";

interface Seo {
  title: string;
  overview: string;
}

interface List {
  title: string;
  answer: string;
}

interface ListWithTitle {
  title?: string;
  content: List[];
}

export interface ProjectPayload {
  _id: string;
  seo: Seo;
  coverImage: Image;
  title: string;
  url: string;
  slug: string;
  caption: string;
  description: string;
  headerMetaList: ListWithTitle;
}

type HomeProjectType = Pick<
  ProjectPayload,
  "title" | "slug" | "caption" | "_id"
>[];

export interface HomePayload {
  _id: string;
  seo: Seo;
  description: string;
  expertises?: string[];
  projects: {
    highlighted: HomeProjectType[];
    archived: HomeProjectType[];
  };
}
