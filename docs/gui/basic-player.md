
# basicPlayer

The basicPlayer is a minimal audio/video player component.

## Usage

Modular:
```js
import { basicPlayer } from "/42/ui/media/basicPlayer.js"

const myPlayer = basicPlayer({
  src: "/music/song.mp3",
})
```

Plan:
```js
{
  tag: "ui-basic-player",
  src: "/music/song.mp3",
}
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `src` | String | URL or path to the media file |

Provides play/pause controls, a progress seek bar, and time display. For advanced codec support, use [player](player) instead.
