// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Учимся вместе',
  tagline: 'Совместное обучение - залог успеха',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ruslankin.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'RuslankinDocs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/mouse_wink.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'project',
            position: 'left',
            label: 'Project',
          },
          {
            type: 'doc',
            docId: 'frontend',
            position: 'left',
            label: 'Frontend',
          },
          {
            type: 'doc',
            docId: 'backend',
            position: 'left',
            label: 'Backend',
          },
          {
            type: 'doc',
            docId: 'docker',
            position: 'left',
            label: 'Docker',
          },
          {
            type: 'doc',
            docId: 'git',
            position: 'left',
            label: 'Git',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Учимся вместе',
                href: 'https://t.me/+FldPMuRMGVNmMDli',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ruslankin, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
