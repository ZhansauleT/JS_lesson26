

function getData(url, cb) {
  fetch(url)
    .then(response => response.json())
    .then(result => cb(result));
}

getData("./db.json", (user) => {return user;});

user = getData("./db.json");

const sendData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(response => response.json());
};

sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user))
    .then(data => {
      console.log(data);
    });