// pages/sitemap.xml.js
const SITE_URL = 'https://www.ladybeaute.fr'

const services = [
  'soin-visage-and-corps',
  'microblading',
  'microneedling',
  'winner-filler',
  'acide-hyaluronique',
  'onglerie',
  'therapie-par-ventouses',
  'plasma-pen',
  'lipocavitation-anticellulite',
  'epilation-a-la-cire-et-au-fil',
  'epilation-electrique-a-l-aiguille',
]

const staticPages = [
  { url: '', priority: '1.00' },
  { url: '/a-propos', priority: '0.80' },
  { url: '/mentions-legales', priority: '0.50' },
  { url: '/conditions-generales', priority: '0.50' },
  { url: '/politique-confidentialite', priority: '0.50' },
]

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.map(page => `
      <url>
        <loc>${SITE_URL}${page.url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${page.priority}</priority>
      </url>`).join('')}
      ${services.map(slug => `
      <url>
        <loc>${SITE_URL}/services/${slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.80</priority>
      </url>`).join('')}
    </urlset>`
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap()
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
  return { props: {} }
}

export default function SiteMap() {}