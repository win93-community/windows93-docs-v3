
# HTTP

The HTTP module provides a fetch-based client for making network requests. It simplifies the usage of the native `fetch()` API and adds additional options.

## Usage

```js
import { http } from "/42/api/http.js"
```

## GET request

```js
const data = await http("https://api.example.com/data")
```

## POST JSON

```js
import { POST_JSON_CONFIG } from "/42/api/http.js"

await http("https://api.example.com/submit", {
  ...POST_JSON_CONFIG,
  body: JSON.stringify({ key: "value" }),
})
```

## Options

The `http` function extends the native `RequestInit` with additional options:

| Property | Type | Description |
|----------|------|-------------|
| `encodePath` | Boolean | Whether to encode the URL path |
| `fresh` | Boolean | Bypass cache |
| `ignoreFileSystem` | Boolean | Skip filesystem fallback |

## Errors

Network errors throw an `HTTPError` with the response status and message.

```js
import { http, HTTPError } from "/42/api/http.js"

try {
  await http("/missing-page")
} catch (e) {
  if (e instanceof HTTPError) {
    console.log(e.status) // 404
  }
}
```
