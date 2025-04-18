import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import english from "@/i18n/en.json";
import chinese from "@/i18n/zh-CN.json";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    resources: {
        "en": {
            translation: english
        },
        "zh-CN": {
            translation: chinese
        }
    },
    react: {
        useSuspense: false,
    },
    // debug: true
});

export default i18n;