# Preface

This is my first attempt at using gatsbyJS. I will use this README.md file as a way to take notes; it is my hope that whenever I am confused or forget about something in Gatsby I will come here to refresh.

A big thank you to The NetNinja's free [GatsbyJS course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB) found on youtube, as I am just following along on their tutorial. I guess you could view this README.md as a cliff notes version of their tutorial.

NOTE: I already have a fundamental understanding of Reactjs. It is recommended you know that before tackling GatsbyJS.

## General

- 90% of the code you work on exists in the `src` folder
- Make sure to have the VS Code extension "ES7 React/Redux/GraphQL/React-Native snippets" installed
  - In each React component/page you can just type `rfc` to write a lot of React component boilerplate. This will save you a LOT of time.

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
  - When creating a `Navbar` component, make sure to use `<Link to="/about">` instead of `<a>`. You will also need to `import { Link } from 'gatsby'` at the top of your component
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

## Styling

- Styles are stored in `src/styles`
- Modules allow you to scope CSS Styling to spefic components and/or pages
  - You implement it by creating the file `src/styles/pageName.modules.css`
  - In `src/pages/pageName` You will import the CSS module like this: `import { cssSelector } from "../../styles/projects.module.css"`
    -Then use the className/ID Name in your page (or component) like this: `<h1 className={cssSelector}>`

## Static Files

- Files put in the `/static` folder are directly available to the browser
- The downside to using static files is that the files won't be minified or optimized at all through the Gatsby process.
- when importing images in the `/static` folder, you can just reference the image `src` as if it were in the same folder. EX: `<img src="/programmer.svg" alt="" />`

## GraphQL

- GraphQL is a querying language - it is a way to query data from the front-end. There are 2 parts to GraphQL.
  - GraphQL Query: GraphQL queries are used to access the data from the GraphQL API(I think?)
  - GraphQL API: It is made using schemas for different data sources/types. It serves data based on the queries we make.
- All dynamic is brought together and normalized by GatsbyJS into one GraphQL layer. This normalized data is the content mesh.
  - Data can come from anywhere (MongoDB, shopify, and/or wordpress)

### GraphiQL

- GraphiQL is a playground where we can test queries.
- Run `gatsby develop` and access `http://localhost:8000/___graphql`. There are three main areas:
  - The Explorer on the left. It is the base layer we can interact with; it lists all of the different schemas we can use.
  - The middle area where we can construct test queries. You press the play button to play the query.
    - `myQuery` is just the name of the query. You can rename it to whatever you want. Without the `query myQuery` part, the query will become something of an "anonymous function".
  - On the right is the result preview, which will populate after a query has been played from the middle.
- Click on "site" in the explorer. In the popuop click "host" and "port". Click the play button at the top.
  - You can now see the results of the query on the right hand side.

### Site Metadata

- NOTE: we are doing this just so we can practice our querying.
- You add meta to a website inside `/gatsby-config.js`.
  - Whenever you change the `gatsby-config.js` file you must restart your server
  - All this file does is export an object, where you can add plugin information. This is done through the `module.exports` you can.
- To add site metadata add a property to module.exports. EX:

```
module.exports = {
  /* Your site config here */
  plugins: [],
  siteMetadata: { //case must match exactly
    title: "Your Name",
    description: "Web Dev Portfolio",
    copyright: "This Website is Copyright 2021 Marcus Gamboa"
  }
}
```

### Query Data from Pages with GraphQL

- After adding this info, you should be able to query this data in GraphiQL under site>siteMetadata

1. In the GraphiQL explorer click all the data you wish to query
2. In the middle section copy the query.
3. We will use the index.js page as an example. Below your component type the following:

```
export const query = graphql`
  query queryName {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
```

4. Pass `{ data }` as a parameter into your component.
   1. information will now be available as data.site.siteMetadata

## Additional Notes

A big thank you to [Undraw](https://undraw.co/) for providing the Programmer.svg. Thank you again to NetNinja for their wonderful GatsbyJS tutorial.
