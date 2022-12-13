import { createClient } from "next-sanity";

import {
  homeQuery,
  projectBySlugQuery,
  projectsSlug,
} from "@/lib/sanity.queries";
import { dataset, projectId, useCdn, apiVersion } from "@/lib/sanity.api";
import { HomePayload, ProjectPayload } from "@/types";

export const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn })
    : null;
};

export async function getHome({
  token,
}: {
  token?: string;
}): Promise<HomePayload | undefined> {
  return await sanityClient(token)
    ?.fetch(homeQuery, {})
    .catch((err) => {
      console.log(err);
    });
}

export async function getPageBySlug({
  token,
}: {
  token?: string;
}): Promise<{ slug: string }[] | undefined> {
  return await sanityClient(token)
    ?.fetch(projectsSlug, {})
    .catch((err) => {
      console.log(err);
    });
}

export async function getProjectBySlug({
  slug,
  token,
}: {
  slug: string;
  token?: string;
}): Promise<ProjectPayload | undefined> {
  return await sanityClient(token)
    ?.fetch(projectBySlugQuery, { slug })
    .catch((err) => {
      console.log(err);
    });
}
