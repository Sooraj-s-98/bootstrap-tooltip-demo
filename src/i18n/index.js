
import axios from "axios";
import { createI18n } from "vue-i18n";


const i18n = createI18n({
  fallbackLocale: "en",
  locale: "en",
  silentTranslationWarn: false,
  allowComposition: false,
  legacy: false,
  globalInjection: true,
  messages: {
    en: { tooltipText: "tooltip text" },
  },
});

export default i18n;
