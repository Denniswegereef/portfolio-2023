import type { Block, Image } from "sanity";

interface Seo {
  title: string;
  overview: Block[];
}

export interface ProjectPayload {
  id: string;
  caption: string;
  client: string;
  title: string;
  coverImage: Image;
  description: Block[];
  seo: Seo;
  slug: string;
  awards?: string[];
}

export interface HomePayload {
  id: string;
  title: string;
  descriptionFirst: string;
  descriptionSecond: string;
  seo: Seo;
  showcaseProjects: Pick<ProjectPayload, "title" | "slug" | "caption">;
}
