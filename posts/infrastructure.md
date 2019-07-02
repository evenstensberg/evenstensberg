# Using less time in tools

I have been in a few companies since starting in the industry as a developer and I want to share some insight in how in general these companies and maybe you as an individual could do better and why you should care.

## Introduction

I am from a frontend background with a sweet little mix of low-level from school, even though I have touched and heavily worked with all aspects of a typical stack. In general, everything from startups developing their product to large scale companies serving millions of users.

A common trait I have seen is that tooling or infrastructure is not neccecarily a priority, altough it should have been in the first place. Let me walk you through a scenario that made this a problem.

## Problem

For a startup, it is probably the easiest to see the timeline because the reason for being late to the party is really a clear path forth. For frontend projects, mostly a flavor of [Create React App](https://github.com/facebook/create-react-app) is used, where some firms tend to make a fork of that to support their own variety. 

Let me say this already, if you are a startup, please do not maintain a fork of a tool unless there is a special reason to. You are gonna use too much time maintaining a fork, end up being drowned in syncing against an upstream and potentially lock yourself in towards a special node version because one of your dependencies only support a legcy version of node. Do not do that. 

Anyways, so here we are, developing an app in Create React and forget about the burden to come later. You start using this boilerplate more and more, maybe even create a few applications based on this. 

One year later, you are pushing to production. What could go wrong? For large scale companies, you more or less do the same thing, except you might have a bash script to set everything up for you.

## Why

Yea why though? Why use time maintaing a fork, avoiding to create a tool to help you bootstrap a boilerplate with fresh deps, knowing that you will be stopped later?Answer is that I do not know, but it has a lot to do with the time people want to use with a tool because they just want to develop a front-end app, cash out and be happy. I respect that, but also I do not. Why? Tools should be respected, not because they are the building blocks that you create your applications from, but rather that they will more or less likely be the foundation you build from next time you create an application. 

From the example with Create React App, not creating a custom generator with, say,for instance, [yeoman](https://yeoman.io/) means that you will have to sync somewhere anyway. Instead, invest some time in creating a generator, which will get the latest code, add some readmes to it with your own specialized writing and maybe even add your own linting rules. It will save you a lot of time, and it will reduce the amount of work you will be doing with a tool in general.

Doing so will really help the health of your infrastructure in general, as mentioned, reduce time to maintain and it will avoid you having to be concerned about the cascade of not upgrading dependencies(security, depreciation, bugfixes).

## On Reusabilty

Reusing existing tools out there is a thing that is not yet very adopted for some sort of reason. Reusing code is good and it reduces the amount of waste you will produce, much like recycling. For companies, reusing a tool that does exactly what you want to create is nice, because it will allow you to not maintain it or have to maintain a lesser slice of the whole code. For instance, big corps have spent time creating tools that visualize data for you, generate component pieces or even linting rules that makes sense, no need to reinvent the wheel.


## On Specialization

For tools, I highly recommend that you spend a minute or two learning a tool, because it is really important in the performance aspect and shipping less code. It will help you to create applications that could scale, for instance across different stacks. This could for instance be that you understand webpack to know what it does, in such way that you can eject your Create React App and support web-components, or multiple stacks. That knowledge will be put into good use long term.

## Summary

Try to build upon existing tools to create code that is scalable, thereby reducing maintenance cost for keeping those tools alive. Use other tools and try to reduce amount of boilerplate code you create that is outdated or is not functioning in such way that you can specialize it against your application in the future for production.