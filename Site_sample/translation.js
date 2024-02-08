const defaultLocale = "fr";
// The active locale
let locale;
// Gets filled with active locale translations
let translations = {};

document.addEventListener("DOMContentLoaded", () => {
    setLocale(defaultLocale);
    bindLocaleSwitcher(defaultLocale);
  });

const bindLocaleSwitcher = (initialValue) => {
    const switcher = document.querySelector("[data-i18n-switcher]");
    switcher.value = initialValue;
    switcher.onchange = (e) => {
      // Set the locale to the selected option[value]
      setLocale(e.target.value);
    };
  }


const  setLocale = async (newLocale) => {
    if (newLocale === locale) return;
    const newTranslations = await fetchTranslationsFor(newLocale);
    locale = newLocale;
    translations = newTranslations;
    translatePage();
}

const fetchTranslationsFor = async (newLocale) => {
    const response = await fetch(`./${newLocale}.json`);
    return await response.json();
  }

const translatePage = () => {
    document
      .querySelectorAll("[data-i18n]")
      .forEach(translateElement);
}

const translateElement = (element) => {
    const key = element.getAttribute("data-i18n");
    const translation = translations[key];
    element.innerText = translation;
}


function return_day_week_fr(dayNumber){

    switch(dayNumber){
        case 0:
            return "Dimanche";
        case 1:
            return "Lundi";
        case 2:
            return "Mardi";
        case 3:
            return "Mercredi";
        case 4:
            return "Jeudi";
        case 5:
            return "Vendredi";
        case 6:
            return "Samedi";
    }

}

function return_month_fr(monthNumber){
 
    switch(monthNumber){
        case 0:
            return "Janvier";
        case 1:
            return "Février";
        case 2:
            return "Mars";
        case 3:
            return "Avril";
        case 4:
            return "Mai";
        case 5:
            return "Juin";
        case 6:
            return "Juillet";
        case 7:
            return "Août";
        case 8:
            return "Septembre";
        case 9:
            return "Octobre";
        case 10:
            return "Novembre";
        case 11:
            return "Décembre";
    }

}