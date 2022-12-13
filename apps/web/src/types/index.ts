import type { Block, Image } from "sanity";

export interface ProjectPayload {
  id: string;
  awards?: string[];
  caption: string;
  client: string;
  coverImage?: Image;
  description?: Block[];
  seo: {
    title: string;
    overview: Block[];
  };
  slug: string;
}
