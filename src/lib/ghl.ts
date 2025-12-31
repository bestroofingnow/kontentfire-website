const GHL_API_BASE = 'https://services.leadconnectorhq.com';

export interface GHLBlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  author?: {
    id: string;
    name: string;
  };
  categories?: Array<{
    id: string;
    name: string;
  }>;
  publishedAt: string;
  status: 'published' | 'draft';
  seo?: {
    title?: string;
    description?: string;
  };
}

export interface GHLCategory {
  id: string;
  name: string;
  slug: string;
}

export interface GHLAuthor {
  id: string;
  name: string;
  bio?: string;
  avatar?: string;
}

let cachedToken: { token: string; expiresAt: number } | null = null;

export async function getGHLAccessToken(): Promise<string> {
  // Check if we have a valid cached token
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  const response = await fetch(`${GHL_API_BASE}/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.GHL_REFRESH_TOKEN!,
      client_id: process.env.GHL_CLIENT_ID!,
      client_secret: process.env.GHL_CLIENT_SECRET!,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get GHL access token: ${response.statusText}`);
  }

  const data = await response.json();
  
  // Cache the token (expires 1 minute before actual expiry)
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  return data.access_token;
}

export async function getBlogPosts(blogId: string): Promise<GHLBlogPost[]> {
  try {
    const accessToken = await getGHLAccessToken();

    const response = await fetch(
      `${GHL_API_BASE}/blogs/posts/all?blogId=${blogId}&status=published`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Version: '2021-07-28',
        },
        next: { revalidate: 60 }, // ISR - revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch blog posts:', response.statusText);
      return [];
    }

    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(
  blogId: string,
  slug: string
): Promise<GHLBlogPost | null> {
  const posts = await getBlogPosts(blogId);
  return posts.find((post) => post.slug === slug) || null;
}

export async function getCategories(locationId: string): Promise<GHLCategory[]> {
  try {
    const accessToken = await getGHLAccessToken();

    const response = await fetch(
      `${GHL_API_BASE}/blogs/categories?locationId=${locationId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Version: '2021-07-28',
        },
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch categories:', response.statusText);
      return [];
    }

    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getAuthors(locationId: string): Promise<GHLAuthor[]> {
  try {
    const accessToken = await getGHLAccessToken();

    const response = await fetch(
      `${GHL_API_BASE}/blogs/authors?locationId=${locationId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Version: '2021-07-28',
        },
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch authors:', response.statusText);
      return [];
    }

    const data = await response.json();
    return data.authors || [];
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}

export async function checkSlugExists(
  locationId: string,
  slug: string
): Promise<boolean> {
  try {
    const accessToken = await getGHLAccessToken();

    const response = await fetch(
      `${GHL_API_BASE}/blogs/url-slug-exists?locationId=${locationId}&slug=${slug}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Version: '2021-07-28',
        },
      }
    );

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.exists || false;
  } catch (error) {
    console.error('Error checking slug:', error);
    return false;
  }
}
