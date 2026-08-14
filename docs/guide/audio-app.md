
# Developing an audio app

:::tip
Consider reading the [app guide](/docs/guide/making-app) before this section.
:::

Audio apps must be module-based.
Audio apps may have additional properties in their manifest:

| Property              | Type    | Description                                                                 |
|-----------------------|---------|-----------------------------------------------------------------------------|
| **hasAudioInput**     | boolean | **REQUIRED FOR ALL AUDIO EFFECT APPS** - registers app as an audio effect app             |
| **hideBypassButton**  | boolean | Whether to hide the bypass button on the top left corner of the window      |
| **hideAudioIOButton** | boolean | Whether to hide the Audio IO settings button in the top right of the window |

## Extended app object
Audio apps extend the app object with the following properties:
| Property | Type | Description |
|----------|------|-------------|
| **mixer** | AudioMixer | unknown |
| **context** | unknown | unknown |
| **audioPipe** | unknown | unknown |
| **initPipe** | unknown | Should not be used, this is done automatically. |
