import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { getBlogPosts, getBlogPostBySlug, type GHLBlogPost } from "@/lib/ghl";
import { Calendar, User, ArrowLeft, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const revalidate = 60;

const fallbackPosts: Record<string, GHLBlogPost> = {
  "ai-revolutionizing-social-media-marketing": {
    id: "1",
    title: "10 Ways AI is Revolutionizing Social Media Marketing",
    slug: "ai-revolutionizing-social-media-marketing",
    content: "<h2>The AI Revolution in Social Media</h2><p>Artificial intelligence is transforming how businesses approach social media marketing. From content creation to audience targeting, AI tools are making it easier than ever to build a strong online presence.</p><h3>1. Automated Content Generation</h3><p>AI can now write compelling social media posts, blog articles, and even video scripts.</p><h3>2. Smart Scheduling</h3><p>AI analyzes your audience engagement patterns to determine optimal posting times.</p><h3>3. Personalized Recommendations</h3><p>Machine learning algorithms suggest content topics based on what performs best.</p>",
    excerpt: "Discover how artificial intelligence is transforming social media marketing.",
    publishedAt: "2024-01-15T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "1", name: "AI Marketing" }],
  },
  "ultimate-guide-content-scheduling": {
    id: "2",
    title: "The Ultimate Guide to Content Scheduling",
    slug: "ultimate-guide-content-scheduling",
    content: "<h2>Master Your Content Calendar</h2><p>Consistent posting is key to social media success.</p><h3>Why Scheduling Matters</h3><p>Posting consistently builds audience expectations and keeps your brand top of mind.</p><h3>Best Times to Post</h3><p>Optimal times vary by platform and audience. Test and iterate to find what works for you.</p>",
    excerpt: "Learn the best practices for scheduling your social media content.",
    publishedAt: "2024-01-10T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "2", name: "Content Strategy" }],
  },
  "create-viral-linkedin-posts-ai": {
    id: "3",
    title: "How to Create Viral LinkedIn Posts with AI",
    slug: "create-viral-linkedin-posts-ai",
    content: "<h2>The LinkedIn Algorithm Decoded</h2><p>LinkedIn rewards content that sparks meaningful conversations.</p><h3>Hook Your Readers</h3><p>Start with a compelling first line that makes people want to read more.</p><h3>Tell Stories</h3><p>Personal stories and case studies perform exceptionally well on LinkedIn.</p>",
    excerpt: "Step-by-step guide to using AI to craft LinkedIn posts that get massive engagement.",
    publishedAt: "2024-01-05T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "3", name: "LinkedIn" }],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  let posts: GHLBlogPost[] = [];
  if (process.env.GHL_BLOG_ID && process.env.GHL_REFRESH_TOKEN) {
    posts = await getBlogPosts(process.env.GHL_BLOG_ID);
  }
  if (posts.length === 0) {
    return Object.keys(fallbackPosts).map((slug) => ({ slug }));
  }
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  let post: GHLBlogPost | null = fallbackPosts[slug] || null;
  
  if (process.env.GHL_BLOG_ID && process.env.GHL_REFRESH_TOKEN) {
    const ghlPost = await getBlogPostBySlug(process.env.GHL_BLOG_ID, slug);
    if (ghlPost) post = ghlPost;
  }
  
  if (!post) return {};
  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  let post: GHLBlogPost | null = fallbackPosts[slug] || null;
  
  if (process.env.GHL_BLOG_ID && process.env.GHL_REFRESH_TOKEN) {
    const ghlPost = await getBlogPostBySlug(process.env.GHL_BLOG_ID, slug);
    if (ghlPost) post = ghlPost;
  }

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-500 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <span
                    key={category.id}
                    className="text-sm font-medium px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{post.author.name}</span>
                </div>
              )}
            </div>
          </header>

          <div
            className="prose prose-lg dark:prose-invert prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-orange-500 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <Link href="/blog">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  More Articles
                </Button>
              </Link>
              <Button variant="ghost">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Explore More */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Explore More</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/features" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Features</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See all capabilities</div>
              </Link>
              <Link href="/pricing" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Pricing</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plans starting at $29/mo</div>
              </Link>
              <Link href="/use-cases" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Use Cases</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See who uses KontentFire</div>
              </Link>
              <Link href="/locations" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Locations</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Serving all 50 states</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Automate Your Content?</h2>
            <p className="text-slate-300 mb-8">Start creating AI-powered social media content today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com">
                <Button size="lg">Sign Up Now <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.seo?.description || post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            author: {
              "@type": "Organization",
              name: post.author?.name || "KontentFire Team",
              url: "https://kontentfire.com",
            },
            publisher: {
              "@type": "Organization",
              name: "KontentFire",
              logo: {
                "@type": "ImageObject",
                url: "https://kontentfire.com/logo-transparent.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://kontentfire.com/blog/${post.slug}`,
            },
          }),
        }}
      />
    </>
  );
}
