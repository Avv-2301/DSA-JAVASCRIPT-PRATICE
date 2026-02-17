//Gropn array of objects according to key

function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    (acc[obj[key]] ||= []).push(obj);
    return acc;
  }, {});
}

// const groupBy = (arr, key) => {
//   return arr.reduce(function (acc, obj) {
//     const groupKey = obj[key];

//     if (!acc[groupKey]) {
//       acc[groupKey] = [];
//     }

//     acc[groupKey].push(obj);
//     return acc;
//   }, {});
// };

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" },
];

const grouped = groupBy(users, "role");
console.log(grouped);
