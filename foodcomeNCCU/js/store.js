var config = {
    apiKey: "AIzaSyCv65zJvID5FYHkNveKhoWv5bO8V5_jf5U",
    authDomain: "foodcomenccu-8a5b5.firebaseapp.com",
    databaseURL: "https://foodcomenccu-8a5b5.firebaseio.com",
    projectId: "foodcomenccu-8a5b5",
    storageBucket: "foodcomenccu-8a5b5.appspot.com",
    messagingSenderId: "77228063107",
    appId: "1:77228063107:web:12a0f04637dd293ad15eb6"

};


var defaultProject = firebase.initializeApp(config);

var db = defaultProject.firestore();

var len1
var store = [];
var classList
var nameList

var url = location.href;


if (url.includes("/res")) {
    var r = url.split("/res");

    var res = r[1]



    var temp = r[0].split("?");



    name = decodeURIComponent(temp[1])
    // alert(name)

} else {
    var temp = url.split("?");


    name = decodeURIComponent(temp[1])



}





console.log('name', name, typeof (name), 'res', res)



$(document).ready(function () {

    $("#search").on("keydown", function (e) {

        window.history.pushState({}, 0, '../store.html');

        if (event.which == 13) {

            var value = $(this).val();
            // alert(value)



            db.collection('store').get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    store.push(doc.data());
                });

                classList = store.map(item => Object.values(item)[1]);
                nameList = store.map(item => Object.values(item)[4]);
                addList = store.map(item => Object.values(item)[0]);
                ratingList = store.map(item => Object.values(item)[6]);
                timeList = store.map(item => Object.values(item)[7]);
                // console.log('obj', typeof (nameList), nameList)
                var searchstr = value;
                console.log('searchstr', searchstr)
                var searcharr = searchstr.split('');
                var reg = new RegExp(searcharr.join('.*'));
                var resultarr = new Array();
                var res1 = res.split(',')
                console.log('res1', res1, typeof (res1))
                res1.forEach(function (element) {
                    element = (parseInt(element, 10))
                    alert(nameList[element])
                    console.log('element', element, nameList[element], classList[element], timeList[element])
                    $('#newstore').html('<div class="col-md-3 col-sm-4 col-xs-12" id=yoshinoya><div class="tv-dishes-img"><img src="images/' + nameList[element] + '.jpg" class="width-100 img-responsive"></div><div class="tv-dishes-info"><h5>' + nameList[element] + '</h5><span>' + classList[element] + '</span><p>' + timeList[element] + '</p></div></div>')
                });






            });


        }



    });


});