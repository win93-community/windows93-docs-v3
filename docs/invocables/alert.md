# alert

[View Source](https://github.com/zo/sys42/blob/main/src/42/ui/invocables/alert.js)
alert is an invocable that creates an alert. There are three possible argument combinations you can use to create one.

## Usage
```js
import alert from "42/ui/invocables/alert.js"
const result = await alert(message, options)
```

## Arguments (Route 1)
First argument is a string, and second argument is an object
### message
String. Message to be displayed in alert. Default is "".

## Arguments (Route 2)
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
Alias for label
## Returns

## Arguments (Route 3)
First argument is an object (not error-like)
### options
Object
#### message
string with message