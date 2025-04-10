// Updated 2024-07-28: Added PashtoPal project entry at the top. Replaced mock projects with specific Pashto-related projects. Added placeholders for descriptions, images, links, and Pashto translations.
const projectsData = {
  en: [
    {
      title: 'PashtoPal Website',
      description:
        'It is a web application that allows users to chat with AI models in Pashto language.',
      imgSrc: '/static/images/projects/pashto_pashtopal.png', // Placeholder image path
      href: 'https://pashtopal.com/',
    },
    {
      title: 'Pashto Speech Recognition',
      description: `It is a web application that allows users to transcribe speech to text in Pashto language.`,
      imgSrc: '/static/images/projects/pashto_asr.png', // Placeholder image
      href: 'https://huggingface.co/spaces/ihanif/pashto-asr-v3', // Placeholder link
    },
    {
      title: 'Pashto Text-to-Speech (espeak-ng)',
      description: `It is a desktop application that allows users to convert text to speech in Pashto language.`,
      imgSrc: '/static/images/projects/pashto_espeak_ng.png', // Placeholder image
      href: 'https://github.com/espeak-ng/espeak-ng/pull/2152', // Placeholder link
    },
    {
      title: 'Pashto Phonetic Keyboard (Chrome Extension)',
      description: `It is a Chrome extension that allows users to type in Pashto language on any website using the phonetic keyboard.`,
      imgSrc: '/static/images/projects/pashto_phonetic_keyboard.png', // Placeholder image
      href: 'https://chromewebstore.google.com/detail/pashto-phonetic-keyboard/ppcgaplhlogjfgbkmdjkpoggahdoikio?hl=en', // Placeholder link
    },
    {
      title: 'Pashto Common Voice Project',
      description: `A crowdsourcing initiative to collect Pashto voice data for speech recognition and TTS.`,
      imgSrc: '/static/images/projects/pashto_common_voice.png', // Placeholder image
      href: 'https://commonvoice.mozilla.org/ps/speak', // Placeholder link
    },
    {
      title: 'Pashto Synthetic Voice Datasets',
      description: `A collection of synthetic voice datasets for Pashto language.`,
      imgSrc: '/static/images/projects/pashto_speech_3k.png', // Placeholder image
      href: 'https://huggingface.co/datasets/ihanif/pashto_speech_3k', // Placeholder link
    },
    {
      title: 'Pashto 100K Sentences Corpus',
      description: `A corpus of 100K sentences for Pashto language.`,
      imgSrc: '/static/images/projects/pashto_sentences_100k.png', // Placeholder image
      href: 'https://huggingface.co/datasets/ihanif/ps_news_2020_100K-sentences_processed', // Placeholder link
    },
  ],
  ps: [
    // Using placeholders for Pashto titles and descriptions
    {
      title: 'پښتو پال ویب پاڼه',
      description:
        'دا یوه ویب اپلیکیشن دی چې کارونکو ته اجازه ورکوي چې په پښتو ژبه کې د مصنوعي ذکاوت ماډلونو سره خبرې وکړي.',
      imgSrc: '/static/images/projects/pashto_pashtopal.png', // Placeholder image path
      href: 'https://pashtopal.com/',
    },
    {
      title: 'د پښتو وینا پیژندنه',
      description: `دا یوه ویب اپلیکیشن دی چې کارونکو ته اجازه ورکوي چې په پښتو ژبه کې وینا متن ته واړوي.`,
      imgSrc: '/static/images/projects/pashto_asr.png', // Placeholder image
      href: 'https://huggingface.co/spaces/ihanif/pashto-asr-v3', // Placeholder link
    },
    {
      title: 'د پښتو متن څخه وینا (espeak-ng)',
      description: `دا یو ډیسکټاپ اپلیکیشن دی چې کارونکو ته اجازه ورکوي چې په پښتو ژبه کې متن وینا ته واړوي.`,
      imgSrc: '/static/images/projects/pashto_espeak_ng.png', // Placeholder image
      href: 'https://github.com/espeak-ng/espeak-ng/pull/2152', // Placeholder link
    },
    {
      title: 'د پښتو فونیټیک کیبورډ (کروم اېکسټېنشن)',
      description: `دا د کروم توسیع ده چې کارونکو ته اجازه ورکوي چې په هر ویب پاڼه کې د فونیټیک کیبورډ په کارولو سره په پښتو ژبه کې ټایپ وکړي.`,
      imgSrc: '/static/images/projects/pashto_phonetic_keyboard.png', // Placeholder image
      href: 'https://chromewebstore.google.com/detail/pashto-phonetic-keyboard/ppcgaplhlogjfgbkmdjkpoggahdoikio?hl=en', // Placeholder link
    },
    {
      title: 'د پښتو عام غږ پروژه',
      description: `د پښتو غږ معلوماتو راټولولو لپاره د ګڼو خلکو ګډون نوښت چې د وینا پیژندنې او TTS لپاره کارول کیږي.`,
      imgSrc: '/static/images/projects/pashto_common_voice.png', // Placeholder image
      href: 'https://commonvoice.mozilla.org/ps/speak', // Placeholder link
    },
    {
      title: 'د پښتو مصنوعي غږ ډیټا سیټونه',
      description: `د پښتو ژبې لپاره د مصنوعي غږ ډیټاسیټونو ټولګه.`,
      imgSrc: '/static/images/projects/pashto_speech_3k.png', // Placeholder image
      href: 'https://huggingface.co/datasets/ihanif/pashto_speech_3k', // Placeholder link
    },
    {
      title: 'د پښتو ۱۰۰ زره جملو کارپس',
      description: `د پښتو ژبې لپاره د ۱۰۰ زره جملو کارپس.`,
      imgSrc: '/static/images/projects/pashto_sentences_100k.png', // Placeholder image
      href: 'https://huggingface.co/datasets/ihanif/ps_news_2020_100K-sentences_processed', // Placeholder link
    },
  ],
}

export default projectsData
