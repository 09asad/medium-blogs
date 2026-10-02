# Next.js — Client-Side vs Server-Side Rendering

## React vs Next.js

React is mainly a UI library, while Next.js is a React framework that provides features such as Server Components, Client Components, Server-Side Rendering (SSR), file-based routing, backend/API functionality, SEO support, and performance optimizations.

---

## React — Client-Side Rendering

In a typical React + Vite application, components run in the browser by default.

```text
Browser
   ↓
Downloads JavaScript
   ↓
React runs
   ↓
React generates the UI
```

The initial HTML can be very minimal:
Example:
        <div id="root"></div>
        <script src="app.js"></script>

React then executes JavaScript in the browser and generates the actual UI.

## Next.js — Server Components

In the Next.js App Router, components are Server Components by default.

    export default function Page() {
    return <h1>Hello World</h1>;
    }

Next.js can render this component on the server and send HTML containing the actual page content to the browser.

```text 
Browser
   ↓
Request
   ↓
Next.js Server
   ↓
React Component rendered
   ↓
HTML generated
   ↓
Browser
```
For example, the browser can receive:
    <h1>Hello World</h1>
    <p>This content is already present in the HTML.</p>


# When to Use "use client"

By default, Next.js components are Server Components.
If a component needs client-side interactivity, add: "use client" at the top of the file.

Example:
    "use client";

    export default function Button() {
        function handleClick() {
            console.log("Clicked!");
        }
        return (
            <button onClick={handleClick}>
            Click me
            </button>
        );
    }

## "use client" is generally required when using:
    onClick
    onChange
    useState
    useEffect
    useRef
    Browser APIs such as window or localStorage


Easy Rule
```text 
No client-side interaction
        ↓
Server Component
        ↓
No "use client"

Client-side interaction/state
        ↓
Client Component
        ↓
"use client"
```

Don't add "use client" to every component. Use it only when the component actually needs client-side functionality.

# How Next.js Helps with SEO

One important advantage of server rendering is that Next.js can send HTML that already contains the page's meaningful content.

    React + Vite

    The initial HTML can be:
    <div id="root"></div>
    <script src="app.js"></script>

    Then:
    ```text
    JavaScript
        ↓
    React
        ↓
    Actual page content
    Next.js
    ```

    Next.js can generate the HTML on the server:
    <h1>Best Programming Courses</h1>
    <p>Learn programming...</p>

    Then send it to the browser.
    ```text
    Next.js Server
        ↓
    HTML containing page content
        ↓
    Browser / Search Engine
    ```

This can make it easier for search-engine crawlers to discover and understand important page content from the initial HTML.

## React applications can also be indexed by modern search engines because they can execute JavaScript. SEO is not dependent only on server rendering; metadata, content quality, semantic HTML, performance, links, structured data, etc. also matter.

# Why Does Next.js HTML Contain More Information?

Next.js does not create a different type of HTML. Both React and Next.js ultimately produce normal HTML.

The main difference is when the UI content is generated.

React + Vite
```text
Initial HTML
      ↓
Minimal HTML
      ↓
JavaScript executes
      ↓
React generates UI
```

Next.js Server Rendering
```text
Next.js Server
      ↓
Renders React Component
      ↓
HTML contains page content
      ↓
Browser receives HTML
```

## Therefore: React can generate the UI in the browser, while Next.js can generate the HTML on the server before sending it to the browser. 