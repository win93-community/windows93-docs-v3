# toast

[View code source](https://github.com/windows93dotnet/sys42/blob/main/src/42/ui/components/toast.js)  

## Usage
> import {toast} from "42/ui/components/toasts.js"  
> const toast = sys42.toast

The toast component is used to display temporary notifications or messages to the user.

## Method parameters

| Parameter | Type          | Required                  | Default | Description                                  |
|-----------|---------------|---------------------------|---------|----------------------------------------------|
| `message` | String/object | Not if options is present |         | Short dialog message                         |
| `options` | Object        | Not if message is present |         | Contains all toast configuration properties. |

### Options

| Property             | Type                                                     | Required | Default                           | Description                             |
|----------------------|----------------------------------------------------------|----------|-----------------------------------|-----------------------------------------|
| `message`            | String                                                   | Yes      |                                   | The message to display in the toast.    |
| `picto`              | Picto                                                    | No       |                                   | [A picto element](components/picto.md). |
| `contained`          | Boolean                                                  | No       |                                   |                                         |
| `icon`               | String                                                   | No       |                                   | Icon path.                              |
| `label`              | String                                                   | No       |                                   |                                         |
| `footer`             | String                                                   | No       |                                   |                                         |
| `beforeContent`      | String                                                   | No       |                                   |                                         |
| `closeable`          | Boolean                                                  | No       |                                   |                                         |
| `afterContent`       | String                                                   | No       |                                   |                                         |
| `closeOnContextMenu` | Boolean                                                  | No       |                                   |                                         |
| `animateFrom`        | Object: {translate: String(percentage), opacity: Number} | No       | { translate: "100%", opacity: 0 } |                                         |
| `timeout`            | Integer                                                  | No       | 500                               |                                         |
| `animateTo`          | Object: {translate: String(percentage), opacity: Number} | No       |                                  |                                         |
| `container`          | HTMLElement                                              | No       | document.documentElement          |                                         |

## Examples

### Basic Toast
```js
const options = {
  message: "Hello, World!",
  timeout: 3000
};
toast(options);
```

### Toast with Icon and Picto
```js
const options = {
  message: "File uploaded successfully!",
  icon: "/path/to/icon.png",
  picto: "checkmark"
};
toast(options);
```

### Toast with Custom Animation
```js
const options = {
  message: "Loading...",
  animateFrom: { translate: "-50%", opacity: 0 },
  animateTo: { translate: "0%", opacity: 1 },
  timeout: 1000
};
toast(options);
```

