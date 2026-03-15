# Convene Waitlist Landing Page

A lightweight static landing page for Convene, built with plain HTML, CSS, and minimal vanilla JavaScript so it can be hosted directly on GitHub Pages with no build step.

## Style Direction

The default visual direction is intentionally neutral and premium:

- Warm stone backgrounds
- Deep eucalyptus and slate accents
- A restrained serif headline paired with a clean sans-serif body
- Soft glassy cards, rounded corners, subtle gradients, and calm shadows

This avoids pink/red dating-app cliches and keeps the page polished, social, and intentional.

## File Structure

- `index.html` - page structure, copy, and form markup
- `style.css` - palette, layout, responsive styles, and component styling
- `script.js` - placeholder form protection, success-state handling, and scroll reveal effects
- `README.md` - setup, editing, Formspree hookup, and deployment notes

## Customize The Page

### 1. Update the copy

Open `index.html` and look for the HTML comments. The main areas you will likely edit are:

- Hero headline and subheadline
- Problem / positioning copy
- Waitlist copy
- Footer links

### 2. Update the colors

Open `style.css` and edit the CSS variables at the top of the file:

- `--bg` and `--bg-deep` control the page background
- `--surface` and `--surface-strong` control card and field surfaces
- `--text` and `--muted` control the main text colors
- `--accent` and `--accent-strong` control buttons, links, and focus states
- `--accent-soft` controls the success-state background
- `--highlight` controls small labels and step numbers

If you pick a final brand palette later, changing those variables will update most of the site without touching the layout styles.

### 3. Connect the forms

Both forms are currently connected to this Formspree endpoint:

```html
action="https://formspree.io/f/mjgaegzy"
```

If you ever want to switch providers or use a different Formspree form, replace both form `action` values in `index.html`.

The included JavaScript still blocks submission if a placeholder like `ACTION_URL_HERE` is ever reintroduced, so you do not accidentally publish a broken waitlist form.

## Formspree Setup

These steps follow Formspree's current HTML form workflow and redirect settings:

1. Create a form in your Formspree dashboard.
2. Copy the endpoint shown in the Integration section. It will look like `https://formspree.io/f/your-form-id`.
3. Replace the current form action values in both forms inside `index.html` with that endpoint.
4. In Formspree, open the form's Settings tab and configure the redirect so visitors return to your page after submitting.
5. Use a redirect URL like:

```text
https://yourusername.github.io/your-repo-name/?submitted=1#waitlist
```

When the page loads with `?submitted=1`, `script.js` reveals the built-in success message.

If you want both the hero form and the lower waitlist form to feed the same list, point both forms at the same Formspree endpoint.

## Deploy To GitHub Pages

1. Add these files to your GitHub repository and push to your default branch.
2. Open your repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select your branch and the `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site.
7. Open the published URL and test both forms.

If your repo is named `convenewaitlist`, your Pages URL will usually be:

```text
https://yourusername.github.io/convenewaitlist/
```

## Local Preview

Because this is a plain static site, you can preview it by opening `index.html` in a browser.

## Notes

- No build tools or package installs are required.
- The page is mobile-friendly and works as a single static deployment.
- The footer links are placeholders and should be replaced with real destinations before launch.

## Sources Used For Formspree Notes

- Formspree HTML form guide: https://help.formspree.io/hc/en-us/articles/27638977431699-Building-an-HTML-Form
- Formspree redirect settings: https://help.formspree.io/hc/en-us/articles/360012378333--Thank-You-redirect
