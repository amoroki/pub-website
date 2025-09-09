# Amoroki - Professional ICT Services Website

A modern, professional website for Amoroki ICT services built with React, TypeScript, and Tailwind CSS.

## 🚀 Free Deployment Options

### Option 1: Netlify (Recommended)

**Step 1: Push to GitHub**
1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/amoroki-website.git
git push -u origin main
```

**Step 2: Deploy on Netlify**
1. Go to [netlify.com](https://netlify.com) and sign up with GitHub
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Build settings are automatically detected from `netlify.toml`
5. Click "Deploy site"

**Step 3: Custom Domain Setup**
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter `amoroki.co.ke`
4. Add these DNS records to your domain provider:
   - Type: `CNAME`, Name: `www`, Value: `your-site-name.netlify.app`
   - Type: `A`, Name: `@`, Value: `75.2.60.5`

### Option 2: Vercel

**Step 1: Push to GitHub** (same as above)

**Step 2: Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project"
3. Import your GitHub repository
4. Build settings are automatically detected from `vercel.json`
5. Click "Deploy"

**Step 3: Custom Domain Setup**
1. In Vercel dashboard, go to project settings → "Domains"
2. Add `amoroki.co.ke`
3. Add these DNS records to your domain provider:
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`
   - Type: `A`, Name: `@`, Value: `76.76.19.61`

### Option 3: GitHub Pages (Alternative)

1. In your GitHub repository, go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` (you'll need to set up GitHub Actions)
4. Custom domain: `amoroki.co.ke`

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── App.tsx                 # Main app component
├── components/             # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/                # Reusable UI components
├── styles/
│   └── globals.css        # Global styles and Tailwind setup
└── src/
    └── main.tsx          # React entry point
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized images and code splitting
- **Accessibility**: WCAG compliant components

## 🏢 Services Showcased

- Software Development
- Software Integration  
- UX/UI Design
- Network Infrastructure
- Network Design
- Computer Engineering
- Project Management
- Building Services

## 📞 Contact Information

- **Website**: amoroki.co.ke
- **Email**: info@amoroki.com
- **Phone**: +254 (XXX) XXX-XXXX

---

Built with ❤️ by Amoroki ICT Services