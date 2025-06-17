"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleShorten = async () => {
    if (!url) {
      return;
    }
    setLoading(true);
    setShortUrl(null);
    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        body: JSON.stringify({ originalUrl: url }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setShortUrl(data.shortUrl);
    } catch (error) {
      console.log("error, while shortening data", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 px-4 text-white">
      <h1 className="text-bold mb-4 text-center text-4xl">
        ChopUrl - Clean and Quick url shortner
      </h1>
      <Card className="w-full max-w-xl rounded-2xl bg-slate-800/70 p-6 shadow-xl backdrop-blur">
        <CardContent className="flex flex-col gap-4">
          <Input
            type="url"
            placeholder="paste your long url here..."
            className="placeholer:text-white/40 border border-white/20 bg-white/10 text-white"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button
            onClick={handleShorten}
            disabled={loading}
            className="hover:bg-teal-400d bg-teal-500"
          >
            {loading ? "Shortening..." : "Shorten URL"}
          </Button>
          {shortUrl && (
            <div className="mt-4 rounded-xl bg-black/30 p-4 text-center wrap-break-word text-white">
              <p>your short url:</p>
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
