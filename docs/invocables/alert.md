# alert

> [!CAUTION] [This is outdated, feel free to contribute to the docs and update this page. Otherwise it'll get updated in a few weeks.](https://github.com/win93-community/windows93-docs-v3)

[View code source](https://github.com/windows93dotnet/sys42/blob/main/src/42/ui/invocables/alert.js)  
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

| Property | Type   | Description                  | Default |
|----------|--------|------------------------------|---------|
| message  | String | Message to be displayed in alert | ""      |

## Approach 2
First argument is error-like

| Property | Type   | Description                  | Default |
|----------|--------|------------------------------|---------|
| message  | Error-like | Message to be displayed in alert |         |
| options  | Object | See below for properties     |         |

### Options
| Property | Type   | Description                  | Default |
|----------|--------|------------------------------|---------|
| icon     | String | ID of the icon to be displayed | "error" |
| label    | String | Label to be displayed in alert | "Alert" |
| name     | String | Alias for label              |         |
| content  | String | Content to be displayed      |         |
| message  | String | Alias for content            |         |

## Approach 3
First argument is an object (not error-like)

| Property | Type   | Description                  |
|----------|--------|------------------------------|
| message  | String | Message to be displayed in alert |

## Returns
true