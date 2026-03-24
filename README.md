# Denali Cottage – Rental Listing Website

A professional, clean website showcasing a 2-bedroom home for rent in Madison Valley, Seattle.

## Features

- **Hero slideshow** with property imagery
- **Prominent rental info**: $4,000/month, flexible May–June move-in, 1-year minimum lease
- **Property details**: 2 bed, 1.75 bath, 1,089 sq ft, spacious backyard
- **Location highlights**: UW, SR 520, Eastside (15 min), SLU (10 min), Metro 48 bus
- **Photo gallery** with link to full Zillow listing (24+ photos)

## Running Locally

Open `index.html` in a browser, or run a simple server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve
```

Then visit http://localhost:8000

## Customization

### Replace Photos

The site currently uses Unsplash placeholder images. To use your own photos from the Zillow listing:

1. Save images from [the Zillow listing](https://www.zillow.com/homedetails/1767-26th-Ave-E-Seattle-WA-98112/450900007_zpid/) to the `images/` folder.
2. Update the image `url()` values in `index.html` to point to your local files.

### Add Contact Info

Edit the "Ready to Make This Your Home?" section in `index.html` and add your email, phone, or preferred contact method in the `summary-contact` paragraph.

## Deployment (GitHub Pages)

1. Push this repo to GitHub.
2. Go to **Settings → Pages** in your repository.
3. Under "Source", choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder.
5. Save. The site will be live at `https://<username>.github.io/<repo-name>/`.

The `.nojekyll` file tells GitHub Pages to serve the site as static files without Jekyll processing.
