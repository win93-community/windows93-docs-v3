import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guide: [
    'guide/basics',
    'guide/making-app',
    'guide/document-vs-module',
    'guide/plan',
    'guide/events',
    'guide/faq',
    'tb',
    'guide/audio-app',
  ],
  components: [
    'gui/index',
    {
      type: 'link',
      label: 'API',
      href: '/docs/api/gui/component',
    },
    'gui/dialog',
    'gui/explorer',
    'gui/picto',
    'gui/folder',
    'gui/toast',
    'gui/menu',
    'gui/tabs',
    'gui/notif',
    'gui/combobox',
    'gui/knob',
    'gui/volume',
    'gui/code',
    'gui/terminal',
    'gui/player',
    'gui/basic-player',
    'gui/scope',
    'gui/model',
    'gui/shader',
  ],
  api: [
    'api/fs',
    'api/http',
    'api/clipboard',
    'api/actions',
    'api/persist',
    {
      type: 'category',
      label: 'GUI',
      items: [
        'api/gui/component',
        'api/gui/render',
        'api/gui/control',
      ],
    },
  ],
  internals: [
    'internals/boot',
    'internals/indexeddb',
    'internals/exec',
    'internals/explorer',
    {
      type: 'category',
      label: 'Managers (ConfigFile)',
      link: { type: 'doc', id: 'internals/managers/index' },
      items: [
        'internals/managers/appsManager',
        'internals/managers/iconsManager',
        'internals/managers/themesManager',
        'internals/managers/mimetypesManager',
        'internals/managers/trashManager',
        'internals/managers/usersManager',
      ],
    },
  ],
};

export default sidebars;
