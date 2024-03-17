import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Особенности",
    url: "#features",
  },
  {
    id: "1",
    title: "Цены",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Как использовать",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Дорожная карта",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Учетная запись",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Регистрация",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Генерация фотографий",
  "Улучшение фотографии",
  "Бесшовная интеграция",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Распознавание голоса",
    text: "Включите чат-боту возможность понимать голосовые команды и реагировать на них, облегчая пользователям взаимодействие с приложением без помощи рук.",
    date: "Май 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Геймификация",
    text: "Добавляйте игровые элементы, такие как значки или таблицы лидеров, чтобы стимулировать пользователей чаще взаимодействовать с чат-ботом.",
    date: "Май 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Настройка чат-бота",
    text: "Позвольте пользователям настраивать внешний вид и поведение чат-бота, делая взаимодействие с ним более привлекательным и увлекательным.",
    date: "Май 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Интеграция с API",
    text: "Разрешите чат-боту получать доступ к внешним источникам данных, таким как API погоды или API новостей, для предоставления более актуальных рекомендаций.",
    date: "Май 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Благодаря интеллектуальной автоматизации и первоклассной безопасности это идеальное решение для команд, стремящихся работать умнее.";

export const collabContent = [
  {
    id: "0",
    title: "Бесшовная интеграция",
    text: collabText,
  },
  {
    id: "1",
    title: "Интеллектуальная автоматизация",
  },
  {
    id: "2",
    title: "Первоклассная безопасность",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description:
      "Чат-бот с искусственным интеллектом, персонализированные рекомендации",
    price: "0",
    features: [
      "Чат-бот с искусственным интеллектом, который может понимать ваши запросы",
      "Персонализированные рекомендации, основанные на ваших предпочтениях",
      "Возможность изучать приложение и его функции без каких-либо затрат",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description:
      "Продвинутый чат-бот с искусственным интеллектом, приоритетная поддержка, панель аналитики",
    price: "9.99",
    features: [
      "Продвинутый чат-бот с искусственным интеллектом, который может понимать сложные запросы",
      "Аналитическая панель для отслеживания ваших разговоров",
      "Приоритетная поддержка для быстрого решения проблем",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description:
      "Пользовательский чат-бот с искусственным интеллектом, расширенная аналитика, выделенный аккаунт",
    price: null,
    features: [
      "Чат-бот с искусственным интеллектом, который может понимать ваши запросы",
      "Персонализированные рекомендации, основанные на ваших предпочтениях",
      "Возможность изучать приложение и его функции без каких-либо затрат",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Спрашивай о чем угодно",
    text: "Позволяет пользователям быстро находить ответы на свои вопросы без необходимости поиска по нескольким источникам.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Совершенствуйтесь каждый день",
    text: "Приложение использует обработку естественного языка, чтобы понимать запросы пользователей и предоставлять точные и релевантные ответы.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Соединяйтесь везде",
    text: "Подключайтесь к чат-боту с искусственным интеллектом из любого места, на любом устройстве, что делает его более доступным и удобным.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Быстрый отклик",
    text: "Позволяет пользователям быстро находить ответы на свои вопросы без необходимости поиска по нескольким источникам.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Спрашивай о чем угодно",
    text: "Позволяет пользователям быстро находить ответы на свои вопросы без необходимости поиска по нескольким источникам.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Совершенствуйтесь каждый день",
    text: "Приложение использует обработку естественного языка, чтобы понимать запросы пользователей и предоставлять точные и релевантные ответы.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
