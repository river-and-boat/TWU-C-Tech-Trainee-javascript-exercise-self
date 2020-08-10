function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  // end -->
  return fetch(url).then(res => {
    if (res.status === 200) {
      return res.json();
    }
    return res.statusText;
  });
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
