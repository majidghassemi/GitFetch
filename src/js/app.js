const inputValue = document.querySelector(".container__input");
const submitBtn = document.querySelector(".container__btn");
const resultBox = document.querySelector(".container__result");
const resultBox2 = document.querySelector(".container__result2");
const res1 = document.querySelector(".container__res1");
const res2 = document.querySelector(".container__res2");
const res3 = document.querySelector(".container__res3");
const res4 = document.querySelector(".container__res4");
const res5 = document.querySelector(".container__res5");
const res6 = document.querySelector(".container__res6");
const res7 = document.querySelector(".container__res7");
const res8 = document.querySelector(".container__res8");
const res9 = document.querySelector(".container__res9");

const client_id = "Iv1.5e289fca2ba9c74c";
const client_secret = "29a4f4d258bce68c6f041951642989418446238a";

const fetchUser = async user => {
  const api_call = await fetch(
    `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`
  );
  const data = await api_call.json();
  return { data };
};

const showData = _ => {
  fetchUser(inputValue.value)
    .then(res => {
      if (res.data.message !== "Not Found") {
        res1.innerHTML = `Name: <span class="answer">${res.data.name}</span>`;
        res2.innerHTML = `Bio: <span class="answer">"${res.data.bio}"</span>`;
        res3.innerHTML = `Repos: <span class="answer">${
          res.data.public_repos
        }</span>`;
        res4.innerHTML = `Followers: <span class="answer">${
          res.data.followers
        }</span>`;
        res5.innerHTML = `Following: <span class="answer">${
          res.data.followers
        }</span>`;
        res6.innerHTML = `Company: <span class="answer">${
          res.data.company
        }</span>`;
        res7.innerHTML = `Location: <span class="answer">${
          res.data.location
        }</span>`;
        res8.innerHTML = `URL: <span class="answer"><a href="${
          res.data.html_url
        }"target="_blank">${res.data.html_url}</a></span>`;
      } else {
        alert(`This username: "${inputValue.value}" does'nt exist`);
      }
    })

    .catch(error => {
      alert(`Promise are rejected : ${error}`);
    });
};

submitBtn.addEventListener("click", showData);

document.addEventListener("keypress", event => {
  if (event.keyCode === 13 || event.which === 13) showData();
});
