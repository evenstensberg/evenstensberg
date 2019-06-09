# First Meaningful Paint: When page content finally shows up to the party

Painting is a nice way to get ideas to life

**First meaningful paint or more often referred to FMP is a key metric in web performance. It’s important because it tells us more about how the general user perceives your website. In 2014 the average website sent 75 requests, so let’s focus on one thing and see what we can do there.**

### Asynchronous Loading & non-blocking rendering

Asynchronous Loading and non-blocking rendering is all about loading files on-demand. This means that your first priority is always to make the website look interactable, followed up with functionality efforts. Most of modern websites today are using some sort of build tool, either if it is gulp, parcel or webpack. The good thing about these tools is that they often provide these mechanisms out of the box for you.

Async loading is a way to omit loading a module or a JavaScript file until it is really needed. [Have a look at the webpack documentation as an example of how this is achieveable.](https://webpack.js.org/guides/lazy-loading/) As Google developers has a nice tutorial about just this theme.

I’ll give you two other resources to check out:

- [**Critical Rendering Path | Web Fundamentals**](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)

- [**Understanding the Critical Rendering Path**](https://bitsofco.de/understanding-the-critical-rendering-path/)

## **Lighthouse**

Lighthouse is a tool designed to analyze your webpage and its metrics. It will give you some indications of what you did right and what you did wrong so you could have a chance to improve your websites’ performance and loading time. You should check it out.
[**Lighthouse | Tools for Web Developers | Google Developers**](https://developers.google.com/web/tools/lighthouse/)

## Conclusion

Performance is important but hard to master. Use lighthouse to monitor your page and try to find out where your application bottleneck is. WebpageTest is also a tool you could use to audit your application.
