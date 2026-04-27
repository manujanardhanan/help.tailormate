import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'TailorMate App Help Center',
  tagline: 'Your complete guide to using TailorMate App',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://help.tailormateapp.com',
  baseUrl: '/',

  organizationName: 'manujanardhanan',
  projectName: 'help.tailormate',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'TailorMate',
        src: 'img/logo-t.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Help Centre',
        },
         { type: 'search', position: 'right' }, 
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Help Centre',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Web Application',
              href: 'https://web.tailormateapp.com/auth/login',
            },
            {
              label: 'Google Play Store Link',
              href: 'https://play.google.com/store/apps/details?id=com.tailormate&hl=en_IN',
            },
            {
              label: 'Apple Store Link',
              href: 'https://apps.apple.com/in/app/tailormate-app-for-tailors/id6736565286',
            },
          ],
        },
        {
          title: 'Popular Links',
          items: [
            {
              label: 'About us',
              href: 'https://www.tailormateapp.com/#about',
            },
            {
              label: 'Contact Us',
              href: 'https://www.tailormateapp.com/#contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TailorMate App. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
