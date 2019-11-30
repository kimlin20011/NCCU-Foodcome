
let oauthDisplayName = $('#oauthDisplayName');
let display_Name = "";

$.get('/member/displayName', function (displayName) {
    display_Name = displayName;
    console.log(`displayName`);
    console.log(display_Name);
    oauthDisplayName.html(`<li class=""><a class="tv-menu">${display_Name}</a></li>`);
});
