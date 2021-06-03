## What is Incremental Static Regeneration (ISR)

**TL;DR:** It is some fancy words used by Vercel to market feature

But it is also a description of the following behavior:

1. User requests resource.
2. User is sent resource from cache.
3. The resource is re-generated and cache is updated for the next user (if sufficient time has passed between requests).
