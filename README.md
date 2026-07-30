# PharmaPool pilot demo

An editable browser prototype for the founding-pharmacist pilot described in the product requirements document. It opens with a customer-facing product story and then moves into a clickable pilot workspace.

## Run locally

From this folder, run:

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173 in a browser.

The demo is deliberately framed as a private pilot: it records decisions and commitments but does not process or solicit public funds.

## Temporary Vercel hosting

This is a dependency-free static site. In Vercel, choose **Add New → Project**, import this folder or repository, select **Other** for the framework preset, and deploy. No build command or environment variables are required.
