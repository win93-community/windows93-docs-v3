# Document vs module

The first thing you have to decide when starting your app is whether to base your app on HTML or JavaScript.  

You can always mix-and-match both in your app, but your program must have a *base*. This base will be your entry point.

> Before Windows 93 V3, developers argued over lack of effort in apps by describing them as iFrame apps, because they simply presented a frame of an already existant webpage.
> Now, document-based programs run in iFrames

## Document
Document, or the HTML entry point, is similar to building a website. Your document will run in an iFrame, but is able to communicate with the system using sys42.
A good example of this type of app is Trollbox. It is relatively self-contained, and would be able to run standalone without Windows 93.  

Rule of thumb: If your app can run standalone with little to no reliance on Windows 93 and/or the sys42 framework, it should be document-based.  
**Also important to consider:** Document apps spawn an entirely new HTML document through an iFrame, in its own natively isolated context.
This will use up significantly more memory and computational power. Globals in your program will not be available in any other program. [This shouldn't matter anyway since you shouldn't be setting globals](intro/faq?id=what-are-bad-practices-to-avoid).

## Module
Module uses a JavaScript file as an entry point. UI elements created will not go in iFrames.  
To create GUI elements, developers should use the `plan` system.  

Module requires a function of this signature:
```
export async function renderApp(app)
```
