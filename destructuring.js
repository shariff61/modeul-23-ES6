const arr = [
  "sharif",
  "jamal",
  "kamal",
  (karimulla = { id: 121, name: "kanun" }),
  "raihan",
  ["karim", "jaid", "kamrul"],
];
const [first, , , second, third] = arr;
console.log(first, second, ...third);
/////////////////////////////////////////////////////
// object
const objectExpend = {
  name: "kamal",
  id: 122,
  roll: 33,
  friend: { name: "rahim", id: 35 },
};
const {
  friend: { name, id },
} = objectExpend;
console.log(name, id);
////////////////////////////////////////////////////
