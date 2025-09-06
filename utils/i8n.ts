import translationAS from "@/assets/locales/assamese/common.json";
import translationBN from "@/assets/locales/bengali/common.json";
import translationBRX from "@/assets/locales/bodo/common.json";
import translationDOI from "@/assets/locales/dogri/common.json";
import translationEN from "@/assets/locales/english/common.json";
import translationGU from "@/assets/locales/gujarati/common.json";
import translationHI from "@/assets/locales/hindi/common.json";
import translationKN from "@/assets/locales/kannada/common.json";
import translationKOK from "@/assets/locales/konkani/common.json";
import translationMAI from "@/assets/locales/maithili/common.json";
import translationML from "@/assets/locales/malayalam/common.json";
import translationMNI from "@/assets/locales/manipuri/common.json";
import translationMR from "@/assets/locales/marathi/common.json";
import translationNE from "@/assets/locales/nepali/common.json";
import translationOR from "@/assets/locales/odia/common.json";
import translationPA from "@/assets/locales/punjabi/common.json";
import translationSA from "@/assets/locales/sanskrit/common.json";
import translationSAT from "@/assets/locales/santhali/common.json";
import translationTA from "@/assets/locales/tamil/common.json";
import translationTE from "@/assets/locales/telugu/common.json";
import translationUR from "@/assets/locales/urdu/common.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            hi: { translation: translationHI },
            bn: { translation: translationBN },
            ta: { translation: translationTA },
            te: { translation: translationTE },
            mr: { translation: translationMR },
            gu: { translation: translationGU },
            kn: { translation: translationKN },
            ml: { translation: translationML },
            pa: { translation: translationPA },
            or: { translation: translationOR },
            mni: { translation: translationMNI },
            brx: { translation: translationBRX },
            doi: { translation: translationDOI },
            kok: { translation: translationKOK },
            ne: { translation: translationNE },
            sat: { translation: translationSAT },
            mai: { translation: translationMAI },
            sa: { translation: translationSA },
            as: { translation: translationAS },
            ur: { translation: translationUR },
        },
        fallbackLng: "en",
        supportedLngs: [
            "en",
            "hi",
            "bn",
            "ta",
            "te",
            "mr",
            "gu",
            "kn",
            "ml",
            "pa",
            "or",
            "mni",
            "brx",
            "doi",
            "kok",
            "ne",
            "sat",
            "mai",
            "sa",
            "as",
            "ur",
        ],
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;