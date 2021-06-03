## What is Static Generation (note missing Incremental)

> To understand ISR, it helps to understand the benefits of **Static Generation**.

Static generation is the rendering of a resource at some _build_ time rather than _run_ time.

Essentially moving what you might call **Server-Side Rendering** to a **pre-deploy** build step.

This has the benefit of hiding two major things from the user by moving the responsibility outside of the runtime:

1. Slow / expensive processes.
2. Bugs that would otherwise show-up in the wild at runtime.
