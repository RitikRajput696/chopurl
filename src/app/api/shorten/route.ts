import { NextRequest, NextResponse } from "next/server";
import { urls } from "@/db/schema";
import { db } from "@/db";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { originalUrl } = body;
  console.log(originalUrl);

  if (!originalUrl || typeof originalUrl !== "string") {
    return NextResponse.json(
      { error: `invalid url, ${originalUrl}` },
      { status: 400 },
    );
  }

  const slug = nanoid(7);

  try {
    await db.insert(urls).values({
      slug,
      originalUrl,
    });

    return NextResponse.json({
      shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error saving to database" },
      { status: 500 },
    );
  }
}
