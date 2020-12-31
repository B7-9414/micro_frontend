import {
  registerApplication,
  start
} from "single-spa";

registerApplication({
  name: "@thiethaa/nav-bar",
  app: () =>
    System.import("@thiethaa/nav-bar"),
  activeWhen: ['/'],
});

registerApplication({
  name: "@thiethaa/page-one",
  app: () =>
    System.import("@thiethaa/page-one"),
  activeWhen: (location) => location.pathname === '/page-one',
});

registerApplication({
  name: "@thiethaa/page-two",
  app: () =>
    System.import("@thiethaa/page-two"),
  activeWhen: (location) => location.pathname === '/page-two',
});

registerApplication({
  name: "@thiethaa/page-three",
  app: () =>
    System.import("@thiethaa/page-three"),
  activeWhen: (location) => location.pathname === '/page-three',
});

registerApplication({
  name: "@thiethaa/test",
  app: () =>
    System.import("@thiethaa/test"),
  activeWhen: (location) => location.pathname === '/test',
});

registerApplication({
  name: "angular",
  app: () =>
    System.import("angular"),
  activeWhen: (location) => location.pathname === '/angular',
});

registerApplication({
  name: "@thiethaa/vue",
  app: () =>
    System.import("@thiethaa/vue"),
  activeWhen: (location) => location.pathname === '/vue',
});

start({
  urlRerouteOnly: true,
});