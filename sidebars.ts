import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guide: [
    'intro/basics',
    'intro/making-app',
    'intro/document-vs-module',
    'intro/plan',
    'intro/events',
    'intro/faq',
    'tb',
    'intro/audio-app',
  ],
  components: [
    'components/dialog',
    'components/explorer',
    'components/picto',
    'components/folder',
    'components/toast',
  ],
  invocables: [
    'invocables/explorer',
    'invocables/alert',
    'invocables/confirm',
    'invocables/prompt',
    'invocables/filePickerOpen',
  ],
  filesystem: [
    'fs/index',
  ],
  internals: [
    'internals/boot',
    'internals/indexeddb',
    'internals/exec',
    'internals/explorer',
    'platform/platform',
  ],
};

export default sidebars;
