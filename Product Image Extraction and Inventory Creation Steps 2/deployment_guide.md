# Urban Apparel Deployment Guide

This guide provides instructions for deploying your Urban Apparel e-commerce platform using various hosting options.

## Option 1: Deploy with Vercel (Recommended)

Vercel is the easiest option for deploying Next.js applications and is created by the same team behind Next.js.

1. Create a GitHub repository and push your Urban Apparel code
2. Sign up for a free account at [vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy" and your site will be live in minutes

## Option 2: Deploy with Netlify

Netlify is another excellent option for hosting Next.js applications.

1. Create a GitHub repository and push your Urban Apparel code
2. Sign up for a free account at [netlify.com](https://netlify.com)
3. Click "New site from Git" and select your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

## Option 3: Manual Deployment as Static Files

For complete control, you can export the site as static files and host them anywhere.

1. In your project directory, run:
   ```
   npm run build
   ```

2. Copy the following directories to your web server:
   - `.next/static` → should be copied to `_next/static/`
   - `public` → should be copied to the root directory

3. Upload these files to any static hosting service like:
   - Amazon S3
   - GitHub Pages
   - Any standard web hosting provider

## Post-Deployment Steps

After deploying your site:

1. **Test all functionality** - Ensure all pages load correctly and the user flow works
2. **Set up your domain** - Configure your custom domain through your hosting provider
3. **Enable HTTPS** - Most providers offer free SSL certificates
4. **Set up analytics** - Add Google Analytics or similar to track visitor behavior

## Database Considerations

The current deployment uses mock data for demonstration purposes. For a production site, you'll need to:

1. Set up a database (MongoDB, Firebase, or similar)
2. Update the database connection in `src/lib/db.ts`
3. Import your product inventory data

## Need Help?

If you encounter any issues during deployment, most hosting providers offer excellent documentation and support:

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

Good luck with your Urban Apparel e-commerce platform launch!
