"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleShorten = async () => {
    console.log(url);
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
            <div className="mt-4 rounded-xl bg-black/30 p-4 text-center wrap-break-word">
              your short url :
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

// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent } from '@/components/ui/card';
// import { motion } from 'framer-motion';

// export default function HomePage() {
//   const [url, setUrl] = useState('');
//   const [shortUrl, setShortUrl] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleShorten = async () => {
//     if (!url) return;
//     setLoading(true);
//     setShortUrl(null);
//     try {
//       const res = await fetch('/api/shorten', {
//         method: 'POST',
//         body: JSON.stringify({ originalUrl: url }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       const data = await res.json();
//       setShortUrl(data.shortUrl);
//     } catch (err) {
//       console.error('Error shortening URL:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white px-4">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-4xl font-bold mb-6 text-center"
//       >
//         ChopURL — Clean & Quick Link Shortener
//       </motion.h1>

//       <Card className="w-full max-w-xl p-6 bg-slate-800/70 backdrop-blur rounded-2xl shadow-xl">
//         <CardContent className="flex flex-col gap-4">
//           <Input
//             type="url"
//             placeholder="Paste your long URL here..."
//             className="bg-white/10 text-white placeholder:text-white/40 border border-white/20"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//           />
//           <Button onClick={handleShorten} disabled={loading} className="bg-teal-500 hover:bg-teal-400">
//             {loading ? 'Shortening...' : 'Shorten URL'}
//           </Button>

//           {shortUrl && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="mt-4 p-4 bg-black/30 rounded-xl text-center break-words"
//             >
//               Your short URL:
//               <a
//                 href={shortUrl}
//                 className="block text-teal-300 mt-1 hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {shortUrl}
//               </a>
//             </motion.div>
//           )}
//         </CardContent>
//       </Card>
//     </main>
//   );
// }
