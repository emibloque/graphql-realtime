export default [
  {
    id: 1,
    author: { id: 1, name: "charlotte" },
    likes: 28,
    image: "/images/cassidy-mills-425636-unsplash.jpg",
    comments: [
      {
        id: 1,
        author: { id: 1, name: "charlotte" },
        text: "Hey there!"
      },
      {
        id: 2,
        author: { id: 2, name: "laosemat" },
        text: "Sunrises are always beautiful."
      },
      {
        id: 3,
        author: { id: 3, name: "gustavo" },
        text: "Nice shot 🔥"
      }
    ]
  },
  {
    id: 2,
    author: { id: 4, name: "kevin" },
    likes: 43,
    image: "/images/eamonn-maguire-57073-unsplash.jpg",
    liked: true,
    comments: [
      {
        id: 4,
        author: { id: 4, name: "kevin" },
        text: "With the family."
      },
      {
        id: 5,
        author: { id: 1, name: "charlotte" },
        text: "Omg"
      }
    ]
  },
  {
    id: 3,
    author: { id: 5, name: "doris" },
    likes: 64,
    image: "/images/ian-parker-546258-unsplash.jpg",
    comments: [
      {
        id: 6,
        author: { id: 5, name: "doris" },
        text: "Alone in the wild"
      }
    ]
  },
  {
    id: 4,
    author: { id: 3, name: "gustavo" },
    likes: 49,
    image: "/images/maciej-ostrowski-1133088-unsplash.jpg",
    comments: [
      {
        id: 7,
        author: { id: 3, name: "gustavo" },
        text: "Diving..."
      }
    ]
  }
];
