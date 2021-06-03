## What are the limitations of Static Generation

Static generation can become cumbersome when:

- the build process begins to take a long time
- updates to content become more frequent
- recovery time from deploying bad content becomes a critical metric

Basically, when _waiting for builds_ becomes an issue for one reason or another, Static Generation becomes less attractive.

--- 

_Note: another major limitation is that Static Generation really only works for cases where you give all of your users the same content. IE, it does not work well for logged-in experiences, etc. But I'm ignoring this because if you are using Static Generation in the first place, then your use-case probably fits._
