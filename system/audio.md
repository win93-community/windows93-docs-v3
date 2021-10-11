---
description: Play various audio files
---

# $audio

Used to create an AudioObject from a path. This is a wrapper of [Howler.js](http://www.howlerjs.com).

## Subfunctions, etc. (AudioObject)

| Parameter     | Type        | Description                                |
| ------------- | ----------- | ------------------------------------------ |
| play          | Function    | Plays back the audio                       |
| \_duration    | Integer     | The duration of the audio                  |
| \_loop        | Boolean     | Whether to loop the audio                  |
| \_loaded      | Boolean     | Whether the audio has been fully loaded    |
| \_onend       | Function    | Called when the audio ends                 |
| \_onload      | Function    | Called when the audio finished loading     |
| \_onloaderror | Function    | Called when the audio has an error loading |
| \_onpause     | Function    | Called when the audio is paused            |
| \_src         | String      | The full url to the audio                  |
| \_volume      | Integer     | The volume of the audio                    |
| \_audioNode   | HTMLElement | The audio element                          |
| pause         | Function    | Pauses the audio                           |
| \_autoplay    | Boolean     | Whether the audio automatically plays      |
