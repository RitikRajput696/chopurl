import { db } from "@/db";
import { urls } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

interface SlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RedirectPage(props: SlugPageProps) {
  const params = await props.params;
  const slug = params.slug;

  console.log(slug);

  const result = await db.select().from(urls).where(eq(urls.slug, slug));

  if (result.length === 0) {
    return <div className="p-8 text-center">URL not found</div>;
  }

  console.log(result);
  const originalUrl = result[0].originalUrl;
  console.log(originalUrl);
  redirect(originalUrl);
}
