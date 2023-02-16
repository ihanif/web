# What is Pashto DAO?

Pashto DAO is a Decentralized Autonomous Organization (DAO). We aim to build an autonomous, transparent, and inclusive community for the adoption of the Pashto language. Each community member will have a say in the governorship without centralized leadership.

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

Please follow [main repo](https://github.com/timlrx/tailwind-nextjs-starter-blog)'s' **Quick Start Guide** section for general instructions. This section will only cover what to do to add our own(s) locale(s) to the site.

This repository is furnished with `ps` (Pashto) as defaultLocale and with `en` (English) as additional locale.

1. Checkout the `main` branch on this repo.
2. For each `.json` files (`404.json`, `common.json`, `headerNavLink.json`, ...) in your `/locales/[locale]` folder, provide a translation
3. Complete `data/siteMetadata.js`, adding the localized version for certain field (like `title` or `description`, for example.)
4. Complete the localization of `data/projectData.js`
5. Voilà ! You're done !

## Post

To have localized version for post, please follow this naming convention:

`myPost.md` : default locale

`myPost.[locale].md`: additional locales

Post can also be provided in only one locale (that doesn't need to be defaultLocale).
