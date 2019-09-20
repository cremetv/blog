/*
* Get Instagram Access Token
*/
const getToken = () => {
  return new Promise((resolve, reject) => {
    let url = '../instagram.json';
    const xhr = new XMLHttpRequest();

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.addEventListener('load', function() {
      console.log(this.response);
      let response = JSON.parse(this.response);
      if (response.accessToken) {
        resolve(response.accessToken);
      } else {
        reject('error');
      }
    });

    xhr.send();
  });
}


/*
* Get instagram pictures
*/
const getInstaFeed = (token) => {
  const api = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', api, true);
  xhr.withCredentials = true;
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
  xhr.setRequestHeader('Access-Control-Allow-Credentials', true);
  xhr.addEventListener('load', function() {
    let data = JSON.parse(this.repsone);
    console.log(data);
    if (data) {

      let images = data.data;

      let i = 0;
      images.reverse().forEach(image => {
        if (i >= 5) return;
        let description = image.caption.text;
        let link = image.link;
        let src = image.images.standard_resolution.url;

        console.log(description);
        console.log(link);
        console.log(src);

        i++;
      });

    }
  });

  xhr.send();
}


document.addEventListener("DOMContentLoaded", function() {

  getInstaFeed('8034804456.64a966e.d2637c84d7f749dabfe3f93962bfb391');

  // const getAccessToken = getToken();
  //
  // getAccessToken.then(token => {
  //   getInstaFeed(token);
  // }, err => {
  //   console.log(`error: ${err}`);
  // });

});
