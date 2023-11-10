## Welcome to Svelter Skelter!

This is a repo full of bugs and challenges for you to solve to learn the basics of modern SSR apps through SvelteKit. Yay! I'll leave breadcrumbs throughout the project to help you figure out what to do. Of course, you can always reach out to Jeff if you get really stuck.

Important Notes: 
1. You shouldn't have to dig into the $lib server or client code at all to fix these problems.
2. Don't worry about exports from the challenge service. Those are files I made to keep the challenge moving in the background. Feel free to read through all the bad code I put in there once you complete all the challenges though!
3. I'm caching progress up through challenge 2 in localStorage. So, there's some overthought and unneeded complexity to attempt to give you a better learning experience. You shouldn't have any interactions with it, but if it causes any issues for you or confuses any topics then just let me know.


## Challenge 1

Oh my! There seems to be a problem loading our pages! Can you fix the data loaders to make sure the data is properly getting sent to each page?


## Challenge 2

Now that you've got the data loader working, a new foe has appeared. It appears to be a empty journal entry, and some... kind... of ... FORM!? EGADS!!

Can you fix the form and connect it to a form action, and send the data to the component?

## Challenge 3

Well, you're a friggin' pro now. I guess it's time to think of how you're going to rule the planet now that you're an all powerful Svelte developer. Read the final journal entry to see where to go next.

## How to run this joint

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
