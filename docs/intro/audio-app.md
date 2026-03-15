# Developing an audio app

>[!TIP] Consider reading the [app guide](intro/making-app.md) before this section.

Audio apps must be module-based.  
Audio apps may have additional properties in their manifest:

| Property              | Type    | Description                                                                 |
|-----------------------|---------|-----------------------------------------------------------------------------|
| **hasAudioInput**     | boolean | **REQUIRED FOR ALL AUDIO EFFECT APPS** - registers app as an audio effect app             |
| **hideBypassButton**  | boolean | Whether to hide the bypass button on the top left corner of the window      |
| **hideAudioIOButton** | boolean | Whether to hide the Audio IO settings button in the top right of the window |

Audio apps will also return a new property within the `app` parameter, `audioPipe`.

## Notes
This is all that exists for audio apps in this documentation. I understand none of the code used by effects, etc.