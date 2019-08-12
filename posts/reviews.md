# A Guide to Good Pull Request Reviews

**When working with source code, either if it is Open Source, Closed Source or as a collaborative effort, one thing is inevitable; PRs.**

***Pull Requests are the final stage of getting your code ready for a production build, staging or to any sort of project where other people will rely on the code you write. It is important that it lives up to the expectations of the codebase. In this post, I will try to summarize some things I have learnt through Open Source and working together in teams for companies and in Open Source.***

---

![A review in progress](https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FCwHJbObHKYgXqfmkDTeXyQ%252FDSCF6366.jpg&width=800&quality=80)


## Submitting Unfinished Code, Drafting and PR Discussions

I really like how the [Lighthouse](https://developers.google.com/web/tools/lighthouse/) team at Google handles their Open Source projects, and it is no lie that I have been inspired by how they govern their projects. They are good at what they do and they have experience. For instance, instead of bringing up long discussions of an issue through the issue tracker, a collaborator sometimes submit a draft PR with a rough sketch of how things would work, and then they have that discussion at a code-review level instead.

Some might argue that this is bad, although in my opinion, it is easier to understand the practical case if you have some code to refer to. Submitting unfinished code is not a bad thing, not following up on your work is. What that means, is that if you submit a draft Pull Request, it is easier for people to follow your thought process and intention as why they should implement a potential feature or bugfix. 

Code is a common thing for all developers, and people can make their own conclusions based on that. By the way, GitHub now has a nice [drafting](https://github.blog/2019-02-14-introducing-draft-pull-requests/) feature that I really like, which makes it easier for maintainers and for developers in general to have these kinds of discussions. The only downside I can come up with submitting a draft Pull Requests (as a way to discuss a potential fix or implementation), is that time is lost if not accepted. Now, why would you care and why would you need to do this? 

## What Your Team Wants x What Your Team Needs

Working in teams consists of some sort of splitting of roles, traditionally you got some sort of leader, either if it is a tech lead, product manager or senior developer, it is important that you have someone to guide and provide balance to a team of engineers (and or designers). I will use these terms interchangeably. This individual should be able to be a bridge between the product and technical needs of a project. That is sometimes is hard to balance. 

To do this, for instance, a [Product Manager](https://en.wikipedia.org/wiki/Product_manager) should be able to understand what the product needs, by talking to the right people, and by being a good messenger to the developers (and or engineers, designers) implementing. This is like Yin and Yang: If the Product Manager fails at one side, the other will suffer. You can be good at figuring out what your product needs, but bad at messaging that to the developers, which then would have downsides. It is important to balance the equation in such way that both the product will hit the right target, as well as that it is delivered by the engineers and designers. This is usually why large scale companies split a Product Manager Role between a more product sided role and a techncial one (and maybe you should do too).

Let me go through some Point of Views from different roles under a PM, for us to better understand why communicating in Pull Request Reviews are important:

## Designer

As a designer I need to know a lot about a product in order to implement it, it is important for me to understand what the need of the product is, what a user is struggling with and what features we need. This way, I can more precisely put together a design and solution to a problem space. I need some users feedback in order to know **why** the design I have sketched out is bad, in order to know **how** to fix those. 

## Engineer

As an engineer, I need to know the requirements of the product, a use case or an elaborative description of the problem, in such way that I know how to implement it. I do not need designs for this initially, but I will need them in order to convey a understanding of the technical requirements if there are no technical documents. I need to understand **why** we need this feature or fix in order to understand **how** to implement it. 


## What it means

As briefly shown, these two types of roles are dependent on a Product Manager delivering information to them, one being user feedback, the other being a technical requirement or document. A routined leader is therefore needed, in order for teams to stay on a positive trajectory. Both of the tasks mentioned, needs some sort of recipe, much like composing a dinner that consists of different components together. In order to cook the entire dish (your product), you need to do well in both making the main component (i.e meat) as well as the siders (salad).

This is where the Pull Requests come into play. As both designers, product managers and engineers ( designers should have GitHub too, we can fight about it online) needs to communicate, the last step of the train ride is usually the written code. It is easier to iterate on code, than it is to plan first and then write. You will remove a chain of dependency because most teams are agile in some way. 

**If you have a good CI, you have a test server your designer could give feedback based upon, which makes things nice.**

## Externalizing tools

As designers nowadays use Figma, developers use GitHub and Product Managers use Jira, you will loose some speed versus quality and deliverables. I would say that you need to be able to access the content quickly, either by having a dedicated README for where to find intel at your main documentation source, or have it pasted in red highlights at your doorstep for quick accessability. Clarity is the important part. If you live in three distinct worlds, loss of effectiveness as a result of communication being spread across tools is more likely than speaking two different languages. Write good issues, explain precisely and listen to feedback.

For Agile teams, in specific, I cannot say this enough: `"write good issue tickets".toUpperCase();` it will reduce your time to implement drastically because you do not need to browse through a lot of information to implement something or take a portion of the job of your Product Manager. 

In Code Reviews, technical talk wins, i.e "The button does not show when hovering" versus "I cannot press this button, is my internet not working?", as it vague and does not convey action or constructiveness towards a fix. 

Design talk (altough it is good to discuss in Pull Requests) are what issues are for. Higher level (non-technical) issues and a mix between abstractions, the correct way to implement and technical flavors are intended for Pull Requests.

If you do not have an agile team, you will usually have a QA tester that will make case studies to reproduce, screenshots and their versions in jira or at the Pull Request itself (a good behaviour to mimic). Note here that feedback comes in form of what works versus what is not working, not how it looks.

A final point, is that discussing and fixing constraints in PRs make the steps to production less cumbersome and the likeliness for finishing a feature is bigger, as the code is being continously validated and pushed towards either staging or production. Speed and Value.

## Techniques For Improving Reviews

Altough review quality might differ in terms of experience, there are a few tricks that makes the process easier. 

For starters, if you notice code conventions differ, it might be a good idea to point that out. If you notice a user bug, point that out. Anything that might affect the issue will help triaging. Be constructive, no need to be rude, HOWEVER be proffessional such that the review is taken seriously and that the author will follow up on actionable items. Constructiveness is important, because it is easy to come of as arrogant as a reviewer, and when tables turn, you are the one that will suffer from that (karma or something). **Constructiveness and indicating progress is important.**

Some Pull Requests are big, take those reviews in stages. Do not review all files at once, pick a few and if there are issues (with the code reviewed), comment those. This will make the process easier. Look at PRs like a fluent set of waves that work together to hit the shoreline. You are not alone, split the review across the organization and team, reviews are not a one man show.

These are important, but how do you know how to actually review? [I have](https://twitter.com/evenstensberg/status/1159195659439943680?s=20) some methods to determine which type of review to do.

## Simple Reviews and Small Source

If the code is small, and you know that the user experience is not affected, looking at the code is enough. The quality of the review usually is based on the experience of the reviewer, but keep in mind to comment on inconsistencies and ask for an explaination where needed.

## Intermediate Reviews and Architectural Changes

Once a Pull Request grows in size, the importance of making a good review increases proportionally. Have a look at the structure is it written. Is it following good practise? Is it concise with rest of the codebase? If not, indicate you want those aligned. For features, testing is important, but for a developer, this is above your paygrade. QA, PM, Product Owners or similar will test the usability of the software. If not, split this responsibility with someone else. The author should **not** review this him/herself because the ones that usually makes a change is blind to the bugs a merge might introduce. However, the author might know pitfalls, so ask for those edge cases. If there is some edge cases that might not be covered, optionally split those into issues so that you are aware of a potential issue (or fix it in review).

These intermediate reviews differ. For instance, if the source code is good, but the architectural structure is bad, you will need to maybe put up a figure, do a pair review to figure out a good solution to the complexity it introduces. If the architecture is good, code is bad, you will need to test the request locally and verify that the code compiles and behaves as usual.

## Intermediate Reviews and Large Source Changes

Big source code is hard to review, because it introduces more concepts for a developer to get. Even though knowing an entire source is not required, it is important to understand what **this** Pull Request would do. For those kinds of reviews, a one-on-one, asking the author to go through the source might be positive, or multiple reviews with multiple developers, that is up for you to decide.

## Advanced Reviews and Architectural Changes and Large Source Changes

I have encountered these kinds of Pull Requests and these normally comes from a refactor or a big feature being introduced. If it is a MVP and your team is agile, merging an unfinished PR to staging might be good, but if this is meant for production, make sure to be accurate in your reviews. This means that you need to figure out if the abstractions are good, if the source code is consistent and complies to your standards. Pick one of two things to focus on: Architecture or Source. Usually I begin with the abstractions, due the fact that it is easier to fix code standards rather than abstractions once the Proof of Concept or Intent to Implement (Permission to implement this feature is ok) is approved. 

## Verification and Roles within Teams

As mentioned, it is important to split tasks, because a Pull Request is a fluent process. Multiple people are involved to shape a product in the long term. Sometimes the source needs a massage, sometimes content needs verification from marketing and sometimes testers need to figure out if the code fixes the issue. All these tasks are why people have fancy titles. These tasks should be split across a longitiude of people, and if you do not have those roles, figure out something with your co-engineers.

If you have a Product Manager, this is your point of contact. The Product Manager is a Steve Jobs for Software, and a Product Manager not making sure the product is on-line is not good. Developers should code, Managers should manage, that is how it is. Developers have blindspots that managers pick up, so it is important to convay those facts during testing, such that the feedback loop is tight.

## Summary

In this post I have explained how I would consider a good Pull Request process to be like in teams and people working together. Make sure that your code is consistent, split responsibility, pick your type of review and iterate towards a fix.


**You can hit me up me on [twitter](https://twitter.com/evenstensberg) for questions or feedback on this post.**

Thanks for reading, hope it was worth your time!


***I attached a gif because life***

![A panda in progress](https://media.giphy.com/media/EPcvhM28ER9XW/giphy.gif)