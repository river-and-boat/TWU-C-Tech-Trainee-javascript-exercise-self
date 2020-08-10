async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const res = await fetch(url);
  if (res.status === 200) {
    const response = await res.json();
    document.writeln(response.name);
  } else {
    console.error(res.statusText);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
