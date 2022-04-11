import type { MetaFunction, LinksFunction } from "@remix-run/node"

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import styles from "./index.css"
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    // { rel: "stylesheet", href: lococss },

    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ]
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Augustine Ogiza",
  viewport: "width=device-width,initial-scale=1",
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
