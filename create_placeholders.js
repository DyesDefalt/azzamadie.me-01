// Create placeholder SVG images for awards, certifications, and portfolio items
// This will be used until actual images are provided

const createPlaceholderSVG = (text, color = '#3B82F6', bgColor = '#1A2A4A') => {
  const svg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${bgColor}"/>
    <text x="100" y="100" font-family="Arial" font-size="14" fill="${color}" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
  
  return svg;
};

// Create award logos
const awards = [
  { name: 'youtube_works', text: 'YouTube Works SEA 2024' },
  { name: 'meta_reels_impact', text: 'Meta Reels Impact Awards' },
  { name: 'marketing_excellence', text: 'Marketing Excellence Awards' }
];

// Create certification logos
const certs = [
  { name: 'google-logo', text: 'Google Certified' },
  { name: 'meta-logo', text: 'Meta Certified' },
  { name: 'tiktok-logo', text: 'TikTok Certified' },
  { name: 'revou-logo', text: 'RevoU Certified' }
];

// Create portfolio images
const portfolioItems = [
  { name: 'bca_dkkn', text: 'BCA - Don\'t Know Kasih No!' },
  { name: 'bca_ramadan', text: 'BCA - Ramadan Campaign' },
  { name: 'bca_paylater', text: 'BCA - Paylater' },
  { name: 'xl_app', text: 'XL Axiata App Campaign' },
  { name: 'putupatu', text: 'Putupatu Leads Gen' },
  { name: 'web_dev', text: 'Web Development Projects' }
];

const fs = require('fs');
const path = require('path');

// Create award placeholder images
awards.forEach(award => {
  const svg = createPlaceholderSVG(award.text);
  const filePath = path.join('/home/ubuntu/website_update/updated_site/public/images/awards', `${award.name}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`Created: ${filePath}`);
});

// Create certification placeholder images
certs.forEach(cert => {
  const svg = createPlaceholderSVG(cert.text);
  const filePath = path.join('/home/ubuntu/website_update/updated_site/public/images/certs', `${cert.name}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`Created: ${filePath}`);
});

// Create portfolio placeholder images
portfolioItems.forEach(item => {
  const svg = createPlaceholderSVG(item.text);
  const filePath = path.join('/home/ubuntu/website_update/updated_site/public/images/portfolio', `${item.name}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`Created: ${filePath}`);
});

console.log('All placeholder images created successfully!');
