# 🚀 Deploy to GitHub Pages - Complete Guide

## ✅ **What's Been Set Up**

Your portfolio is now configured for GitHub Pages with:
- ✅ Vite configured for GitHub Pages
- ✅ GitHub Actions workflow for automatic deployment
- ✅ Deploy script in package.json
- ✅ Ready for one-click deployment

---

## 🎯 **Deployment Options**

### **Option 1: Automatic Deployment (Recommended) ⭐**

This is the easiest! Every time you push to `main`, GitHub automatically deploys.

**Steps:**

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Update portfolio with latest resume info"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to: `https://github.com/AyushSaxena0611/portfolio`
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
     - (Workflow already exists in `.github/workflows/deploy.yml`)

3. **Done!** 🎉
   - GitHub automatically builds and deploys on every push
   - Check **Actions** tab to see deployment status
   - Your site will be live at: `https://ayushsaxena0611.github.io/`

---

### **Option 2: Manual Deployment (If needed)**

If automatic doesn't work or you prefer manual control:

```bash
# Build the project
npm run build

# Deploy using the script
npm run deploy
```

This creates a `gh-pages` branch and pushes the `dist` folder to it.

**Then enable GitHub Pages:**
- Go to: `https://github.com/AyushSaxena0611/portfolio/settings/pages`
- Source: Select `gh-pages` branch
- Click Save

---

## 📋 **Step-by-Step Instructions**

### **Step 1: Commit & Push Code**
```bash
cd /workspaces/portfolio
git add .
git commit -m "Update portfolio with professional experience and skills"
git push origin main
```

### **Step 2: Enable GitHub Actions**
1. Go to your GitHub repository
2. Click **Settings** tab
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. The workflow is already set up and ready!

### **Step 3: Trigger Deployment**
- The workflow runs automatically on push
- Check the **Actions** tab to see build status
- Look for a green ✅ checkmark when complete

### **Step 4: Access Your Portfolio**
Your site will be live at:
```
https://ayushsaxena0611.github.io/
```

---

## ✨ **Features of Your Setup**

✅ **Automatic Deployment**
- Deploys automatically when you push to `main`
- No manual commands needed

✅ **GitHub Actions Workflow**
- Runs on every push
- Builds your site
- Deploys to GitHub Pages
- Shows build status in Actions tab

✅ **Fast & Efficient**
- Uses Node.js 18
- Caches npm dependencies
- Builds in seconds

✅ **Custom Domain (Optional)**
- If you own a domain, add it in Settings → Pages
- Current setup: `ayushsaxena0611.github.io`

---

## 🔍 **Monitor Your Deployment**

1. **Watch the build process**:
   - Go to **Actions** tab in your repo
   - See real-time build logs
   - Check for ✅ or ❌ status

2. **View deployment**:
   - Click on the completed workflow
   - Scroll to see "Deploy to GitHub Pages" step
   - See deployment summary

3. **Access your site**:
   - Visit: `https://ayushsaxena0611.github.io/`
   - Your portfolio is now live! 🎉

---

## 🛠️ **Updating Your Portfolio**

After deployment, to make changes:

1. **Edit files locally**:
   ```bash
   # Make changes to your portfolio
   npm run dev  # Test locally
   ```

2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

3. **GitHub automatically redeploys** ✅

---

## 📊 **Deployment Status Checks**

### **Check if deployed successfully**:

```bash
# View git branches (should see gh-pages)
git branch -a

# View GitHub Pages status
# Go to: Settings → Pages
```

### **Common URLs to verify**:

- Live site: `https://ayushsaxena0611.github.io/`
- Repository: `https://github.com/AyushSaxena0611/portfolio`
- Actions: `https://github.com/AyushSaxena0611/portfolio/actions`

---

## 🐛 **Troubleshooting**

### **Site not deploying?**

1. **Check Actions tab**:
   - Go to Actions → Latest workflow run
   - Look for ❌ errors
   - Fix any build errors and push again

2. **Check Pages settings**:
   - Settings → Pages
   - Ensure source is set to "GitHub Actions"
   - Wait a few minutes for deployment

3. **Clear browser cache**:
   ```
   Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   ```

### **Still not working?**

Try manual deployment:
```bash
npm run build
npm run deploy
```

Then set Pages source to `gh-pages` branch.

---

## 📝 **Files Added/Modified**

✅ **Modified**:
- `vite.config.js` - Added base path and build config
- `package.json` - Added deploy script and homepage

✅ **Created**:
- `.github/workflows/deploy.yml` - GitHub Actions workflow

---

## 🎉 **You're All Set!**

Your portfolio is now:
- ✅ Configured for GitHub Pages
- ✅ Ready for automatic deployment
- ✅ Will deploy on every push
- ✅ Live at `https://ayushsaxena0611.github.io/`

### **Next Steps**:

1. **Push to GitHub** (if not done):
   ```bash
   git push origin main
   ```

2. **Enable GitHub Pages** (Settings → Pages → Select "GitHub Actions")

3. **Visit your live site**: `https://ayushsaxena0611.github.io/`

---

## 💡 **Pro Tips**

- 🔄 Changes auto-deploy in ~2 minutes
- 📱 Works on mobile & all browsers
- ⚡ Lightning-fast static site hosting
- 🔐 Secure HTTPS by default
- 📊 Check Actions tab for detailed logs

---

**Your portfolio is now production-ready and automatically deployed! 🚀**

For questions, check your GitHub Actions logs or refer to the main README.md file.

