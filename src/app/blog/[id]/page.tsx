// src/app/blog/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";

// Define the shape of a news post
interface NewsPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

// Our sample data array
const newsPosts: NewsPost[] = [
  {
    id: 1,
    title: "World’s most famous espresso recipes",
    date: "March 28, 2025",
    excerpt:
      "Discover the art of espresso and the secrets behind its global popularity...",
    imageUrl: "/images/ph.png",
  },
  {
    id: 2,
    title: "The power of people design in marketing",
    date: "March 27, 2025",
    excerpt:
      "Human-centered design is at the core of successful marketing campaigns...",
    imageUrl: "/images/ph.png",
  },
  {
    id: 3,
    title: "What we do to get rid of stress at work",
    date: "March 25, 2025",
    excerpt:
      "Stress management techniques that can improve productivity and morale...",
    imageUrl: "/images/ph.png",
  },
  {
    id: 4,
    title: "Loving UI safety talks from a famous brand",
    date: "March 24, 2025",
    excerpt:
      "How big brands ensure user interface safety and user privacy...",
    imageUrl: "/images/ph.png",
  },
];

// Tell Next.js which IDs to pre-render
export async function generateStaticParams() {
  return newsPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetail({ params }: PageProps) {
  // await the params promise before using it
  const { id } = await params;

  // find the matching post
  const post = newsPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Post not found.</p>
        <Link href="/blog" className="text-blue-500 underline ml-4">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 py-20">
      <header className="w-full bg-white py-15 mb-10 flex justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-sm font-semibold mt-4">
            Home . Blogs . {post.title}
          </p>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="py-6">
          <p className="text-gray-500 text-sm">{post.date}</p>
          <div className="mt-4 text-gray-700 space-y-4">
            <p>{post.excerpt}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vehicula, purus nec mollis placerat, ipsum urna placerat nisl,
              non fermentum purus nisi ac justo.
            </p>
          </div>
        </div>
        <Link href="/blog" className="text-blue-500 hover:underline">
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}
