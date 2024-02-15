![Event Ticket Website](logo.png)

## Overview
An event ticket website that faciliatates booking and organisation of events.

### Features
- One-Click Sign In using GitHub OAuth
- Authentication using Supabase
- Users can book and cancel tickets for events
- Organisers can see their organised events and cancel them
- Fully responsive for mobile and tablet

### Libraries/Frameworks Used
1. [React](https://react.dev/)
2. [NextJS](https://nextjs.org/)
3. [Bulma](https://bulma.io/)
4. [Supabase](https://supabase.com/)

# My Development Experience
## The Problem
This was a full-stack project that was initially created using Flask, MySQL and SQLAlchemy for one of my first year modules at university. I decided to migrate the application to a modern stack to get experience with, both, NextJS 13 and Supabase without having to worry about the design process. It's for that reason that this application uses Bulma as my CSS Framework of choice as opposed to Tailwind CSS, since Bulma is available as a CDN and my original project did not have access to Node package manager. Although Bulma is a perfectly capable framework for building functional UIs quickly, I still prefer Tailwind CSS for it's comparatively greater modularity when it comes to helper classes - particuarly when it comes to element sizing.

## Reflections
### Things Learned
On the front-end, this was my first time using NextJS 13 with its new app router extensively. While I appreciated the benefits the framework offers with regards to providing Server Side Rendering for server components as well as the file-based routing, there were a small number of issues I encountered due to the app router still being fairly primitive in terms of its development. Particularly, I ran into bugs with generating static pages at build time for dynamic routes and server side actions; the latter feature still being in alpha at the time of writing, however, so it's only natural for some bugs to exist. The greatest thing I found that NextJS 13 offered for me was the way that it abstracted the front-end and back-end into a single seamless experience, being cited by some as the world's first "full-stack framework."

A slightly confusing statement, no doubt, although one that I have come to recognise with the use of Supabase as my BaaS for this project. Initially, I was going to use Vercel's serverless Postgres solution in conjunction with Prisma with ORM (and I may yet still use this combination for a project in the future), however I opted for Supabase as it didn't have a limit for the number of monthly REST requests/CPU time. As with NextJS 13, this was my first time Supabase and I found it to be an extremely productive platform, providing efficient Postgres database hosting while also providing a library to make database queries effortlessly.

Something that I learned to become better at was my use of TypeScript in this project as a whole. Instead of fighting the language when it put me in unfavourable situations, I learned to work with it and learn to use checks whenever necessary to make sure that types were processed correctly. 

Furthermore, I changed the way that I assigned types to function props. Before, I would create a type alias for the props and then assign that to the object being passed in, for example:
``` typescript
type Props = {
    title: string,
    id: number
}

const myFunction = ({title, id}: Props) => {}
```
However, this wasn't always suitable as sometimes a function would only have a single prop, which didn't justify the definition of a custom type alias. On top of that, although it's clear to the TypeScript compiler what the types of the function props are, in practice it's less readable. As a result, I decided to do all my prop type definitions inline:
``` typescript
const myFunction = ({
    title, 
    id
}: {
    title: string,
    id: number    
}) => {}
```
I found that this was a lot more readable while also providing a format that would work for all functions.

Finally, something that I was able to work on a lot throughout the course of this project was adapting my code to be more functional in nature. On the React Webpage, the documentation has a section about [the importance of functional purity](https://react.dev/learn/keeping-components-pure) for React components. This was something that always stood out to me as, after learning Haskell, I developed an appreciation for functional paradigms and the conciseness that it offered while still being readable. Although ECMAScript isn't purely functional, post-ES6 versions have still provided a plethora of features that facilitate a better functional programming experience than ever before. To achieve this, I used arrow functions in all of my scripts while also using higher order functions such as `map` extensively to create elements and mutate data.  

### Improvements
The biggest issue that I encountered with regards to this project was with maintaining atomic commits when the debugging process became difficult. I would become so preoccupied with the debugging that I would forget to commit my changes altogether, or I would not commit until I had solved the issue, which would lead to a single commit having a number of different things changed. To rectify this, I just need to become better at abiding by the principle of atomic commits in the first place so that - in the event a commit breaks the application - I can easily revert the main branch to a commit before the application broke and continue development from there.

Another thing that I found difficult with my Git workflow was structuring my commit messages. Given the comparative scale of this application relative to what I've developed in the past, I wasn't sure how to reference specific components/scripts in my commit messages properly. I ended up referring to them by the page that they were used in, followed by the component name; I think a better way to go about this in the future is to use the file path of the file instead.
