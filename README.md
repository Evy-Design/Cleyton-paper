# The Family Chronicle

A private family/friends newspaper site: people submit a story every two weeks, and the recipient gets a vintage-style newspaper built automatically from what came in.

This is a plain HTML/CSS/JS site — no build step, no server to run. It uses **Firebase Firestore** (Google's free database) so everyone who opens the link sees the same shared data.

## 1. Set up your free Firebase project (5 minutes)

1. Go to https://console.firebase.google.com and sign in with any Google account.
2. Click **"Add project"**, give it any name (e.g. `familie-kroniek`), and finish the wizard (you can skip Google Analytics).
3. In the left menu, click **Build → Firestore Database → Create database**.
   - Choose any location close to you.
   - Choose **"Start in test mode"** (this allows the app to read/write without a login system — fine for a private family link that you don't publicly advertise).
4. Click the **gear icon (⚙) → Project settings**, scroll down to **"Your apps"**, and click the **`</>`** (web) icon to register a web app. Give it any nickname.
5. Firebase will show you a `firebaseConfig` object with values like `apiKey`, `authDomain`, etc. Copy those into `firebase-config.js` in this project, replacing the placeholder text.

That's it — no other backend code needed.

**Note on privacy:** "Test mode" means anyone with your Firebase project ID could technically read/write the database if they guessed it, so don't publicize the Firebase project ID itself (only the website link) and don't put highly sensitive information in stories. This is a reasonable trade-off for a small private family tool — if you ever want it locked down further, Firestore security rules can restrict access, but that requires adding a login system.

## 2. Put it on GitHub and go live with GitHub Pages (free)

1. Create a free account at https://github.com if you don't have one.
2. Create a new repository (e.g. `familie-kroniek`), public or private — **Pages works with both** as long as your account supports it (private repos need a paid plan for Pages on some account types; public is simplest and free for everyone).
3. Upload these files to the repository: `index.html`, `style.css`, `app.js`, `firebase-config.js` (with your real keys filled in), and this `README.md`.
   - Easiest way: on the repository page, click **"Add file" → "Upload files"**, drag all files in, and commit.
4. Go to the repository's **Settings → Pages**.
5. Under **"Build and deployment"**, set **Source** to **"Deploy from a branch"**, branch **`main`**, folder **`/ (root)`**, then **Save**.
6. After a minute or two, GitHub will show you a live URL like `https://yourusername.github.io/familie-kroniek/`. That's the link you share with family and friends.

## Using the site

- **Home page**: two options — submit a story, or open the recipient's newspaper.
- **Submitting a story**: pick your name from the list (or type your own), create a password the first time, then write your title/story and optionally add a photo. You can edit it until the day before the edition closes.
- **The recipient's newspaper**: enter the recipient's password (set in Settings) to see all past editions, laid out like a newspaper.
- **Settings (⚙)**: only visible in the navigation bar once someone has logged in as **"Evy"** — from there you can rename the newspaper, change the recipient's name/password, and edit the list of family members.

## Customizing

- Edit `DEFAULT_CONFIG` in `app.js` for the very first defaults (only used before Settings has been saved once).
- Colors and fonts live in `style.css` under the `:root` variables at the top.
- The masthead uses the Google Font "Pinyon Script" for the script logo — swap the font link in `index.html` if you'd like a different one.
