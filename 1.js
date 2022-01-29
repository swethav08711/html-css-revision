// async function get(q, page) {
//   let g = await fetch(
//     `https://api.imgur.com/3/gallery/search/top/all/${page}?q=${q}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: "Client-ID 546c25a59c58ad7",
//         //   "Content-Type": "application/json",
//         //   Accept: "application/json",
//       },
//       mode: "cors",
//     }
//   )
//   data = await g.json()
//   return data
// }

let arr = [1, 2, 1, 2, 3]
let obj = {}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] in obj) {
    obj[arr[i]]++
  } else {
    obj[arr[i]] = 1
  }
}
console.log(obj)

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] == 1) {
    console.log(arr[i])
    break
  }
}
