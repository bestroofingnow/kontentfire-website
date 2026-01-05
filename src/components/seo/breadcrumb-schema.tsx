import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://kontentfire.com${item.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 ${className}`}>
        {allItems.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="h-4 w-4 text-slate-400" />}
            {index === allItems.length - 1 ? (
              <span className="text-slate-900 dark:text-white font-medium">
                {index === 0 && <Home className="h-4 w-4 inline mr-1" />}
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-orange-500 transition-colors flex items-center"
              >
                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
