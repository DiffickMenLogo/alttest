export const KORZINA_CONVERSATIONS = [
  {
    id: 1,
    text: "Здарова уебан. Хочешь взорваться?",
    answers: [
      {
        text: "Да",
        goto: null,
        action: "blow",
      },
      {
        text: "Отьебись",
        goto: null,
        action: "blow",
      },
    ],
  },
];

export const KORZINA_NPC = {
  model: "A_M_M_FatLatin_01",
  name: "Корзина",
  title: "Просто пидор",

  position: {
    x: -104.16263580322266,
    y: -1056.949462890625,
    z: 27.6959228515625,
  },
  heading: 0.49473902583122253,
  conversations: KORZINA_CONVERSATIONS,
};
