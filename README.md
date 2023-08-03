# Code Splitting Examples in React

### Check branches to see the code

-   [Code Splitting](https://github.com/ewa1do/code-splitting/tree/code-splitting)
-   [Code Splitting With HOC](https://github.com/ewa1do/code-splitting/tree/HOC-code-splitting)
-   [Lazy Load](https://github.com/ewa1do/code-splitting/tree/lazy-loading)

> How to deliver JavaScript Files in the most efficient way possible?

**Time to first meaningful paint**:
Something that's shown to the screen right away for the user

**Time to interactive**:
User to be able to interact with our website as soon as possible

You wanna sent out a minimaly functional page compose just of html, javascript and css needed for the current route. As more resources arrive the page can lazy-load or unlock more features.

> Red JS file == Vendor file (ex. React)

**Tip:** This vendor files have a _production build_ that's more faster than the development build (minified, removed development tools)
