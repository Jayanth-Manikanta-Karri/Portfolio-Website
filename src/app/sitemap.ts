import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jayanth-manikanta-karri.github.io/Portfolio-Website';

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/projects', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/skills', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/experience', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/resume', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
