# $extend

## About
Extend essentially creates an object based on a number of objects.  

The amount of arguments you can provide are infinite, and are from least specific to most specific (if they override each other, the last argument with the overridden property would override the property for the object to the one it has).

## Example
```js
$extend(
    {
        hello: "hi",
        infinite: "overridden"
    },
    {thing: "well"},
    {extend: "whoa!"},
    {infinite: "arguments"}
)
//would result in
{
    hello: "hi",
    thing: "well",
    extend: "whoa!",
    infinite: "arguments"
}
```