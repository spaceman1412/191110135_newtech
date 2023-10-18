export const Posts = [
  {
    id: "4zbCsAxN0W",
    title: "My first post",
    content: "This is my first post!",
    timestamp: new Date(),
    comments: [],
  },
];

export function randomstring() {
  return (Math.random() + 1).toString(36).substring(7);
}
