import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { getBlogPosts, type GHLBlogPost } from "@/lib/ghl";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog - Social Media Tips & AI Content Insights",
  description:
    "Learn how to grow your social media presence with AI-powered content creation. Tips, strategies, and insights from the KontentFire team.",
};

const fallbackPosts: GHLBlogPost[] = [
  {
    id: "1",
    title: "10 Ways AI is Revolutionizing Social Media Marketing",
    slug: "ai-revolutionizing-social-media-marketing",
    content: "",
    excerpt:
      "Discover how artificial intelligence is transforming the way businesses approach social media marketing.",
    publishedAt: "2024-01-15T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "1", name: "AI Marketing" }],
  },
  {
    id: "2",
    title: "The Ultimate Guide to Content Scheduling",
    slug: "ultimate-guide-content-scheduling",
    content: "",
    excerpt:
      "Learn the best practices for scheduling your social media content to maximize engagement.",
    publishedAt: "2024-01-10T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "2", name: "Content Strategy" }],
  },
  {
    id: "3",
    title: "How to Create Viral LinkedIn Posts with AI",
    slug: "create-viral-linkedin-posts-ai",
    content: "",
    excerpt:
      "Step-by-step guide to using AI to craft LinkedIn posts that get massive engagement.",
    publishedAt: "2024-01-05T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "3", name: "LinkedIn" }],
  },
];

export default async function BlogPage() {
  let posts: GHLBlogPost[] = [];

  if (process.env.GHL_BLOG_ID && process.env.GHL_REFRESH_TOKEN) {
    posts = await getBlogPosts(process.env.GHL_BLOG_ID);
  }

  if (posts.length === 0) {
    posts = fallbackPosts;
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              <span>KontentFire Blog</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Social Media Tips & <span className="fire-text">AI Insights</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Learn how to grow your audience and automate your social media marketing with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white/50" />
                </div>

                <div className="p-6">
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category) => (
                        <span
                          key={category.id}
                          className="text-xs font-medium px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                    <Link href={"/blog/" + post.slug}>{post.title}</Link>
                  </h2>

                  {post.excerpt && (
                    <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    {post.author && (
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author.name}</span>
                      </div>
                    )}
                  </div>

                  <Link
                    href={"/blog/" + post.slug}
                    className="inline-flex items-center gap-2 text-orange-500 font-medium group-hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
