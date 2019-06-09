# Building Front End Applications with Deno

This is a nodeJS logo

*I recently stumbled into [Deno](https://deno.land/), which is a typescript runtime for something something blockchain ai.*

**Thing is**, Deno is great, because it doesn’t leave a node_modules folder in your application, so you’ll have a better time maintaining stuff. It’s still flaky at some points, and there’s some aspects of it which isn’t quite done.

The current trend in web right now is also directed towards having less dependencies visible in your root folder and storing complexity or dependencies somewhere. This is great, and developers will have a better time maintaining stuff.

I started with experimenting with having a simple TCP server that would get a response and I’d answer with static web page. Simple enough.

Deno is great as an isolated server instance, but porting existing dependencies might take a while and people aren’t quite sold on the good parts Deno provides. Anyways, so I was hacking away and there was some complications, not big, but still makes your head banging a bit.

Deno doesn’t support CJS format in imports, as this is a Rust isolated instance with the V8 sandbox made by Google, sprinkled with TypeScript on top, it’s hard to import already present front end solutions such as React and Preact into your Deno app.

Now why would I use React and these deps in Deno? My primary goal was to emit zero bundles to anything on disk and serve everything on the go, like you want your coffee. Secondly, Deno provides TypeScript out of the box, so creating a new React application would simply be done by having a

$ deno ./index.js and you would have access to both JavaScript & TypeScript. Best of two worlds.

Lastly, I’m procrastinating.

To start this project, I went ahead and imported Preact from unpkg ( a CDN provider), it turns out, as I’ve briefly explained here, that Deno doesn’t like CJS files, so I tried to find a MJS CDN for Preact (MJS and Deno works great by the way, let’s use MJS in NodeJS, don’t @me). I found the CDN, and it was all honey and ice until I wanted to render actual React/Preact components with Deno.

I thought: Hmm, I’m hungry, so I ate. After that I went ahead and started working on a solution to build front-end applications with Deno using JS and without having to rewrite any modules. Deno is a runtime, so it’s hard. However, we can do dynamic import injection (read a file, parse it and import the actual module). We’re gonna do this because regular JS modules doesn’t suffice, we need to transform CJS modules that are used in front-end to ES6 modules.

Thing is, we already got a tool that does the trick for us, webpack. However, webpack is written in CJS so we need to convert that into ES6 first. After that is done, one could run webpack in memory, which in turn compiles files in memory, which in turn will not output any files locally, but emit them in memory. Then, you will be able to serve un-allocated files in your local TCP server without actually emitting anything to disk. Neat, right?

You will also be able to develop without setting up transpilation because of the nature of Deno.

I’ve started some work on this, which you can find here:

- [**deno-webpack**](https://github.com/evenstensberg/deno-webpack)
- [**require-to-deno**](https://github.com/evenstensberg/require-to-deno)
- [**Polyfilling `require`**](https://github.com/denoland/deno/issues/2091)
