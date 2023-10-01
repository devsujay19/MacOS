import { createAppConfig } from '🍎/helpers/create-app-config';

const wallpapers = createAppConfig({
  title: 'Apple Wallpapers',
  resizable: true,

  height: 600,
  width: 800,

  dockBreaksBefore: true,
});

const calculator = createAppConfig({
  title: 'Apple Calculator',

  expandable: true,
  resizable: false,

  height: 300 * 1.414,
  width: 300,
});

const calendar = createAppConfig({
  title: 'Apple Calendar',
  resizable: true,
});

const vscode = createAppConfig({
  title: 'Microsoft Visual Studio Code',
  resizable: true,

  height: 600,
  width: 800,
});

const finder = createAppConfig({
  title: 'Apple Finder',
  resizable: true,

  // dockBreaksBefore: true,
  shouldOpenWindow: false,
});

const safari = createAppConfig({
  title: 'Apple Safari',
  resizable: true,

  width: 800,
  height: 600,
});

const systemPreferences = createAppConfig({
  title: 'System Preferences',
  resizable: true,
});

const purusTwitter = createAppConfig({
  title: `About The Developer`,
  resizable: true,

  dockBreaksBefore: true,

  height: 600,
  width: 800,
});

const viewSource = createAppConfig({
  title: `GitHub - View Source Code`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://github.com/devsujay19/MacOS', '_blank'),
});


const vercel = createAppConfig({
  title: `Vercel`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () =>
    window.open('https://vercel.com/', '_blank'),

  dockBreaksBefore: true,
});

const appstore = createAppConfig({
  title: 'Apple App Store',
  resizable: true,
});

export const appsConfig = {
  finder,
  wallpapers,
  safari,
  calculator,
  calendar,
  vscode,
  appstore,

  'purus-twitter': purusTwitter,
  'view-source': viewSource,

  vercel,
};
