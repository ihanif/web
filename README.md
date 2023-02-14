# Motivation

Around 60 million people over the world speak the Pashto language. However, with such prominent speakers, it still needs to be considered a low-resource language because of the low availability of digital content online.

# Goal

Our goal is to create a community for advancing the Pashto language adoption in digital products (Automatic Speech Recognition, transcription, digital dictionaries, grammar correction, text-to-speech systems etc.)

# Process

We aim to create open source (publicly available) projects with the help of volunteers. We will create a timeline to achieve specific goals by each quarter of the year.

# Challenges

We must tackle some challenges to uplift Pashto from a low resource to a web-rich language. However, one of the biggest challenges for content creation in the Pashot language is typing grammatically correct sentences using the available keyboards.

Our first goal is to create an automatic speech recognition system in Pashto that will transcribe spoken words into written Pashto. We need training data in the Pashto language to create such a system. Usually, this training data is created through another open-source project called [Mozilla Common Voice](https://commonvoice.mozilla.org/ps). Unfortunately, Pashto is one of those few languages with no data in the Common Voice project.

Our top challenges, in order of priority, are as follows:

1. Complete translation of Common Voice portal to Pashto
2. Create sentences in the Pashto language for Common Voice
3. Collect utterances against sentences collected for Common Voice
4. Train/fine-tune the ASR AI model
5. Devise a unified approach towards Pashto langue corpus creation

# Contribution

## Quick Start Guide

Please follow [main repo](https://github.com/timlrx/tailwind-nextjs-starter-blog)'s' **Quick Start Guide** section for general instructions. This section will only cover what to do to add your own(s) locale(s) to the site.

This repository is furnished with `en` as defaultLocale and with `fr` as additional locale. You can provide as many locales as you want, you'll just add the corresponding translation.

If you add a new translations in `locales` folder, please PR this repo. That might help next users / forks.

1. Checkout the `demo/next-translate` branch on this repo. `Master` is kept up to date with [`timlrx/tailwind-nextjs-starter-blog`](https://github.com/timlrx/tailwind-nextjs-starter-blog)
2. Add your own locales and default locale in `i18n.json`
3. Add a folder for every locale in the `locales` folder.
4. For each `.json` files (`404.json`, `common.json`, `headerNavLink.json`, ...) in your `/locales/[locale]` folder, provide a translation
5. Complete `data/siteMetadata.js`, adding the localized version for certain field (like `title` or `description`, for example.)
6. Complete the localization of `data/projectData.js`
7. Voilà ! You're done !

## Post

To have localized version for post, please follow this naming convention:

`myPost.md` : default locale

`myPost.[locale].md`: additional locales

Post can be provided in only one locale (that doesn't need to be defaultLocale).
