# Hispana Barber Shop website

## Deploy
1. Put this folder in a GitHub repo (`git init`, commit, push).
2. Vercel > Add New Project > import the repo > Deploy (no build settings needed).
3. Email: create a free account at resend.com, make an API key. In Vercel > Settings > Environment Variables add:
   - `RESEND_API_KEY` = your key
   - `CONTACT_TO` = the shop's email (the one you want messages sent to)
   - `CONTACT_FROM` (optional, after verifying your domain in Resend)
   Redeploy. Note: with the default sender, Resend only delivers to the email you signed up with.

## Add your content
- Put images in `/images` (logo.png, owner.jpg, chair.jpg, ...) and uncomment the `<img>` lines in index.html.
- Search index.html for "add here" and "Add" to fill prices, hours and the owner story.

## Prompt to keep improving it with an AI
"You are a senior front-end designer. Edit my static site for Hispana Barber Shop in Reno, NV (dark, gold, classic barber-pole theme, vanilla HTML/CSS/JS, deploys on Vercel). Services: haircut, haircut and shave, shave only. Keep scroll-reveal animations, the contact form (POST /api/contact), mobile-first layout and accessibility. Task: [describe change]. Return full updated code."
