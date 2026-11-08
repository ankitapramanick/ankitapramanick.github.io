# Sales Retail Performance Dashboard

A GitHub Pages-ready, browser-interactive recreation of the three-page Sales Retail dashboard using the supplied Global Superstore workbook.

## Files
- `index.html` — dashboard UI, charts, filters and interactions
- `data.js` — browser-ready data extracted from `Global Superstore.xlsx`

## Pages
1. Executive Summary
2. Product & Customer Analysis
3. Profitability Analysis

## Publish on GitHub Pages
1. In your portfolio repository, create `projects/sales-dashboard/`.
2. Upload both `index.html` and `data.js` into that folder.
3. Commit the changes to the `main` branch.
4. Open repository Settings → Pages and ensure GitHub Pages is enabled from `main` / root (if already enabled, no change is needed).
5. Visit: `https://ankitapramanick.github.io/projects/sales-dashboard/`

The dashboard loads Chart.js from jsDelivr, so visitors need an internet connection. The workbook data is bundled in `data.js`; no backend is required.

## Notes
- This is a web recreation, not a native Power BI report viewer. The original `.pbix` can be offered separately as a download.
- Currency is displayed as USD, matching the Global Superstore dataset.
- The source workbook contains order-line data, returns and regional people/manager mapping.
