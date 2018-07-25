const shirts = {
  shirt1: {
    text: "Shirt 1",
    price: 0,
    description: "Shirt Description",
    choiceKey: "shirt1",
    orderKey: "shirt",
    imageCount: 2
  },
  shirt2: {
    text: "Shirt 2",
    price: 0,
    description: "Shirt Description",
    choiceKey: "shirt2",
    orderKey: "shirt",
    imageCount: 2
  },
  shirt3: {
    text: "Shirt 3",
    price: 0,
    description: "Shirt Description",
    choiceKey: "shirt3",
    orderKey: "shirt",
    imageCount: 2
  },
  shirt4: {
    text: "Shirt 4",
    price: 0,
    description: "Shirt Description",
    choiceKey: "shirt4",
    orderKey: "shirt",
    imageCount: 4
  },
  shirt5: {
    text: "Shirt 5",
    price: 0,
    description: "Shirt Description",
    choiceKey: "shirt5",
    orderKey: "shirt",
    imageCount: 2
  },
  shirt6: {
    text: "Shirt 6",
    price: 0,
    description: "Shirt Description",
    choiceKey: "shirt6",
    orderKey: "shirt",
    imageCount: 3
  },
  shirt7: {
    text: "Shirt 7",
    price: 0,
    description: "Shirt Description",
    choiceKey: "shirt7",
    orderKey: "shirt",
    imageCount: 3
  },
  ownShirt: {
    text: "Own shirt",
    price: 0,
    description: "Take a pic of the shirt you want Norma to cut",
    choiceKey: "ownShirt",
    orderKey: "shirt",
    imageCount: 1
  }
}

const sizes = {
  small: {
    text: "S",
    choiceKey: "small",
    orderKey: "size",

  },
  medium: {
    text: "M",
    choiceKey: "medium",
    orderKey: "size",

  },
  large: {
    text: "L",
    choiceKey: "large",
    orderKey: "size",

  },
  xl: {
    text: "XL",
    choiceKey: "xl",
    orderKey: "size",

  },
  xxl: {
    text: "XXL",
    choiceKey: "xxl",
    orderKey: "size",

  },
}

const cuts = {
  cut1: {
    text: "Cut 1",
    price: 7,
    choiceKey: "cut1",
    orderKey: "cut",
    imageCount: 2
  },
  cut2: {
    text: "Cut 2",
    price: 7,
    choiceKey: "cut2",
    orderKey: "cut",
    imageCount: 2
  },
  cut3: {
    text: "Cut 3",
    price: 7,
    choiceKey: "cut3",
    orderKey: "cut",
    imageCount: 2
  },
  cut4: {
    text: "Cut 4",
    price: 7,
    choiceKey: "cut4",
    orderKey: "cut",
    imageCount: 2
  },
  cut5: {
    text: "Cut 5",
    price: 7,
    choiceKey: "cut5",
    orderKey: "cut",
    imageCount: 1
  },
  cut6: {
    text: "Cut 6",
    price: 7,
    choiceKey: "cut6",
    orderKey: "cut",
    imageCount: 2
  },
  cut7: {
    text: "Cut 7",
    price: 7,
    choiceKey: "cut7",
    orderKey: "cut",
    imageCount: 2
  },
  cut8: {
    text: "Cut 8",
    price: 7,
    choiceKey: "cut8",
    orderKey: "cut",
    imageCount: 2
  },
  cut9: {
    text: "Cut 9",
    price: 7,
    choiceKey: "cut9",
    orderKey: "cut",
    imageCount: 2
  },
  cut10: {
    text: "Cut 10",
    price: 7,
    choiceKey: "cut10",
    orderKey: "cut",
    imageCount: 2
  },
  cut11: {
    text: "Cut 11",
    price: 7,
    choiceKey: "cut11",
    orderKey: "cut",
    imageCount: 2
  },
  cut12: {
    text: "Cut 12",
    price: 7,
    choiceKey: "cut12",
    orderKey: "cut",

    imageCount: 2
  },
  cut13: {
    text: "Cut 13",
    price: 7,
    choiceKey: "cut13",
    orderKey: "cut",

    imageCount: 3
  },
  cut14: {
    text: "Cut 14",
    price: 7,
    choiceKey: "cut14",
    orderKey: "cut",

    imageCount: 2
  },
  cut15: {
    text: "Cut 15",
    price: 7,
    choiceKey: "cut15",
    orderKey: "cut",

    imageCount: 2
  },
  cut16: {
    text: "Cut 16",
    price: 10,
    choiceKey: "cut16",
    orderKey: "cut",

    imageCount: 2
  },
  cut17: {
    text: "Cut 17",
    price: 10,
    choiceKey: "cut17",
    orderKey: "cut",

    imageCount: 2
  },
  cut18: {
    text: "Cut 18",
    price: 10,
    choiceKey: "cut18",
    orderKey: "cut",

    imageCount: 2
  },
  cut19: {
    text: "Cut 19",
    price: 10,
    choiceKey: "cut19",
    orderKey: "cut",

    imageCount: 2
  },
  cut20: {
    text: "Cut 20",
    price: 10,
    choiceKey: "cut20",
    orderKey: "cut",
    imageCount: 2
  },
}

const choices = {
  shirts: [
    shirts.ownShirt,
    shirts.shirt1,
    shirts.shirt2,
    shirts.shirt3,
    shirts.shirt4,
    shirts.shirt5,
    shirts.shirt6,
    shirts.shirt7,
  ],
  sizes: [
    sizes.small,
    sizes.medium,
    sizes.large,
    sizes.xl,
    sizes.xxl,
  ],
  cuts: [
    cuts.cut1,
    cuts.cut2,
    cuts.cut3,
    cuts.cut4,
    cuts.cut5,
    cuts.cut6,
    cuts.cut7,
    cuts.cut8,
    cuts.cut9,
    cuts.cut10,
    cuts.cut11,
    cuts.cut12,
    cuts.cut13,
    cuts.cut14,
    cuts.cut15,
    cuts.cut16,
    cuts.cut17,
    cuts.cut18,
    cuts.cut19,
    cuts.cut20,
  ],
  custom: [
    {
      neck: [
        {
          text: "Neck Style 1",
          choiceKey: "neck1",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },{
          text: "Neck Style 2",
          choiceKey: "neck2",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },
      ],
    },
    {
      sleeves: [
        {
          text: "Sleeves Style 1",
          choiceKey: "sleeves1",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },{
          text: "Sleeves Style 2",
          choiceKey: "sleeves2",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },
      ],
    },
    {
      front: [
        {
          text: "Front Style 1",
          choiceKey: "front1",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },{
          text: "Front Style 2",
          choiceKey: "front2",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },
      ],
    },
    {
      back: [
        {
          text: "Back Style 1",
          choiceKey: "back1",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },{
          text: "Back Style 2",
          choiceKey: "back2",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },
      ],
    },
    {
      sides: [
        {
          text: "Sides Style 1",
          choiceKey: "sides1",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },{
          text: "Sides Style 2",
          choiceKey: "sides2",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },
      ],
    },
    {
      bottom: [
        {
          text: "Bottom Style 1",
          choiceKey: "bottom1",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },{
          text: "Bottom Style 2",
          choiceKey: "bottom2",
          image: "https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        },
      ],
    },
  ]
}

const steps = {
  step0: {
    text: "Choose your shirt",
    choices: choices.shirts
  },
  step1: {
    text: "Choose your cut",
    choices: choices.cuts
  },
}

const stepList = [
  steps.step0,
  steps.step1,
  steps.step2,
]

export const DB = {
  stepList: stepList,
  steps: steps,
  choices: choices,
  shirts: shirts,
  sizes: sizes,
  cuts: cuts,
}
