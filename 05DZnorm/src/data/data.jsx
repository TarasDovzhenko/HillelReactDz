import faker from "faker";
import React from "react";

export const AUTHOR = [
  { id: faker.datatype.uuid(), name: "Bob Molchaliv" },
  { id: faker.datatype.uuid(), name: "Ivan Rvan" },
  { id: faker.datatype.uuid(), name: "Don Don" },
  { id: faker.datatype.uuid(), name: "Din Don" },

  { id: faker.datatype.uuid(), name: "Bom Bom" },
];

export const HASHTAGS = [
  {
    hashtag: "#dobro",
    value: "#dobro",
  },
  {
    hashtag: "#zlo",
    value: "#zlo",
  },
  {
    hashtag: "#UAnews",
    value: "#UAnews",
  },
  {
    hashtag: "#UA",
    value: "#UA",
  },

  {
    hashtag: "#hotNews",
    value: "#hotNews",
  },

  {
    hashtag: "#war",
    value: "#war",
  },

  {
    hashtag: "#showNews",
    value: "#showNews",
  },
];

export function makeNews() {
  const hashtagIndex = faker.random.number({
    min: 0,
    max: HASHTAGS.length - 1,
  });

  return {
    id: faker.datatype.uuid(),
    title: faker.commerce.product(),
    description: faker.lorem.sentences(2),
    content: faker.lorem.sentences(5),
    photo: faker.image.imageUrl(),
    author: AUTHOR[faker.random.number({ min: 0, max: AUTHOR.length - 1 })].id,

    hashtag: [
      HASHTAGS[hashtagIndex].value,
      HASHTAGS[hashtagIndex >= HASHTAGS.length - 1 ? 0 : hashtagIndex + 1]
        .value,
    ],
  };
}

export function makeNewsData(count = 10) {
  return Array(10)
    .fill("")
    .map(() => makeNews());
}
