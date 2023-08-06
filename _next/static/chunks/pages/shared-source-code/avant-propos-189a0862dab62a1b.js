(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [92],
  {
    7061: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/shared-source-code/avant-propos",
        function () {
          return n(7087);
        },
      ]);
    },
    7087: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(2322),
        s = n(4888),
        a = n.n(s),
        o = n(2784),
        i = n(9097),
        l = n.n(i),
        c = n(7871),
        d = n(6663),
        u = n(7606);
      let h = (0, o.createContext)("fr"),
        p = () => {
          let [e, t] = (0, o.useState)("fr"),
            n = () => {
              t((e) => ("fr" === e ? "en" : "fr"));
            };
          return (0, r.jsx)(h.Provider, {
            value: e,
            children: (0, r.jsxs)(d.LH, {
              combine: !0,
              manager: "stagger",
              children: [
                (0, r.jsx)(a(), { id: "cd8ac395aa38884", children: "" }),
                (0, r.jsxs)(u.Fq, {
                  animated: (0, d.aa)("y", 12, 0),
                  children: [
                    (0, r.jsxs)(d.LH, {
                      children: [
                        (0, r.jsx)(d.xv, {
                          as: "h1",
                          fixed: !0,
                          children: "fr" === e ? "Bienvenue..." : "Welcome...",
                        }),
                        (0, r.jsx)(d.tu, {
                          transitions: { entering: "content" },
                          continuous: !0,
                        }),
                      ],
                    }),
                    (0, r.jsx)(d.LH, {
                      children: (0, r.jsx)(d.fS, {
                        as: "hr",
                        animated: (0, d.aa)("scaleX", 0, 1),
                      }),
                    }),
                    (0, r.jsxs)(d.LH, {
                      children: [
                        (0, r.jsx)(d.tu, { transitions: { entering: "type" } }),
                        (0, r.jsx)(d.fS, {
                          as: "blockquote",
                          animated: [
                            (0, d.Wx)(),
                            {
                              transitions: {
                                entering: {
                                  y: [24, 0],
                                  options: { delay: 0.4 },
                                },
                                exiting: { y: 0 },
                              },
                            },
                          ],
                          children: (0, r.jsxs)(d.xv, {
                            children: [
                              (0, r.jsx)("h3", {
                                className: "jsx-cd8ac395aa38884",
                                children:
                                  "fr" === e
                                    ? "Qu'est-ce que Puppeteer ?"
                                    : "What is Puppeteer?",
                              }),
                              (0, r.jsx)("p", {
                                className: "jsx-cd8ac395aa38884",
                                children:
                                  "fr" === e
                                    ? (0, r.jsx)(r.Fragment, {
                                        children:
                                          "Puppeteer est une biblioth\xe8que Node.js d\xe9velopp\xe9e par Google qui vous permet de contr\xf4ler Chrome en mode headless via le protocole DevTools. C'est un outil pour automatiser les tests dans votre application en utilisant Chrome en mode headless ou des appareils Chromebit, sans n\xe9cessiter d'extensions de navigateur telles que Selenium Webdriver ou PhantomJS. Puppeteer vous permet d'automatiser les tests de vos applications web. Avec lui, vous pouvez ex\xe9cuter des tests dans le navigateur et voir les r\xe9sultats en temps r\xe9el sur votre terminal. Puppeteer utilise le protocole WebDriver pour se connecter au navigateur et simuler l'interaction de l'utilisateur avec les \xe9l\xe9ments HTML ou les pages.",
                                      })
                                    : (0, r.jsx)(r.Fragment, {
                                        children:
                                          "Puppeteer is a Node.js library developed by Google that lets you control headless Chrome through the DevTools Protocol. It is a tool for automating testing in your application using headless Chrome or Chromebit devices, without requiring any browser extensions like Selenium Webdriver or PhantomJS. Puppeteer lets you automate the testing of your web applications. With it, you can run tests in the browser and then see the results in real-time on your terminal. Puppeteer uses the WebDriver protocol to connect with the browser and simulate user interaction with HTML elements or pages.",
                                      }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsxs)(d.LH, {
                      children: [
                        (0, r.jsx)(d.tu, { transitions: { entering: "type" } }),
                        (0, r.jsx)(d.fS, {
                          as: "blockquote",
                          animated: [
                            (0, d.Wx)(),
                            {
                              transitions: {
                                entering: {
                                  y: [24, 0],
                                  options: { delay: 0.4 },
                                },
                                exiting: { y: 0 },
                              },
                            },
                          ],
                          children: (0, r.jsxs)(d.xv, {
                            children: [
                              (0, r.jsx)("h3", {
                                className: "jsx-cd8ac395aa38884",
                                children:
                                  "fr" === e
                                    ? "Comment configurer Node.js et Puppeteer ?"
                                    : "How to Set Up Node.js and Puppeteer ?",
                              }),
                              (0, r.jsx)("p", {
                                className: "jsx-cd8ac395aa38884",
                                children:
                                  "fr" === e
                                    ? (0, r.jsx)(r.Fragment, {
                                        children:
                                          "Tout d'abord, cr\xe9ez un r\xe9pertoire dans lequel vous travaillerez en faisant un clic droit sur l'emplacement de votre choix et en choisissant \"Nouveau dossier\". Vous pouvez \xe9galement utiliser la commande mkdir nom-du-r\xe9pertoire dans votre terminal.",
                                      })
                                    : (0, r.jsx)(r.Fragment, {
                                        children:
                                          "First make a directory which you will be working with by right clicking on your preferred location and choosing new folder. You can also use the command mkdir dir-name in your terminal.",
                                      }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(d.LH, {
                      children: (0, r.jsx)(d.xv, {
                        children:
                          "fr" === e
                            ? "Ensuite, cr\xe9ez un fichier app.js dans votre r\xe9pertoire et ajoutez le code Node.js comme indiqu\xe9 ci-dessous :"
                            : "Then create an app.js file in your folder and add the node.js code as shown below:",
                      }),
                    }),
                    (0, r.jsx)(d.LH, {
                      children: (0, r.jsx)(u.dn, {
                        "data-codacom-global-block": !0,
                        animated: (0, d.Wx)(),
                        code: "npm install puppeteer",
                      }),
                    }),
                    (0, r.jsx)(d.LH, {
                      children: (0, r.jsx)(d.xv, {
                        children: (0, r.jsx)(d.xv, {
                          children:
                            "fr" === e
                              ? "Et ex\xe9cutez ce code ci-dessous avec (node app.js) dans votre terminal."
                              : "And excute this code below with (node app.js) in your terminal",
                        }),
                      }),
                    }),
                    (0, r.jsx)(d.LH, {
                      children: (0, r.jsx)(u.dn, {
                        "data-codacom-global-block": !0,
                        animated: (0, d.Wx)(),
                        code: "const puppeteer = require('puppeteer');\n\n              (async () => {\n                const browser = await puppeteer.launch();\n                const page = await browser.newPage();\n                await page.goto('https://codacom.vercel.app/');\n                \n                await browser.close();\n              })();\n              \n              ",
                      }),
                    }),
                    (0, r.jsx)(u.zx, {
                      frame: "hexagon",
                      animated: [(0, d.Wx)(), (0, d.aa)("x", -12, 0)],
                      onHoverAnimateIcons: !0,
                      tabIndex: -1,
                      title: "Commencer",
                      onClick: n,
                      children:
                        "fr" === e
                          ? "Switch to English"
                          : "Passer en fran\xe7ais",
                    }),
                    (0, r.jsx)("nav", {
                      style: {
                        marginTop: "3rem",
                        display: "flex",
                        justifyContent: "right",
                      },
                      className: "jsx-cd8ac395aa38884",
                      children: (0, r.jsx)(d.LH, {
                        children: (0, r.jsx)(l(), {
                          href: "/a-propos-de-moi/currently",
                          children: (0, r.jsxs)(u.zx, {
                            frame: "hexagon",
                            animated: [(0, d.Wx)(), (0, d.aa)("x", -12, 0)],
                            onHoverAnimateIcons: !0,
                            tabIndex: -1,
                            title: "Commencer",
                            children: [
                              (0, r.jsx)("span", {
                                className: "jsx-cd8ac395aa38884",
                                children:
                                  "fr" === e ? "Actuellement" : "Currently",
                              }),
                              (0, r.jsx)(c.Z, {}),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      t.default = p;
    },
    7871: function (e, t, n) {
      "use strict";
      var r = n(2784),
        s = n(73),
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var s in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
              return e;
            }).apply(this, arguments);
        },
        o = r.forwardRef(function (e, t) {
          var n = a(a({}, r.useContext(s.s)), e);
          return r.createElement(
            "svg",
            a(
              {
                width: "1.5em",
                height: "1.5em",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                color: "currentColor",
                ref: t,
              },
              n
            ),
            r.createElement("path", {
              d: "M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        });
      t.Z = o;
    },
  },
  function (e) {
    e.O(0, [299, 774, 888, 179], function () {
      return e((e.s = 7061));
    }),
      (_N_E = e.O());
  },
]);
