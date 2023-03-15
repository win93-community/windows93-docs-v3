# alert

[View Source](https://github.com/windows93dotnet/sys42/blob/main/src/42/ui/invocables/alert.js)  
alert is an invocable that creates an alert. There are three approaches you can use to create one.

## Usage
```ts
import alert from "42/ui/invocables/alert.js"
const approach1: boolean = await alert(string, object)
const approach2: boolean = await alert(object)
const approach3: boolean = await alert(object)
```

## Approach 1
First argument is a string, and second argument is an object
### message
String. Message to be displayed in alert. Default is "".

## Approach 2
First argument is errorlike
### message
Error-like.
### options
Object, with following properties (not all are required):
#### icon
String. ID of the icon to be displayed. Default is "error"
#### label
String. Label to be displayed in alert. Default is "Alert"
#### name
Alias for [label](#label)
#### content
con
#### message
Alias for [content](#content)

## Approach 3
First argument is an object (not error-like)
### options
Object
#### message
string with message

## Returns
true