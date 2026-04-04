# Boot process

> `/bios/bios.js`, `/bios/boot.js`, `/bios/splash.js`

The boot sequence moves the system from the BIOS screen to the desktop. It handles first-run user setup, cache installation, and fatal errors.

## Entry point

The entry point for Windows93 is `/bios/bios.js`, which does **one of the following**:

1. Shows the users manager screen when the active user is `undefined`.
2. Routes directly to the desktop (loads `/desktop.js` only on reloads).
3. Starts the boot sequence through `/bios/boot.js`.

Before boot continues, the BIOS layer also preloads user config and timestamp metadata (for upgrades).

## Normal boot flow

`/bios/boot.js` performs the main startup work:

1. Verifies the cache tarball and compares the local cache revision with the revision embedded in the response headers.
2. If the cache is missing or outdated, it clears old caches and installs the new cache from `/42.tar.gz`.
3. It optionally starts the splash screen from `/bios/splash.js`.
4. It defers loading `/desktop.js` until the browser is idle.
    * `/desktop.js` is the main entry point for the desktop environment. If there's a boot-time failure, you can try loading `/desktop.html`, which skips the BIOS layer and goes directly to the desktop.

## Failure handling

Boot-time failures are trapped in `/bios/bios.js`. When an unrecoverable error occurs, the system prints a fatal error block to the boot log, shows a reset notice, then waits for a click or keypress. After an interaction, it clears all data and restarts the boot process.

If the browser cannot run the required module-based boot path, `/bios/fail.js` renders a minimal compatibility message.

## Related files

```text
/bios/bios.js
/bios/boot.js
/bios/splash.js
/bios/fail.js
/desktop.js
```

