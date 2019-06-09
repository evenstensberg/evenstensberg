# 0CJS is not what you might think it is

Our goal is to make libraries easier to use, but 0CJS is not about running one magic command to fix every issue a potential user of your library has, it is much more than that.

- [0CJS tools and how you as an author could improve your 0CJS story](https://drive.google.com/open?id=18Aaf2XDqYaqlIXu1Uor-9ej-o8PQdpSd)

There are many aspects of succeeding in creating a well written CLI tool, I’m not going to go through all of those aspects, just three; ***Baselines, Abstractions and Zero Configuration***.

## Baselines

When describing baseline, what I mean is that your tool should have a good foundation to succeed. This is the goal of your tool, how you approach the problem and how you choose to implement it. For instance, what makes sense to hide from the user, and what is useful? This could be something as primitive as hiding status text, or outputting information about what your tool is doing while the user awaits for compilation to finish.

The more time you think about how the tool behaves, the less time you have to spend on fixing bugs and refactoring your code, because you are thinking about the user and what they might struggle with.

A technique to help you, not bound to Agile Development, Test Driven Development or any other fancy term, are design schemes. With [webpack-cli](https://github.com/webpack/webpack-cli), we decided to use [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development), but we did also decide to write design documents to save us work in the future. We knew how the architecture would look like before hand, implementation and abstractions became easier.

If you think about what your tool might look like in a couple of months, you saved yourself some months answering issues with your project. **Have a clear goal in mind**.

An example of how architecture can play a huge role in the long term, I’d like to use [Polymer-CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli) as an example. [Polymer](https://www.polymer-project.org/) is entirely class based and runs commands with a runner. The source code is slim, intuitive and it is friendly for new users with its commands; *init, analyze and serve*.

### [Polymer-CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli#overview)

![](https://cdn-images-1.medium.com/max/2300/1*7yDsj05N7BvCiqRm4PI58w.png)

## Abstractions

Abstractions are leveraged in a variety of. You’re probably using one right now. Abstractions are key design pattern in CLI tools. Abstractions are superb, as they hide complexity from the user. You abstract modules, the tool itself or any other type of system, such as Google Chrome doesn’t require you to know how [v8](https://v8docs.nodesource.com/) works.

As a library author, one essential thing all users want to do, is to customize. The solution you’re providing isn’t always optimal for their use case, and they want to customize your tool to fit into their integrations. This is where ecosystems comes in hand. Ecosystems could be denoted as another level of abstraction, except it is based on the tool itself. One example of this is [yeoman](http://yeoman.io/).

As a library author, you could create scaffolding instances of your tool where yeoman abstracts the details from you. Yeoman takes care of prompting users for questions and preparing folder structure. The only thing yeoman should be concerned about, is using those inputs with your framework or library.

Ecosystems serve as a way to abstract complexity, either by asking human-friendly questions, or by abstracting your core logic into a more convenient API. That’s a good thing. [Babel](https://babeljs.io/) has succeeded in this by allowing people to write plugins for their tool. [NPM](https://www.npmjs.com/) has succeeded in this by allowing everyone to use a library with a single install command.

*There are nuances of how ecosystems function, but they have one thing in common, they hide complexity*.

## 0Configuration.js

When you as a library author have the responsibility of promoting good practice, you should be aware of the defaults you are setting. Imagine millions of people using your tool. Take [React](https://reactjs.org/) or [Vue](https://vuejs.org/) as two examples. If React doesn’t set good defaults to users, then no user would. As the library author, follow advice from advocates, Microsoft or Google.

It’s important to underline the importance of promoting good practices and not anti-patterns, because when you as an author dont know how to set good defaults, why should the user?

One tip I learnt from being involved with webpack-cli is that you don’t necessarily have to be in line with what everyone says, as long as you’re setting a default. For instance, if you have a configuration based project, which needs an entry point of a users’ application (*webpack*), why can’t you set the entry point to *src/index.js* instead by default? Users will follow that pattern eventually. By setting conventions and listening to advocates, you’re already well off.

![Google Developers is a good resource when educating new users](https://cdn-images-1.medium.com/max/5594/1*jzd9maut-AmfB6hErLsPiQ.png)

**Google Developers is a good resource when educating new users**

Another point worth mentioning is to scale complexity. The initial user might need a lot of help getting started, so asking users to fill out long lines of code to get the application booted up and ready might not be ideal. Instead, scale up complexity. The more users use your tool, the more creative you could be with options and allowing users to set those. Performance isn’t always one sided, users have different ways of rendering their application. Rather than fine-tuning that in the start, let users gradually do so.

![](https://cdn-images-1.medium.com/max/2688/1*xIvMSin7cegkKN6hflSLQA.png)

As you might have got a hint of, is that 0CJS isn’t only about letting the user run your app straight away, it’s about educating them. 0CJS shouldn’t be an excuse not to know the tool, but rather a way to use the tool without knowing how it works early in the project.

Educating the developer is important, because if we do so, they know how to fix potential memory leaks, bugs or issues they might have. For instance, imagine a user using the [webpack-offline-plugin](https://github.com/NekR/offline-plugin) without knowing what it is. Without knowing [service-workers](https://developers.google.com/web/fundamentals/primers/service-workers/), users can use them. This is all about hiding the complexity from the user, so that he or she doesn’t have to implement a whole service-worker.

However, we do want to educate people on service-workers, why they are important and how they work. If the user then have an issue, they don’t have to refer themselves to [Stack Overflow](https://stackoverflow.com/search?q=you+really+did+click+this+link+didn%27t+you) all the time, they might have the background information and knowledge of how a service worker functions to know what the issue is.

Finally, I want to wrap this up by mentioning [Create React App](https://github.com/facebook/create-react-app) and how it makes such a great tool. Create React App sets defaults, it has user guides longer than an academic paper and allows people to dive into React without knowing any build step. That is where we want to be, when people don’t have to know tools before actually using the library. In the end the user might need to know about the tool, but it isn’t initially important.

![](https://cdn-images-1.medium.com/max/3828/1*xjbrhPhAy0mNk5TTHiNoHg.png)

This is what scaling complexity looks like in practice. By allowing people to eject, they allow people to work with complexity, but by default, the user doesn’t know anything about the underlying logic. CRA also educates the user, which makes it easier to onboard new people into the front end realm.
