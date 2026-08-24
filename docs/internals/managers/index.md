
# Managers

The managers are singleton services that extend [ConfigFile](../../api/configfile). Each one owns a persistent config file and is exposed on the `os` API (from 42/api/os.js).

| Manager | Config file | `os` alias | Purpose |
| --- | --- | --- | --- |
| [Apps Manager](./appsManager) | `~/config/apps.json5` | `os.apps` | Installed apps, manifests, launching |
| [Mime Types Manager](./mimetypesManager) | `~/config/mimetypes.json5` | `os.mimetypes` | File type associations |
| [Icons Manager](./iconsManager) | `~/config/icons.json5` | `os.icons` | File, folder and app icons |
| [Themes Manager](./themesManager) | `~/config/themes.json5` | `os.themes` | Current theme and appearance |
| [Trash Manager](./trashManager) | `~/config/trash.json5` | `os.trash` | Trash and restore |
| [Users Manager](./usersManager) | `/users.json5` | `os.users` | User accounts and sessions |
