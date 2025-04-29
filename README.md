# Deployment Instructions for cPanel Shared Hosting

This guide provides basic steps to deploy this React (Vite) application to a standard cPanel shared hosting environment.

**Important Note:** Deploying modern JavaScript applications (like this one built with Vite) to traditional shared hosting can sometimes be challenging due to server configurations, especially regarding routing for Single Page Applications (SPAs). The instructions below are general; you might need to adapt them based on your specific hosting provider's setup.

## Steps:

1.  **Build the Project Locally:**
    *   Ensure you have Node.js and Bun (or npm/yarn) installed on your local machine.
    *   Navigate to the project's root directory (`azzamadie.me-main` or `azzam-orb-spark-main` from the zip file) in your terminal.
    *   Install dependencies: `bun install` (or `npm install` / `yarn install`).
    *   Run the build command: `bun run build` (or `npm run build` / `yarn build`).
    *   This will create a `dist` folder in your project directory. This folder contains the static HTML, CSS, and JavaScript files needed for deployment.

2.  **Upload Files via cPanel File Manager:**
    *   Log in to your cPanel account.
    *   Open the "File Manager".
    *   Navigate to the directory where your website files should reside. This is typically `public_html` for your main domain, or a subdirectory within `public_html` if you're deploying to a subdomain or subfolder (e.g., `public_html/portfolio`).
    *   Click "Upload".
    *   **Option A (Upload dist contents directly):** Go *inside* the `dist` folder on your local machine, select *all* the files and folders within it (including `index.html`, `assets` folder, etc.), and upload them directly into your target directory (`public_html` or subdirectory) on the server.
    *   **Option B (Upload zipped dist):** Zip the *contents* of the `dist` folder on your local machine (e.g., `build.zip`). Upload this single zip file to your target directory on the server. Once uploaded, select the zip file in the cPanel File Manager and click "Extract". Ensure it extracts directly into the target directory.

3.  **Configure Routing (Potential Issue for SPAs):**
    *   React applications often use client-side routing. When a user directly accesses a URL like `yourdomain.com/portfolio`, the server might look for a file or directory named `portfolio` and return a 404 error because it doesn't exist physically.
    *   To fix this, you need to configure the server to redirect all requests to your `index.html` file, allowing the React router to handle the path.
    *   **If your server uses Apache:** You can usually achieve this by creating or editing a `.htaccess` file in the same directory where you uploaded your `dist` contents (`public_html` or subdirectory).
    *   Add the following rules to your `.htaccess` file:

      ```htaccess
      <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase / # Adjust this if deploying to a subdirectory (e.g., /portfolio/)
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteCond %{REQUEST_FILENAME} !-l
        RewriteRule . /index.html [L] # Adjust this if deploying to a subdirectory (e.g., /portfolio/index.html)
      </IfModule>
      ```
    *   **Important:** If you deployed to a subdirectory (e.g., `public_html/portfolio`), you need to adjust the `RewriteBase` and the final `RewriteRule` accordingly (e.g., `RewriteBase /portfolio/` and `RewriteRule . /portfolio/index.html [L]`).
    *   **If your server uses Nginx or another web server:** The configuration will be different. Consult your hosting provider's documentation or support for instructions on configuring URL rewrites for SPAs.

4.  **Test:**
    *   Visit your domain (or subdomain/subfolder) in your browser.
    *   Test navigating to different pages directly by typing the URL (e.g., `yourdomain.com/portfolio`, `yourdomain.com/about`) to ensure the routing configuration is working correctly.

## Troubleshooting:

*   **Blank Page/Errors:** Check the browser's developer console (usually F12) for JavaScript errors. This might indicate issues with file paths or missing dependencies during the build.
*   **404 Errors on Subpages:** This almost always points to the SPA routing configuration (`.htaccess` or equivalent) being missing or incorrect.
*   **Build Issues:** If `bun run build` fails, check the error messages. It might be due to missing dependencies (run `bun install` again) or errors in the code.
*   **Hosting Provider Specifics:** Shared hosting environments vary. If you encounter persistent issues, consult your hosting provider's documentation or support channels.

