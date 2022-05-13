export default {
  appId: '@burns/popupsStickyBars',
  version: '0.1',
  name: 'Popups and Sticky Bars',
  description: 'Embed popups and sticky bars.',
  type: 'utility',
  isBeta: true,
  moreInfoUrl: 'https://documentation.unbounce.com/hc/en-us/articles/5555117972628',
  iconUrl: 'https://app-assets-unbounce-com.s3.amazonaws.com/content-smart-builder-apps/popups-sticky-bars/icon.svg',
  categories: ['utility'],
  files: [],
  settings: {
    embedCode: {
      type: 'string',
      label: 'Enter the embed code from the overview of your popup or sticky bar',
      required: true,
      placeholder: "<script src='https://12345678b4488af2f8c8bf2f54287.js.ubembed.com' async></script>",
    },
  },
  externalScripts: [
    'https://app-assets-unbounce-com.s3.amazonaws.com/content-smart-builder-apps/app-reviews/popups-sticky-bars/index.js',
  ],
};
