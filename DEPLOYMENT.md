# Entebbe Club Website - Deployment Guide

## 🚀 Vercel Deployment

### Prerequisites
- [ ] GitHub repository connected to Vercel
- [ ] Resend API account and key
- [ ] Custom domain (optional)

### Step 1: Connect to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Import Project** from GitHub
4. **Select Repository**: `entebbe-club-website`
5. **Framework Preset**: Next.js (auto-detected)
6. **Root Directory**: `./` (default)
7. **Build Command**: `npm run build` (auto-detected)
8. **Output Directory**: `.next` (auto-detected)

### Step 2: Configure Environment Variables

In Vercel dashboard, go to **Settings > Environment Variables**:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

### Step 3: Deploy

1. **Click "Deploy"**
2. **Wait for build** (2-3 minutes)
3. **Check deployment** at provided URL

### Step 4: Email Setup

1. **Sign up for Resend** at [resend.com](https://resend.com)
2. **Get API Key** from dashboard
3. **Add to Vercel** environment variables
4. **Verify Domain** (optional but recommended)

### Step 5: Custom Domain (Optional)

1. **Add Domain** in Vercel dashboard
2. **Configure DNS** as instructed
3. **Wait for SSL** certificate (automatic)

## 🔧 Production Configuration

### Environment Variables
```bash
# Required
RESEND_API_KEY=re_xxxxxxxxxxxx

# Optional
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Build Settings
- **Node.js Version**: 18.x (auto-detected)
- **Build Command**: `npm run build`
- **Install Command**: `npm install`

## 📊 Performance Optimization

### Already Implemented
- ✅ Next.js 14 with App Router
- ✅ Image optimization
- ✅ Code splitting
- ✅ Static generation where possible
- ✅ Responsive design

### Vercel Features
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Edge Functions (if needed)
- ✅ Analytics (optional)

## 🧪 Testing Before Deployment

### Local Testing
```bash
# Build test
npm run build

# Production test
npm run start

# Lint check
npm run lint
```

### Functionality Test
- [ ] All pages load correctly
- [ ] Contact forms work
- [ ] Responsive design
- [ ] Navigation works
- [ ] Images load properly

## 🚨 Common Issues

### Build Failures
- **Missing dependencies**: Check `package.json`
- **TypeScript errors**: Run `npm run type-check`
- **Environment variables**: Ensure all required vars are set

### Email Issues
- **API key not set**: Check Vercel environment variables
- **Domain not verified**: Verify domain in Resend
- **Rate limits**: Check Resend usage limits

## 📈 Post-Deployment

### Monitoring
- **Vercel Analytics**: Enable in dashboard
- **Error tracking**: Monitor build logs
- **Performance**: Use Vercel Speed Insights

### Maintenance
- **Regular updates**: Keep dependencies updated
- **Backup**: GitHub repository serves as backup
- **Monitoring**: Check Vercel dashboard regularly

## 🔄 Continuous Deployment

### Automatic Deployments
- **Push to main**: Auto-deploys to production
- **Pull requests**: Preview deployments
- **Branch deployments**: Feature branch testing

### Manual Deployments
- **Vercel CLI**: `vercel --prod`
- **Dashboard**: Manual deploy button

## 📞 Support

### Vercel Support
- **Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

### Project Support
- **Issues**: GitHub repository issues
- **Documentation**: Check project README
- **Roadmap**: See roadmap folder for future plans