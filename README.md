# mtielitsignebi.ge

## Dev Setup

1. Use regular `npm` or install `yarn` globally by running `npm install --global yarn`
2. Run `yarn` or `npm install` in project root to install repo dependencies.
3. Run `yarn start` or `npm run start` to start `local` developer server.

## Available Pages

- [Home](https://www.mtielitsignebi.ge/home)

- [About](https://www.mtielitsignebi.ge/about)

- [News](https://www.mtielitsignebi.ge/events)

- [Donation](https://www.mtielitsignebi.ge/donate)

- [Admin](https://www.mtielitsignebi.ge/login)

## Guides

### How to Add a New Page

In order to add a new page, navigate to `src/pages/App.tsx` and add a new `Page` with the appropriate `route` and `component`.

### How to Handle Translations

This project uses `i18next` for handling translations. Below is a guide on how to update the `translations.json` file located at `src/assets`.

For example, to add a new text content with key - "welcome":

```json
{
  "en": {
    "welcome": "Welcome", // New key added
    "menu": {
      "home": "Home",
      "about": "About",
      "events": "News"
    }
  },
  "ka": {
    "welcome": "მოგესალმებით", // New key added
    "menu": {
      "home": "მთავარი",
      "about": "ჩვენ შესახებ",
      "events": "სიახლეები"
    }
  }
}
```

#### Usage

```JavaScript
import { useTranslation } from 'react-i18next';

// Use the useTranslation hook to get the t function
const { t } = useTranslation();

// Use the t function to get the translated text for the specified key:
<p>{t(welcome)}</p>

```

### Admin Dashboard

The project uses the `Control-X` library as Content Management System. Please ensure that you have access to this [link](https://github.com/users/etlyn/packages/npm/package/control-x)
