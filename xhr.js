function myAxios(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
        console.log("Failed!");
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  });
}

const url = "https://jsonplaceholder.typicode.com/users";

// myAxios("GET", url);

myAxios("POST", url, {
  name: "swapnil",
  job: "Software Developer",
})
  .then((res) => {
    console.log("message from then block", res);
  })
  .catch((err) => {});
