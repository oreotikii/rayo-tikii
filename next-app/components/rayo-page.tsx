import { notFound } from "next/navigation";
import { PageContent } from "@/components/page-content";
import { pages, type PageKey } from "@/lib/content";

export function RayoPage({ pageKey }: { pageKey: PageKey }) {
  const record = pages[pageKey];
  if (!record) notFound();
  return <PageContent record={record} />;
}
