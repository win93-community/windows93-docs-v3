import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  guide: [
    "guide/basics",
    {
      type: "category",
      label: "Making an App",
      link: {type: "doc", id: "guide/making-app"},
      items: ["guide/manifest"]
    },
    "guide/document-vs-module",
    "guide/plan",
    "guide/events",
    "guide/audio-app",
    "guide/desktop-selfexec",
    "guide/faq",
    "tb",
  ],
  components: [
    {
      type: "category",
      label: "Component Library",
      link: { type: "doc", id: "gui/index"},
      items: [
        "gui/dialog",
        "gui/explorer",
        "gui/picto",
        "gui/folder",
        "gui/toast",
        "gui/menu",
        "gui/tabs",
        "gui/notif",
        "gui/combobox",
        "gui/knob",
        "gui/volume",
        "gui/code",
        "gui/terminal",
        "gui/player",
        "gui/basic-player",
        "gui/scope",
        "gui/model",
        "gui/shader",
        "gui/colorpicker",
        "gui/command-palette",
        "gui/gamepad",
        "gui/icon",
        "gui/listbox",
        "gui/matrix",
        "gui/pathpicker",
        "gui/reply",
        "gui/workbench",
        "internals/gui/dock",
        "internals/gui/workspaces"
      ],
    },
    {
      type: "category",
      label: "Component API",
      items: ["api/gui/component", "api/gui/render", "api/gui/control"],
    },
  ],
  api: [
    "api/fs",
    "api/http",
    "api/app",
    "api/configfile",
    "api/clipboard",
    "api/actions",
    "api/persist",
    {
      type: "category",
      label: "GUI",
      items: ["api/gui/component", "api/gui/render", "api/gui/control"],
    },
  ],
  internals: [
    "internals/boot",
    "internals/indexeddb",
    "internals/exec",
    "internals/explorer",
    {
      type: "category",
      label: "Managers",
      link: { type: "doc", id: "internals/managers/index" },
      items: [
        "internals/managers/appsManager",
        "internals/managers/iconsManager",
        "internals/managers/themesManager",
        "internals/managers/mimetypesManager",
        "internals/managers/trashManager",
        "internals/managers/usersManager",
      ],
    },
    {
      type: "category",
      "label": "System Component Library",
      items: [
        "internals/gui/dock",
        "internals/gui/workspaces"
      ]
    }
  ],
};

export default sidebars;
