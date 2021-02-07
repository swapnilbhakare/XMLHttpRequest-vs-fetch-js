const url = "https://jsonplaceholder.typicode.com/users";

function myAxios(method, url, body = null) {
  const headers = {
    "Content-Type": "application/json",
  };
  return fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  }).then((res) => res.json());
}
// myAxios("GET", url)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {});

myAxios("POST", url, { name: "swapnil", job: "softwere dev" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
