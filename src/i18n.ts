import i18next from "i18next";
import enNs1 from "./assets/i18n/en/ns1.json";
import enNs2 from "./assets/i18n/en/ns2.json";
import nlNs1 from "./assets/i18n/nl/ns1.json";
import nlNs2 from "./assets/i18n/nl/ns2.json";
import {initReactI18next} from "react-i18next";

export const defaultNS = 'ns1';

i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    defaultNS,
    resources: {
        en: {
            ns1: enNs1,
            ns2: enNs2,
        },
        nl: {
            ns1: nlNs1,
            ns2: nlNs2,
        },
    },
});

export default i18next;