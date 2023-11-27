import "i18next";

import en from "../locales/en/en-US.json";
import sv from "../locales/sv/sv-SE.json";
import fr from "../locales/fr/fr-FR.json";
import sc from "../locales/cn/zh-Hans.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "translation";
    // custom resources type
    resources: {
      translation: typeof en;
      sv: typeof sv;
      fr: typeof fr;
      "zh-CN": typeof sc;
    };
    // other
  }
}