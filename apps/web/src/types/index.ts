import type { PortableTextBlock, Image } from "sanity";

interface Seo {
  title: string;
  overview: PortableTextBlock[];
}

export interface ProjectPayload {
  id: string;
  caption: string;
  client: string;
  title: string;
  coverImage: Image;
  description: PortableTextBlock[];
  seo: Seo;
  slug: string;
  awards?: string[];
}

export interface HomePayload {
  id: string;
  seo: Seo;
  description: string;
  expertises?: string[];
  projects: {
    highlighted: any[];
    archived: any[];
  };
  // showcaseProjects: Pick<ProjectPayload, "title" | "slug" | "caption" | "id">[];
}
