
let basics = document.querySelector(".basics");
let story = document.querySelector(".story");
let header = document.querySelector(".header");

let contactInfo = document.createElement("div");
let storyInfo = document.createElement("div");



// function reqListener () {
//   let data = JSON.parse(this.responseText);
//   let info = `Hi, my name is ${data.name} and I am from ${data.location}.`;
//   console.log(info);
// }
//
// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/smzajac");
// req.addEventListener("load", reqListener);
// req.send();


// 2. Create our Ajax Request
function reqListener () {
  let data = JSON.parse(this.responseText);

    let name = (data.name);
    let git = (data.url);
    let email = (data.blog);
    let company = (data.company);
    let picture = data.avatar_url;

    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");


    li1.textContent = name;
    li2.textContent = git;
    li3.textContent = email;
    li4.textContent = company;
    basics.appendChild(li1);
    basics.appendChild(li2);
    basics.appendChild(li3);
    basics.appendChild(li4);




    contactInfo.innerHTML = `
    `;

    storyInfo.innerHTML = `

    <p> random text here</p>
    <img src="${picture}">

    `;

    header.append(name);
    basics.appendChild(contactInfo);
    story.appendChild(storyInfo);


}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/smzajac");
req.addEventListener("load",reqListener);
req.send();



// contactInfo.innerHTML = `
// <img src="${picture}">
// `;
//
// storyInfo.innerHTML = `
// text
//
// `;
//
// basics.appendChild(contactInfo);
// story.appendChild(storyInfo);




// {
//   "login": "smzajac",
//   "id": 27073986,
//   "avatar_url": "https://avatars0.githubusercontent.com/u/27073986?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/smzajac",
//   "html_url": "https://github.com/smzajac",
//   "followers_url": "https://api.github.com/users/smzajac/followers",
//   "following_url": "https://api.github.com/users/smzajac/following{/other_user}",
//   "gists_url": "https://api.github.com/users/smzajac/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/smzajac/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/smzajac/subscriptions",
//   "organizations_url": "https://api.github.com/users/smzajac/orgs",
//   "repos_url": "https://api.github.com/users/smzajac/repos",
//   "events_url": "https://api.github.com/users/smzajac/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/smzajac/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Sarah Zajac",
//   "company": "Nova Cove",
//   "blog": "sarahzajac.com",
//   "location": "Indianapolis",
//   "email": null,
//   "hireable": null,
//   "bio": "Something Fierce. ",
//   "public_repos": 17,
//   "public_gists": 0,
//   "followers": 0,
//   "following": 0,
//   "created_at": "2017-04-08T14:41:03Z",
//   "updated_at": "2017-08-07T17:41:29Z"
// }
