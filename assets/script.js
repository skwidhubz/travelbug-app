const encodedParams = new URLSearchParams();
encodedParams.append("q", "Hello, world!");
encodedParams.append("target", "es");
encodedParams.append("source", "en");

const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": "7e93e346d2mshbf8a71decc7eeb0p104a79jsn20b4da9a402e",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  },
  body: encodedParams,
};

fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
