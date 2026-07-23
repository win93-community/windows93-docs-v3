import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Windows93 Docs',
  tagline: 'Developer documentation for Windows 93 V3',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.win93.xyz',
  baseUrl: '/',

  organizationName: 'win93-community',
  projectName: 'windows93-docs-v3',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/win93-community/windows93-docs-v3/tree/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: "OQ5CXJCT05",
      apiKey: "c7f0b8f8ea85f0c0dda9f1884da5c540",
      indexName: "windows93-docs",
    },

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Windows93 Docs',
      hideOnScroll: true,
      logo: {
        alt: '',
        src: 'img/windows93-48.png',
        srcDark: 'img/windows93-48-white.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guide',
          position: 'left',
          label: 'Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'components',
          position: 'left',
          label: 'Components',
        },
        {
          type: 'docSidebar',
          sidebarId: 'api',
          position: 'left',
          label: 'API',
        },
        {
          type: 'docSidebar',
          sidebarId: 'internals',
          position: 'left',
          label: 'Internals',
        },
        {
          href: 'https://windows93.xyz',
          label: 'Windows 93',
          position: 'right',
        },
        {
          href: 'https://docsv2.win93.xyz',
          label: 'V2 Docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/guide/basics',
            },
            {
              label: 'FAQ',
              to: '/docs/guide/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/bYFhRTMmMK',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/win93-community/windows93-docs-v3',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Windows 93',
              href: 'https://windows93.xyz',
            },
            {
              label: 'V2 Docs',
              href: 'https://docsv2.win93.xyz',
            },
            {
              label: 'Wiki',
              href: 'https://wiki.win93.xyz',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Windows93 Community.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
