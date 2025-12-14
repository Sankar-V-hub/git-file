# Netlify Deployment Guide

## Prerequisites
- Netlify account (free at https://netlify.com)
- GitHub account (to connect repository)
- Git installed on your machine

## Step 1: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Blog and Portfolio Site"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Connect to Netlify

### Option A: Netlify UI (Recommended)
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub as your Git provider
4. Authorize Netlify to access your GitHub repositories
5. Select your repository
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 20 or higher (set via .nvmrc or in Netlify UI)
7. Click "Deploy site"

### Option B: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
```

## Step 3: Environment Variables (if needed)

In Netlify Dashboard:
1. Go to Site settings → Build & deploy → Environment
2. Add any required environment variables:
   - `NEXT_PUBLIC_*` variables for frontend
   - Any API keys needed for your application

## Step 4: Custom Domain (Optional)

1. In Netlify dashboard, go to Domain settings
2. Click "Add custom domain"
3. Enter your domain (e.g., yoursite.com)
4. Update your domain's DNS records to point to Netlify

## Important Files

- **netlify.toml** - Configuration for Netlify deployment
- **.nvmrc** - Specifies Node.js version (optional but recommended)
- **package.json** - Contains build and start scripts

## Build & Deploy Configuration

**Build Command:** `npm run build`
- This runs Next.js build, creating optimized production bundle

**Publish Directory:** `.next`
- Netlify serves the `.next` directory which contains the built app

**Functions:** Optional (for serverless functions)
- Place any serverless functions in `netlify/functions/`

## Performance Optimizations Already Configured

✅ **Image Optimization:**
- 12 blog images optimized to 27-46 KB
- 6 work project images optimized to 17-29 KB
- All images cached with 1-year expiration

✅ **Static Asset Caching:**
- Next.js static files cached forever (immutable)
- Images cached for 1 year

✅ **Security Headers:**
- X-Frame-Options: Prevents clickjacking
- X-Content-Type-Options: Prevents MIME sniffing
- X-XSS-Protection: Enables browser XSS protection
- Referrer-Policy: Controls referrer information

## Monitoring After Deployment

1. **Build Logs:** Netlify Dashboard → Deploys → View build logs
2. **Analytics:** Built-in analytics in Netlify Dashboard
3. **Performance:** Use Netlify Analytics or Google PageSpeed Insights

## Troubleshooting

### Build fails
- Check build logs in Netlify Dashboard
- Ensure all dependencies are in package.json
- Verify .nvmrc Node version matches build environment

### Pages not found (404)
- Netlify automatically redirects SPA routes
- Check netlify.toml redirect rules

### Images not loading
- Verify public/blog/ and public/work/ folders are deployed
- Check file paths use forward slashes `/` not backslashes `\`

### Slow builds
- Check if node_modules is unnecessarily large
- Consider caching npm dependencies

## Deployment Status

Your site is ready to deploy! All:
✅ Code is clean and error-free
✅ Images are optimized
✅ Configuration files are in place
✅ Build scripts are configured
✅ Security headers are configured
✅ Caching rules are optimized

## Next Steps

1. Create GitHub repository
2. Connect to Netlify
3. Deploy site
4. Monitor build logs
5. Visit your live site!

For help: https://docs.netlify.com/
