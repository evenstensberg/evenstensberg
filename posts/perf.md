# Are manual Performance Optimizations sufficient enough?

Are manual Performance Optimizations sufficient enough?

For the last year, I’ve focused on tooling in order for front-end developers to keep their focus on building rich user experiences that isn’t abounded by lack of toolchain knowledge. I began developing [mink](https://github.com/ev1stensberg/mink), a string template -based scaffolding tool for universal react applications with [webpack](https://webpack.js.org/). A lack of tooling to give beginners an advantage over a sea of information and anti-patterns inspired me to bring up the [discussion](https://github.com/webpack/webpack/issues/3466) of an extensive, yet simple CLI tool for both scaffolding and running a rather complicated bundler, webpack.

The problem about initial user confusion and hardship isn’t singular to webpack. Most of the choices a developer makes during an average work day is, by my experience proportional to; **Integration & re-iteration**.

These two categories are pretty simple to understand, yet they are very hard to keep separate. As a “*Junior Developer*”, I’ve often found myself re-writing code based on feedback a lot, which basically is defined as re-iteration. In fact, I used 2–3 months on the [webpack-cli](https://github.com/webpack/webpack-cli) to figure out how to write a scaffolding tool that is efficient and extensive.

### Performance is just that.

This is a bold statement, but *nobody* cares about performance in the integration phase, especially not beginners. You’ll have to iterate a couple of times, maybe even finish your application before you start being selective about how the user interacts with your app with respect to performance. This has implications, because *nobody* finishes their app, unless there are a lot of people working on it.

Google has done an incredible job promoting good practises for the web, which makes it easier to approach performance in a constructive way. [Lighthouse](https://developers.google.com/web/tools/lighthouse/) is in my eyes, one of the most valuable repositories today as it gives developers an insight about how well their application is doing and suggestions to fix performance issues or relative. As a toolsmith, I wish that we could one step further, by not only suggesting, but rather **implementing** those suggestions,** **so that a developer doesn’t have to** **spend time on** re-iteration** too much.
> It makes more sense to use time implementing core functionality and let toolchains fix human-errors.

## Data-based tooling

*In tooling, I’m excited about automation of work that could ease not only for beginners, but also established developer’s tasks. We’ve got CI’s, code formatters, CLI tools for scaffolding and performance hints, but no tool yet for predictive data loading or automatic fixes to source code based on data and performance hints.*

Data-based tools are important, because the data already gives us an indication of how well your application is doing either by how big your source code is, when you decide to load the code, your first meaningful paint or when your application is interactive.

There’s several tools that already gives us these metrics, such as lighthouse audits, monitoring network requests and service worker activity in chrome and the output of module bundlers on compilation.

### How it is realistically possible

After getting data from [chrome protocol](https://chromedevtools.github.io/devtools-protocol/), module bundlers, [react-tracking](https://github.com/NYTimes/react-tracking/issues/41) or lighthouse, one’s got a lot of information to use with machine learning. The optimization itself could potentially be done on runtime with [worker-threads or clusters](https://nodejs.org/api/cluster.html), along with editing the source code with AST’s.

For automatically improving applications based on lighthouse audits, one doesn’t necessarily need machine learning optimizations, some changes could be done just with the use of AST’s.
