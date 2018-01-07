---
title: On Node.js, Go and concurrency
route: on-node-go-concurrency
order: 1
layout: Post
description: Why would Ryan Dahl, creator of Node.js, say that Go is the best server-side system ever? Is this the end of Node.js?
---
Ryan Dahl, the creator of Node.js, said the following while he was talking about Node's concurrency model:

> [...] I think Node is not the best system to build a massive server web. I would use Go for that. And honestly, that’s the reason why I left Node. It was the realization that: oh, actually, this is not the best server-side system ever.

That was strong. Why Dahl, who worked so hard to build and advocate Node.js back then, would just give up his creation and promote something else? What does that mean to Node.js and its huge community? 

Let's first do a quick recap.

## Node.js history

Node.js was inspired on NGINX event-driven architecture non-blocking I/O. Basically it means that instead of relying on threads for concurrency (be it OS, green or coroutines), we have only one thread coordinating asynchronous work through an event loop.

Dahl then built Node.js to make it happen, mixing together other facilities like a simplified web server API, V8 and JavaScript, which is single-threaded. 

He believed **heavily** on this concurrency model. In his first talk presenting Node.js, he claimed that we've been doing I/O wrong. Dealing with multiple threads is misleading for developers and results in a higher consumption of CPU and memory because of context switching and the execution stack that each thread takes.

And given the undeniable success of Node.js, we could only assume he was right. What made him change his mind so dramastically, though?

## Go's concurrency model

Go is a language built for concurrency. It's based on CSP (communicating sequential processes), a pattern described in 1977 by Tony Hoare. 

Making a long story short, Go is multi-threaded and blocks I/O. Why isn't it slow? The trick is that it's all managed by Go's runtime: when you create a *goroutine*, you're not actually creating a thread (neither a coroutine). What Go does is combine independent coroutines onto a set of threads, so when a coroutine blocks, the runtime automatically moves other coroutines to a different, runnable thread. 

Another important part is that these goroutines communicate via *channels*, so instead of sharing memory across threads (which introduces awful locking problems), they pass references to data. This ensures that only one goroutine has access to the data at any given time.

> Do not communicate by sharing memory; instead, share memory by communicating.

And it's working, apparently. Go's growth has been stunning and it is today a solid choice for concurrent solutions. Of course there is some criticism about it–usually when compared to Erlang's actor model–, but its success is obvious. There are a lot[¹](https://www.iron.io/how-we-went-from-30-servers-to-2-go/)[²](https://medium.com/digg-data/the-way-of-the-gopher-6693db15ae1f) of success stories about people migrating from other languages to Go and they do make sense.

## Conclusion

So what will happen with Node.js, since there's a language out there with an arguably better concurrent model?

Well, **nothing**. Go may be better than Node regarding concurrency, but it doesn't make much difference if you're not building a massive web server. And even if you are, you can always scale out (for which there's a built-in module in Node's standard library). Still on concurrency, one of the most debated issues around Node's model has been solved: callback hell. Since version 7.6, Node supports async/await out of the box, which doesn't require callbacks and still doesn't block I/O.

But what I find most interesting in this whole story and what will keep Node alive and growing is that, maybe, Node didn't become popular just because of its revolutionary concurrency model. In fact, there were other libraries that did non-blocking I/O in other languages at the time, like Twisted for Python and Netty for Java.

What made Node one of the largest platforms for building web applications was precisely its community and ecosystem. The reasons are:

- First, the language: JavaScript was already heavily used in front-end web development. Being able to use it in the back-end meant that you could become a full-stack developer using only one language, which lowered the barrier for web development.
- Then, the concurrency model. But not only because of its performance; the key was that **everybody** started building libraries based on this new model, unlike the libraries I mentioned above, which were non-blocking I/O in a threaded land.
- Since the ecosystem is an important factor, having a well-designed package manager, NPM, surely helped as well.

And these things will never die ~~until the next hype~~ <span emoji='grinning-face'></span>

Thanks for reading!

## References and further reading

- [Ryan Dahl interview](https://www.mappingthejourney.com/single-post/2017/08/31/episode-8-interview-with-ryan-dahl-creator-of-nodejs/)
- [HN discussion](https://news.ycombinator.com/item?id=15140669)
- [Node's first presentation](https://www.youtube.com/watch?v=ztspvPYybIY)
- [Rob Pike's (Go) excellent talk Concurrency Is Not Parallelism](https://www.youtube.com/watch?v=cN_DpYBzKso)
- [Rob Pike's talk Go Concurrency Patterns](https://www.youtube.com/watch?v=f6kdp27TYZs)
- [Go's docs on concurrency](https://golang.org/doc/effective_go.html#concurrency)
- [Great critique of Go's concurrency model](https://gist.github.com/kachayev/21e7fe149bc5ae0bd878)