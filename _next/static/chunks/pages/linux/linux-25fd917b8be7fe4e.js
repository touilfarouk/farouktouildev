(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [861],
  {
    5625: function (e, n, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/linux/linux",
        function () {
          return s(438);
        },
      ]);
    },
    438: function (e, n, s) {
      "use strict";
      s.r(n);
      var r = s(2322),
        t = s(9097),
        o = s.n(t),
        i = s(7871),
        a = s(6663),
        d = s(7606);
      let l = () =>
        (0, r.jsx)(a.LH, {
          combine: !0,
          manager: "stagger",
          children: (0, r.jsxs)(d.Fq, {
            animated: (0, a.aa)("y", 12, 0),
            children: [
              (0, r.jsxs)(a.LH, {
                children: [
                  (0, r.jsx)(a.xv, {
                    as: "h1",
                    fixed: !0,
                    children: "Preface",
                  }),
                  (0, r.jsx)(a.tu, {
                    transitions: { entering: "content" },
                    continuous: !0,
                  }),
                ],
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(a.fS, {
                  as: "hr",
                  animated: (0, a.aa)("scaleX", 0, 1),
                }),
              }),
              (0, r.jsxs)(a.LH, {
                children: [
                  (0, r.jsx)(a.tu, { transitions: { entering: "type" } }),
                  (0, r.jsx)(a.fS, {
                    as: "blockquote",
                    children: (0, r.jsxs)(a.xv, {
                      children: [
                        (0, r.jsx)("strong", { children: "Introduction" }),
                        (0, r.jsx)("br", {}),
                        "Ce guide traite de la cr\xe9ation d'API Web \xe0 partir de NodeJS, MongoDB, Express et TypeScript. Il y a beaucoup de choses \xe0 am\xe9liorer dans ce guide. Si vous en trouvez une, veuillez laisser un commentaire. J'appr\xe9cie cela ;)",
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("strong", {
                          children: "Pour qui est ce guide ?",
                        }),
                        (0, r.jsx)("br", {}),
                        "Si vous \xeates int\xe9ress\xe9 par la cr\xe9ation d'API Web en exploitant les avantages de Node.js, Express, MongoDB et TypeScript, ce guide est parfait pour vous. Ce guide suppose que vous avez d\xe9j\xe0 des connaissances en JavaScript et en base de donn\xe9es NoSQL.",
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("strong", {
                          children: "Comment lire ce guide ?",
                        }),
                        (0, r.jsx)("br", {}),
                        "Les chapitres de ce guide doivent \xeatre lus dans l'ordre. Vous pouvez sauter certaines parties de certains chapitres si vous avez d\xe9j\xe0 des connaissances pr\xe9existantes.",
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(a.fS, {
                  as: "blockquote",
                  children: (0, r.jsxs)(a.xv, {
                    children: [
                      (0, r.jsx)("strong", {
                        children: "Configuration du projet",
                      }),
                      (0, r.jsx)("br", {}),
                      "Avant de commencer, assurez-vous d'avoir NodeJS install\xe9 sur votre machine. Ensuite, installez TypeScript et TypeScript Node en utilisant la commande suivante :",
                    ],
                  }),
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(d.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, a.Wx)(),
                  code: "npm install -g typescript ts-node",
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(a.xv, {
                  children:
                    "Pour tester les requ\xeates HTTP, vous pouvez utiliser Postman pour envoyer des requ\xeates d'exemple.",
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(a.fS, {
                  as: "blockquote",
                  children: (0, r.jsxs)(a.xv, {
                    children: [
                      (0, r.jsx)("strong", {
                        children: "\xc9tape 1 : Initialiser un projet Node",
                      }),
                      (0, r.jsx)("br", {}),
                      "Cr\xe9ez un dossier de projet et initialisez le projet npm en r\xe9pondant \xe0 toutes les questions. Vous pouvez le modifier \xe0 tout moment par la suite.",
                    ],
                  }),
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(d.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, a.Wx)(),
                  code: "mkdir node-apis-project\ncd node-apis-project\nnpm init",
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(a.fS, {
                  as: "blockquote",
                  children: (0, r.jsxs)(a.xv, {
                    children: [
                      (0, r.jsx)("strong", {
                        children:
                          "\xc9tape 2 : Installer toutes les d\xe9pendances",
                      }),
                      (0, r.jsx)("br", {}),
                      "Installez toutes les d\xe9pendances n\xe9cessaires avec la commande suivante :",
                    ],
                  }),
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(d.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, a.Wx)(),
                  code: "npm install --save @types/express express body-parser mongoose nodemon",
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(a.fS, {
                  as: "blockquote",
                  children: (0, r.jsxs)(a.xv, {
                    children: [
                      (0, r.jsx)("strong", {
                        children:
                          "\xc9tape 3 : Configurer le fichier de configuration TypeScript (tsconfig.json)",
                      }),
                      (0, r.jsx)("br", {}),
                      'Mettez tous les fichiers TypeScript dans le dossier "lib" \xe0 des fins de d\xe9veloppement, puis pour la production, enregistrez tous les fichiers JavaScript dans le dossier "dist". Et bien s\xfbr, nous profiterons de l\'ES2015 dans le projet.',
                    ],
                  }),
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(d.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, a.Wx)(),
                  code: '{\n  "compilerOptions": {\n    "module": "commonjs",\n    "moduleResolution": "node",\n    "pretty": true,\n    "sourceMap": true,\n    "target": "es6",\n    "outDir": "./dist",\n    "baseUrl": "./lib"\n  },\n  "include": [\n    "lib/**/*.ts"\n  ],\n  "exclude": [\n    "node_modules"\n  ]\n}',
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(a.fS, {
                  as: "blockquote",
                  children: (0, r.jsxs)(a.xv, {
                    children: [
                      (0, r.jsx)("strong", {
                        children:
                          "\xc9tape 4 : Modifier les scripts d'ex\xe9cution dans package.json",
                      }),
                      (0, r.jsx)("br", {}),
                      'Ajoutez les scripts d\'ex\xe9cution suivants dans le fichier "package.json" :',
                    ],
                  }),
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(d.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, a.Wx)(),
                  code: '{\n  "scripts": {\n    "build": "tsc",\n    "dev": "ts-node ./lib/server.ts",\n    "start": "nodemon ./dist/server.js",\n    "prod": "npm run build && npm run start"\n  }\n}',
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(a.xv, {
                  children:
                    "Ainsi, pour le d\xe9veloppement, vous pouvez ex\xe9cuter un serveur de test en utilisant la commande :",
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(d.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, a.Wx)(),
                  code: "npm run dev",
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(a.xv, {
                  children: "Pour la production :",
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(d.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, a.Wx)(),
                  code: "npm run prod",
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(a.fS, {
                  as: "blockquote",
                  children: (0, r.jsxs)(a.xv, {
                    children: [
                      (0, r.jsx)("strong", {
                        children:
                          "\xc9tape 5 : D\xe9marrer avec la configuration de base",
                      }),
                      (0, r.jsx)("br", {}),
                      'Vous aurez besoin t\xf4t ou tard du package "body-parser" pour analyser les donn\xe9es de requ\xeate entrantes.',
                    ],
                  }),
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(d.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, a.Wx)(),
                  code: '// lib/app.ts\n\nimport * as express from "express";\nimport * as bodyParser from "body-parser";\n\nclass App {\n\n    public app: express.Application;\n\n    constructor() {\n        this.app = express();\n        this.config();\n    }\n\n    private config(): void{\n        // support application/json type post data\n        this.app.use(bodyParser.json());\n        //support application/x-www-form-urlencoded post data\n        this.app.use(bodyParser.urlencoded({ extended: false }));\n    }\n\n}\n\nexport default new App().app;',
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(d.dn, {
                  "data-codacom-global-block": !0,
                  animated: (0, a.Wx)(),
                  code: "// lib/server.ts\n\nimport app from \"./app\";\nconst PORT = 3000;\n\napp.listen(PORT, () => {\n    console.log('Le serveur Express \xe9coute sur le port ' + PORT);\n})",
                }),
              }),
              (0, r.jsx)(a.LH, {
                children: (0, r.jsx)(a.xv, {
                  children:
                    '\xc0 partir de maintenant, bien que vous ne puissiez pas encore envoyer de requ\xeate HTTP, vous pouvez quand m\xeame tester le projet en ex\xe9cutant "npm run dev".',
                }),
              }),
              (0, r.jsxs)("nav", {
                style: {
                  marginTop: "3rem",
                  display: "grid",
                  gridAutoFlow: "column",
                  columnGap: "1.5rem",
                  justifyContent: "right",
                },
                children: [
                  (0, r.jsx)(a.LH, {
                    children: (0, r.jsx)("a", {
                      href: "/linux/develop",
                      children: (0, r.jsxs)(d.zx, {
                        frame: "hexagon",
                        animated: [(0, a.Wx)(), (0, a.aa)("x", -12, 0)],
                        onHoverAnimateIcons: !0,
                        tabIndex: -1,
                        title: "Go to develop",
                        children: [
                          (0, r.jsx)("span", { children: "Develop" }),
                          (0, r.jsx)(i.Z, {}),
                        ],
                      }),
                    }),
                  }),
                  (0, r.jsx)(a.LH, {
                    children: (0, r.jsx)(o(), {
                      href: "/linux/design",
                      children: (0, r.jsxs)(d.zx, {
                        frame: "hexagon",
                        animated: [(0, a.Wx)(), (0, a.aa)("x", -12, 0)],
                        onHoverAnimateIcons: !0,
                        tabIndex: -1,
                        title: "Go to design",
                        children: [
                          (0, r.jsx)("span", { children: "Design" }),
                          (0, r.jsx)(i.Z, {}),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      n.default = l;
    },
    7871: function (e, n, s) {
      "use strict";
      var r = s(2784),
        t = s(73),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var n, s = 1, r = arguments.length; s < r; s++)
                for (var t in (n = arguments[s]))
                  Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              return e;
            }).apply(this, arguments);
        },
        i = r.forwardRef(function (e, n) {
          var s = o(o({}, r.useContext(t.s)), e);
          return r.createElement(
            "svg",
            o(
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
            r.createElement("path", {
              d: "M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        });
      n.Z = i;
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 5625));
    }),
      (_N_E = e.O());
  },
]);
