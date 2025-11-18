Purpose

Your very first Zoho Sigma widget.

Helps understand Zet CLI workflow, project structure, and packing/uploading process.
Project Structure
HelloWorldWidget/
│
├─ index.html         ← Entry HTML for the widget
├─ manifest.json      ← Widget configuration (name, version, service, entry file)
├─ package.json       ← Node project config (created by Zet)
├─ package-lock.json
├─ node_modules/      ← Dependencies (created by Zet)
└─ server/            ← Optional backend server for testing
Steps to Run Locally

Open CMD in widget folder:

cd "path\to\HelloWorldWidget"
Start local preview server:

zet run
Opens your widget for testing in a browser.

Use this to verify layout and interactions.

Steps to Pack & Upload

Pack the widget into a ZIP:

zet pack
Upload the resulting .zip in Zoho Sigma → Connected Apps → Upload Widget.

Key Learnings

Zet CLI requires proper folder structure; manually creating files may cause errors.

manifest.json must point to the correct entry file.

Local testing with zet run is essential before packing.

Packing creates a .zip ready for Sigma; always keep a backup of your source.

Next Steps

Experiment with buttons, links, and business card widgets.

Add JS functionality to interact with CRM records.

Gradually create more advanced widgets, reusing this workflow.
