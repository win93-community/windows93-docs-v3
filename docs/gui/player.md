
# player

The player component is a media player for audio and video files.

## Usage

Modular:
```js
import { player } from "/42/ui/media/player.js"

const myPlayer = player({
  src: "/music/song.mp3",
})
```

Plan:
```js
{
  tag: "ui-player",
  src: "/music/song.mp3",
}
```

The player extends `basicPlayer` and adds support for additional codecs including chiptune formats, etc. It automatically detects the appropriate codec for the file type.

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `src` | String | URL or path to the media file |

## Events

- `ui:player.play`
- `ui:player.pause`
- `ui:player.ended`

:::tip
For a simpler player without codec detection, use [basicPlayer](basic-player).
:::
