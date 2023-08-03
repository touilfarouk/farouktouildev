(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [656],
  {
    7450: function (e, n, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/linux/about",
        function () {
          return s(9169);
        },
      ]);
    },
    9169: function (e, n, s) {
      "use strict";
      s.r(n),
        s.d(n, {
          default: function () {
            return j;
          },
        });
      var t = s(2322),
        r = s(9097),
        i = s.n(r),
        a = s(8e3),
        l = s(2784),
        o = s(73),
        d = function () {
          return (d =
            Object.assign ||
            function (e) {
              for (var n, s = 1, t = arguments.length; s < t; s++)
                for (var r in (n = arguments[s]))
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              return e;
            }).apply(this, arguments);
        },
        c = l.forwardRef(function (e, n) {
          var s = d(d({}, l.useContext(o.s)), e);
          return l.createElement(
            "svg",
            d(
              {
                width: "1.5em",
                height: "1.5em",
                strokeWidth: 1.5,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                color: "currentColor",
                ref: n,
              },
              s
            ),
            l.createElement("path", {
              d: "M8 21h12.4a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6V16M10 6h8M6 6h1M3.5 20.5L12 12m0 0v4m0-4H8",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        }),
        h = s(7871),
        m = s(6663),
        p = s(7606);
      let x = () =>
        (0, t.jsx)(m.LH, {
          combine: !0,
          manager: "stagger",
          children: (0, t.jsxs)(p.Fq, {
            animated: (0, m.aa)("y", 12, 0),
            children: [
              (0, t.jsxs)(m.LH, {
                children: [
                  (0, t.jsx)(m.xv, { as: "h1", fixed: !0, children: "About" }),
                  (0, t.jsx)(m.tu, {
                    transitions: { entering: "content" },
                    continuous: !0,
                  }),
                ],
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.fS, {
                  as: "hr",
                  animated: (0, m.aa)("scaleX", 0, 1),
                }),
              }),
              (0, t.jsxs)(m.LH, {
                children: [
                  (0, t.jsx)(m.tu, { transitions: { entering: "type" } }),
                  (0, t.jsx)(m.xv, {
                    children:
                      'Codacom packages are categorized by "vanilla" and "implementation" packages. Codacom vanilla packages do not have UI libraries or frameworks dependencies, while the implementation packages depend on specific UI tools to simplify their use and add custom UI components.',
                  }),
                ],
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsxs)(m.xv, {
                  children: [
                    "Their purpose can be for visual, motion, or audio design, or UI components implementations. The ",
                    (0, t.jsx)("a", { href: "/play", children: "Playground" }),
                    " can be used to experiment with various use cases in real-time in browser to get a sense of what is possible to do.",
                  ],
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsxs)(m.xv, {
                  as: "h2",
                  fixed: !0,
                  id: "vanilla",
                  children: [
                    (0, t.jsx)(a.Z, { style: { verticalAlign: "middle" } }),
                    (0, t.jsx)("span", { children: " Vanilla" }),
                  ],
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children:
                    'Vanilla packages can be used with any other UI library but many tools are low level APIs and require more elaborated configurations. Implementation packages mostly provide "sugar-APIs" to facilitate their use.',
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children: "Available vanilla packages:",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.fS, {
                  style: {
                    marginBottom: "1.5rem",
                    minWidth: 0,
                    minHeight: 0,
                    maxWidth: "100%",
                    overflowX: "auto",
                  },
                  animated: (0, m.Wx)(),
                  children: (0, t.jsxs)("table", {
                    style: { minWidth: 700 },
                    children: [
                      (0, t.jsx)("thead", {
                        children: (0, t.jsxs)("tr", {
                          children: [
                            (0, t.jsx)("th", { children: "Package" }),
                            (0, t.jsx)("th", { children: "Status" }),
                            (0, t.jsx)("th", { children: "Stats" }),
                            (0, t.jsx)("th", { children: "Description" }),
                          ],
                        }),
                      }),
                      (0, t.jsxs)("tbody", {
                        children: [
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/tools",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/tools?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/tools.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children: "General browser API tools",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/theme",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(30 100% 50%)" },
                                  children: "Development",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/theme?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/theme.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children:
                                  "Color, units, and general purpose dynamic theming tools",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/animated",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/animated?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/animated.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children: "HTML element animation utilities",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/animator",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/animator?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/animator.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children:
                                  "Assemble and disassemble user interfaces using animation controls",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/bleeps",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/bleeps?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/bleeps.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children:
                                  "Define, manage, and control interactive short sound effects",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/text",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/text?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/text.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children: "Text rendering effect tools",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/frames",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/frames?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/frames.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children:
                                  "Build responsive vector graphics components",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/bgs",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(30 100% 50%)" },
                                  children: "Development",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/bgs?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/bgs.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children: "Passive UI background effects",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/core",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(30 100% 50%)" },
                                  children: "Development",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/core?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/core.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children: "Core UI functionalities",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "codacom",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/codacom?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/codacom.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children: "All vanilla packages bundle",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsxs)(m.xv, {
                  as: "h2",
                  fixed: !0,
                  id: "react",
                  children: [
                    (0, t.jsx)(a.Z, { style: { verticalAlign: "middle" } }),
                    (0, t.jsx)("span", { children: " React" }),
                  ],
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsxs)(m.xv, {
                  children: [
                    "The framework offers ",
                    (0, t.jsx)("a", {
                      href: "https://react.dev",
                      children: "React.js",
                    }),
                    " v18 specific packages with",
                    " ",
                    (0, t.jsx)("a", {
                      href: "https://web.dev/rendering-on-the-web",
                      children: "SSR",
                    }),
                    " support.",
                  ],
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsxs)(m.xv, {
                  children: [
                    "Get started with",
                    " ",
                    (0, t.jsx)("a", {
                      href: "https://nextjs.org/docs/getting-started/installation",
                      children: "Next.js",
                    }),
                    " ",
                    "or any other React setup for a new or existing project.",
                  ],
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.fS, {
                  as: "blockquote",
                  "data-codacom-global-palette": "error",
                  children: (0, t.jsx)(m.xv, {
                    children:
                      "Codacom does not work with React strict mode nor React Server Components.",
                  }),
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children:
                    "If using Next.js, in the configuration file, disable React strict mode:",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(p.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, m.Wx)(),
                  code: "// next.config.js\nmodule.exports = {\n  reactStrictMode: false\n};",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children: "And then install Codacom for React.",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(p.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, m.Wx)(),
                  code: "npm install @codacom/react",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children:
                    "The package re-exports all the vanilla packages and the React specific packages.",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsxs)(m.xv, {
                  children: [
                    "One possible solution for styling can be",
                    " ",
                    (0, t.jsx)("a", {
                      href: "https://emotion.sh",
                      target: "_blank",
                      children: "Emotion",
                    }),
                    ". Install Emotion for React.",
                  ],
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(p.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, m.Wx)(),
                  code: "npm install @emotion/react",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsxs)(m.xv, {
                  children: [
                    "Codacom provides a base customizable theme and global baseline styles. They can be applied with the Emotion ",
                    (0, t.jsx)("code", { children: "<Global/>" }),
                    " ",
                    "component.",
                  ],
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(p.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, m.Wx)(),
                  code: "import { type CSSObject, Global } from '@emotion/react';\nimport { createAppTheme, createAppStylesBaseline } from '@codacom/react';\n\nconst theme = createAppTheme();\nconst stylesBaseline = createAppStylesBaseline(theme);\n\nconst App = (): ReactElement => {\n  return (\n    <>\n      <Global styles={stylesBaseline as Record<string, CSSObject>} />\n      {/* ... */}\n    </>\n  );\n};",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children:
                    "If the app is going to use the Codacom animator system, some optional global animation settings can be setup at the root component. For example, to enable/disable animations or their durations.",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(p.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, m.Wx)(),
                  code: "import { type ReactElement } from 'react';\nimport {\n  type AnimatorGeneralProviderSettings,\n  AnimatorGeneralProvider\n} from '@codacom/react';\n\nconst animatorsSettings: AnimatorGeneralProviderSettings = {\n  // Durations in seconds.\n  duration: {\n    enter: 0.2,\n    exit: 0.2,\n    stagger: 0.04\n  }\n};\n\nconst App = (): ReactElement => {\n  return (\n    <AnimatorGeneralProvider {...animatorsSettings}>\n      {/* ... */}\n    </AnimatorGeneralProvider>\n  );\n};",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children:
                    "Now there can be also a root Animator component to manage the app children animations.",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(p.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, m.Wx)(),
                  code: "import { useState } from 'react';\nimport { Animator } from '@codacom/react';\n\nconst App = (): ReactElement => {\n  const [active] = useState(true);\n\n  return (\n    <Animator combine manager='stagger' active={active}>\n      {/* ... */}\n    </Animator>\n  );\n};",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children:
                    "Sound effects can be setup globally so any children component can read and play them.",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(p.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, m.Wx)(),
                  code: "import {\n  type BleepsProviderSettings,\n  BleepsProvider\n} from '@codacom/react';\n\nconst bleepsSettings: BleepsProviderSettings = {\n  // Shared global audio settings.\n  master: {\n    volume: 0.9\n  },\n  bleeps: {\n    // A transition bleep sound to play when the user enters the app.\n    intro: {\n      sources: [\n        { src: 'https://next.codacom.dev/assets/sounds/intro.mp3', type: 'audio/mpeg' }\n      ]\n    },\n    // An interactive bleep sound to play when user clicks.\n    click: {\n      sources: [\n        { src: 'https://next.codacom.dev/assets/sounds/click.mp3', type: 'audio/mpeg' }\n      ]\n    }\n  }\n};\n\nconst App = (): ReactElement => {\n  return (\n    <BleepsProvider {...bleepsSettings}>\n      {/* ... */}\n    </BleepsProvider>\n  );\n};",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children:
                    "Some applications would use visual animated patterns effects for their backgrounds. Multiple UI effects can be used together for more styles.",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(p.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, m.Wx)(),
                  code: "import { GridLines, Dots, MovingLines } from '@codacom/react';\n\nconst Background = (): ReactElement => {\n  return (\n    <div\n      style={{\n        position: 'absolute',\n        inset: 0,\n        backgroundColor: theme.colors.primary.bg(1)\n      }}\n    >\n      <GridLines lineColor={theme.colors.primary.deco(0)} />\n      <Dots color={theme.colors.primary.deco(1)} />\n      <MovingLines lineColor={theme.colors.primary.deco(2)} />\n    </div>\n  );\n};\n\nconst App = (): ReactElement => {\n  return (\n    <>\n      <Animator>\n        <Background />\n      <Animator>\n\n      {/* ... */}\n    </>\n  );\n};",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children:
                    "To experiment with some Codacom building blocks, a card component can be created to display a title and a description. It would use a custom frame style (with colors defined by CSS) and transition animations for the text.",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(p.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, m.Wx)(),
                  code: "import {\n  useBleeps,\n  BleepsOnAnimator,\n  Animated,\n  FrameSVGCorners,\n  Text,\n  aa,\n  aaVisibility\n} from '@codacom/react';\n\nconst Card = (): ReactElement => {\n  const bleeps = useBleeps();\n\n  return (\n    <Animator merge combine manager='stagger'>\n      {/* Play the intro bleep when card appears. */}\n      <BleepsOnAnimator\n        transitions={{ entering: 'intro' }}\n        continuous\n      />\n\n      <Animated\n        className='card'\n        style={{\n          position: 'relative',\n          display: 'block',\n          maxWidth: '300px',\n          margin: theme.space([4, 'auto']),\n          padding: theme.space(8),\n          textAlign: 'center'\n        }}\n        // Effects for entering and exiting animation transitions.\n        animated={[aaVisibility(), aa('y', '2rem', 0)]}\n        // Play bleep when the card is clicked.\n        onClick={() => bleeps.click?.play()}\n      >\n        {/* Frame decoration and shape colors defined by CSS. */}\n        <style>{`\n          .card .codacom-react-frames-framesvg [data-name=bg] {\n            color: ${theme.colors.primary.deco(1)};\n          }\n          .card .codacom-react-frames-framesvg [data-name=line] {\n            color: ${theme.colors.primary.main(4)};\n          }\n        `}</style>\n\n        <Animator>\n          <FrameSVGCorners strokeWidth={2} />\n        </Animator>\n\n        <Animator>\n          <Text as='h1'>\n            Codacom Project\n          </Text>\n        </Animator>\n\n        <Animator>\n          <Text>\n            Futuristic science fiction user interface web framework.\n          </Text>\n        </Animator>\n      </Animated>\n    </Animator>\n  );\n};\n\nconst App = (): ReactElement => {\n  return (\n    <>\n      <Animator>\n        <Card />\n      <Animator>\n\n      {/* ... */}\n    </>\n  );\n};",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children:
                    "With all these elements there is a simple web page with custom and flexible sci-fi effects. Open the playground sandbox to see it in real-time in-browser.",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)("p", {
                  children: (0, t.jsx)("a", {
                    href: "/play?type=custom&sandbox=&explorer=false&editor=false&preview=true&code=".concat(
                      encodeURIComponent(
                        btoa(
                          "\nimport React, { type ReactElement } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport { type CSSObject, Global } from '@emotion/react';\nimport {\n  createAppTheme,\n  createAppStylesBaseline,\n  type AnimatorGeneralProviderSettings,\n  AnimatorGeneralProvider,\n  Animator,\n  Animated,\n  aaVisibility,\n  aa,\n  type BleepsProviderSettings,\n  BleepsProvider,\n  useBleeps,\n  BleepsOnAnimator,\n  FrameSVGCorners,\n  GridLines,\n  Dots,\n  MovingLines,\n  Text\n} from '@codacom/react';\n\nconst theme = createAppTheme();\nconst stylesBaseline = createAppStylesBaseline(theme);\n\nconst Background = (): ReactElement => {\n  return (\n    <div\n      style={{\n        position: 'absolute',\n        inset: 0,\n        backgroundColor: theme.colors.primary.bg(1)\n      }}\n    >\n      <GridLines lineColor={theme.colors.primary.deco(0)} />\n      <Dots color={theme.colors.primary.deco(1)} />\n      <MovingLines lineColor={theme.colors.primary.deco(2)} />\n    </div>\n  );\n};\n\nconst Card = (): ReactElement => {\n  const bleeps = useBleeps();\n\n  return (\n    <Animator merge combine manager='stagger'>\n      {/* Play the intro bleep when card appears. */}\n      <BleepsOnAnimator\n        transitions={{ entering: 'intro' }}\n        continuous\n      />\n\n      <Animated\n        className='card'\n        style={{\n          position: 'relative',\n          display: 'block',\n          maxWidth: '300px',\n          margin: theme.space([4, 'auto']),\n          padding: theme.space(8),\n          textAlign: 'center'\n        }}\n        // Effects for entering and exiting animation transitions.\n        animated={[aaVisibility(), aa('y', '2rem', 0)]}\n        // Play bleep when the card is clicked.\n        onClick={() => bleeps.click?.play()}\n      >\n        {/* Frame decoration and shape colors defined by CSS. */}\n        <style>{`\n          .card .codacom-react-frames-framesvg [data-name=bg] {\n            color: ${theme.colors.primary.deco(1)};\n          }\n          .card .codacom-react-frames-framesvg [data-name=line] {\n            color: ${theme.colors.primary.main(4)};\n          }\n        `}</style>\n\n        <Animator>\n          <FrameSVGCorners strokeWidth={2} />\n        </Animator>\n\n        <Animator>\n          <Text as='h1'>\n            Codacom Project\n          </Text>\n        </Animator>\n\n        <Animator>\n          <Text>\n            Futuristic science fiction user interface web framework.\n          </Text>\n        </Animator>\n      </Animated>\n    </Animator>\n  );\n};\n\nconst animatorsSettings: AnimatorGeneralProviderSettings = {\n  duration: {\n    enter: 0.2,\n    exit: 0.2,\n    stagger: 0.04\n  }\n};\n\nconst bleepsSettings: BleepsProviderSettings = {\n  master: {\n    volume: 0.9\n  },\n  bleeps: {\n    intro: {\n      sources: [{ src: 'https://next.codacom.dev/assets/sounds/intro.mp3', type: 'audio/mpeg' }]\n    },\n    click: {\n      sources: [{ src: 'https://next.codacom.dev/assets/sounds/click.mp3', type: 'audio/mpeg' }]\n    }\n  }\n};\n\nconst Sandbox = (): ReactElement => {\n  return (\n    <>\n      <Global styles={stylesBaseline as Record<string, CSSObject>} />\n      <AnimatorGeneralProvider {...animatorsSettings}>\n        <BleepsProvider {...bleepsSettings}>\n          <Animator active={true} combine manager='stagger'>\n            <Animator>\n              <Background />\n            </Animator>\n            <Animator>\n              <Card />\n            </Animator>\n          </Animator>\n        </BleepsProvider>\n      </AnimatorGeneralProvider>\n    </>\n  );\n};\n\ncreateRoot(document.querySelector('#root') as HTMLElement).render(<Sandbox />);\n".trim()
                        )
                      )
                    ),
                    target: "_blank",
                    children: (0, t.jsxs)(p.zx, {
                      size: "small",
                      frame: "simple",
                      tabIndex: -1,
                      children: [
                        (0, t.jsx)(c, {}),
                        (0, t.jsx)("span", { children: "Open Sandbox" }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.xv, {
                  children: "Available React packages:",
                }),
              }),
              (0, t.jsx)(m.LH, {
                children: (0, t.jsx)(m.fS, {
                  style: {
                    marginBottom: "1.5rem",
                    minWidth: 0,
                    minHeight: 0,
                    maxWidth: "100%",
                    overflowX: "auto",
                  },
                  animated: (0, m.Wx)(),
                  children: (0, t.jsxs)("table", {
                    style: { minWidth: 700 },
                    children: [
                      (0, t.jsx)("thead", {
                        children: (0, t.jsxs)("tr", {
                          children: [
                            (0, t.jsx)("th", { children: "Package" }),
                            (0, t.jsx)("th", { children: "Status" }),
                            (0, t.jsx)("th", { children: "Stats" }),
                            (0, t.jsx)("th", { children: "Description" }),
                          ],
                        }),
                      }),
                      (0, t.jsxs)("tbody", {
                        children: [
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/react-tools",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/react-tools?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/react-tools.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children: "General React API tools",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/react-animator",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/react-animator?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/react-animator.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children: "Animator interface tools",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/react-animated",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/react-animated?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/react-animated.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children:
                                  "Animated UI elements using animator tools",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/react-bleeps",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/react-bleeps?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/react-bleeps.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children:
                                  "Interactive short sound effects manager",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/react-text",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/react-text?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/react-text.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children: "Text effect components",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/react-frames",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/react-frames?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/react-frames.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children:
                                  "Build responsive vector graphics components",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/react-bgs",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/react-bgs?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/react-bgs.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children: "Passive UI background effects",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/react-core",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(0 100% 50%)" },
                                  children: "Specification",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/react-core?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/react-core.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children: "Core UI components",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("code", {
                                  children: "@codacom/react",
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)("small", {
                                  style: { color: "hsl(150 100% 50%)" },
                                  children: "Polishing",
                                }),
                              }),
                              (0, t.jsxs)("td", {
                                children: [
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/bundlephobia/minzip/@codacom/react?style=flat-square",
                                    alt: "npm bundle size (scoped)",
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "https://img.shields.io/npm/dm/@codacom/react.svg?style=flat-square",
                                    alt: "Downloads",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("td", {
                                children:
                                  "All vanilla and React packages bundle",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsxs)("nav", {
                style: {
                  marginTop: "3rem",
                  display: "grid",
                  gridAutoFlow: "column",
                  columnGap: "1.5rem",
                  justifyContent: "right",
                },
                children: [
                  (0, t.jsx)(m.LH, {
                    children: (0, t.jsx)("a", {
                      href: "/linux/develop",
                      children: (0, t.jsxs)(p.zx, {
                        frame: "hexagon",
                        animated: [(0, m.Wx)(), (0, m.aa)("x", -12, 0)],
                        onHoverAnimateIcons: !0,
                        tabIndex: -1,
                        title: "Go to develop",
                        children: [
                          (0, t.jsx)("span", { children: "Develop" }),
                          (0, t.jsx)(h.Z, {}),
                        ],
                      }),
                    }),
                  }),
                  (0, t.jsx)(m.LH, {
                    children: (0, t.jsx)(i(), {
                      href: "/linux/design",
                      children: (0, t.jsxs)(p.zx, {
                        frame: "hexagon",
                        animated: [(0, m.Wx)(), (0, m.aa)("x", -12, 0)],
                        onHoverAnimateIcons: !0,
                        tabIndex: -1,
                        title: "Go to design",
                        children: [
                          (0, t.jsx)("span", { children: "Design" }),
                          (0, t.jsx)(h.Z, {}),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      var j = x;
    },
    7871: function (e, n, s) {
      "use strict";
      var t = s(2784),
        r = s(73),
        i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var n, s = 1, t = arguments.length; s < t; s++)
                for (var r in (n = arguments[s]))
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              return e;
            }).apply(this, arguments);
        },
        a = t.forwardRef(function (e, n) {
          var s = i(i({}, t.useContext(r.s)), e);
          return t.createElement(
            "svg",
            i(
              {
                width: "1.5em",
                height: "1.5em",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                color: "currentColor",
                ref: n,
              },
              s
            ),
            t.createElement("path", {
              d: "M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        });
      n.Z = a;
    },
    8e3: function (e, n, s) {
      "use strict";
      var t = s(2784),
        r = s(73),
        i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var n, s = 1, t = arguments.length; s < t; s++)
                for (var r in (n = arguments[s]))
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              return e;
            }).apply(this, arguments);
        },
        a = t.forwardRef(function (e, n) {
          var s = i(i({}, t.useContext(r.s)), e);
          return t.createElement(
            "svg",
            i(
              {
                width: "1.5em",
                height: "1.5em",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                color: "currentColor",
                ref: n,
              },
              s
            ),
            t.createElement("path", {
              d: "M13 6l6 6-6 6M5 6l6 6-6 6",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        });
      n.Z = a;
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 7450));
    }),
      (_N_E = e.O());
  },
]);
