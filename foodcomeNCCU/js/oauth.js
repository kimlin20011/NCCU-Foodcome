// 參考 https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
//解譯url中的參數
let url_string = window.location.href;
let url = new URL(url_string);

let displayName = url.searchParams.get("displayName");


let oauthDisplayName = $('#oauthDisplayName');

alert(`user:${displayName}`);
console.log(`displayName:`);
console.log(displayName);


// //function appendli(displayName) {
//     var ul = document.getElementById("buttonUL");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(`${displayName}`));
//     ul.appendChild(li);
//   //}


//appendli(displayName);
//$('#buttonUL li:last').after(`<li class="tv-menu"><a class="tv-menu" href="#myPage" data-toggle="dropdown" >Hi, ${displayName}</a></li> `);

//oauthDisplayName.html(`<a id="oauthDisplayName" class="tv-menu" href="#myPage" data-toggle="dropdown">Hi, ${displayName}</a>`);

// $.get('/member/displayName', function (displayName) {
//     display_Name = displayName;
//     console.log(`displayName`);
//     console.log(display_Name);
//     oauthDisplayName.html(`<li class=""><a class="tv-menu">${display_Name}</a></li>`);
// });
