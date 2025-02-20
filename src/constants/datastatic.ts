export const dataStatic = {
  looping: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  onboardings: [
    {
      id: 1,
      title: "The biggest international and local film streaming",
      subtitle:
        "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. ",
    },
    {
      id: 2,
      title: "Offers ad-free viewing of high quality",
      subtitle:
        "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. ",
    },
    {
      id: 3,
      title: "Our service brings together your favorite series",
      subtitle:
        "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. ",
    },
  ],
  categories: ["Now Playing", "Up Coming", "Watch Online"],
};
export const key = localStorage.getItem("key");

const existingUsernames = ["admin", "user123", "testuser"];

export const isUsernameTaken = async (username: string) => {
  return existingUsernames.includes(username);
};