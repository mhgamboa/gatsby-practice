# Preface

This is my first attempt at using gatsbyJS. I will use this README.md file as a way to take notes; it is my hope that whenever I am confused or forget about something in Gatsby I will come here to refresh.

A big thank you to The NetNinja's free [GatsbyJS course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB) found on youtube, as I am just following along on their tutorial. I guess you could view this README.md as a cliff notes version of their tutorial.

NOTE: I already have a fundamental understanding of Reactjs. It is recommended you know that before tackling GatsbyJS.

## General

- 90% of the code you work on exists in the `src` folder
- Make sure to have the VS Code extension "ES7 React/Redux/GraphQL/React-Native snippets" installed
  - In each React component/page you can just type `rfc` to create a basic React App. This will save you a LOT of time.

## Web Pages

- Different webpages of your website will live in the `src/pages` folder
- All named Javascript files within `src/pages` represent differnt paths on your website.
  - For example the `src/pages/about.js` will represent the design/layout of `http://yourWebsite.com/about`
- Folders found withing `src/pages` can also represent paths of your website. Let's us the path `src/pages/projects` as an example
  - `src/pages/projects/index.js` will represent the design/layout of `http://yourWebsite.com/projects`
  - `src/pages/projects/calculator` will represent the design/layout of `http://yourWebsite.com/projects/calculator`
  - Create a `src/pages/404.js` page. Gatsby will automatically route to this when the user generates a 404 error.

## Components

- Components live inside the `src/components` folder
  - When creating a `Navbar` component, make sure to use `<Link>` instead of `<a>`. You will also need to `import { Link } from 'gatsby'` at the top of your component
- You will have to import the Components inside of your Webpages (Found within the `src/pages` folder)
- Name the component Javascript files in

### Using Wrapping WebPages With Components (EX: Layouts)

We will use `src/components/Layout.js` as an Example.

- In `Layout.js` pass `{ children }` as a parameter. Example:

```
export default function Layout({ children }) {
  return(
    <div>
      { children }
    </div>
  )
}
```

- Then in your Webpage Simply wrap your content in the `{Layout}` component. We will use `src/index.js` as an example:

```
import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout> {/*Start {children} content*/}
      <h2>Content Goes Here</h2>
    </Layout> {/*End {children} content*/}
  )
}

```
