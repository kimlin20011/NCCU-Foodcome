$(document).ready(function () {
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

    var store = [];
    var classList
    var nameList





    db.collection('store').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            store.push(doc.data());
        });

        classList = store.map(item => Object.values(item)[1]);
        foodList = store.map(item => Object.values(item)[1]);
        nameList = store.map(item => Object.values(item)[4]);
        addList = store.map(item => Object.values(item)[0]);
        noList = store.map(item => Object.values(item)[5]);
        ratingList = store.map(item => Object.values(item)[6]);
        timeList = store.map(item => Object.values(item)[7]);
        // console.log('obj', typeof (nameList), nameList)

        var url = location.href;


        if (url.includes("/res")) {
            var r = url.split("/res");

            var res = r[1]

            var temp = r[0].split("?");

            name = decodeURIComponent(temp[1])
            var res1 = res.split(',')
            console.log('name', name, typeof (name), 'res', res)


            console.log('res1', res1, typeof (res1))

            res1.forEach(function (element) {
                element = (parseInt(element, 10))
                // alert(nameList[element])
                console.log('element', element, nameList[element], classList[element], timeList[element])
                $('#newstore').append('<div class="col-md-3 col-sm-4 col-xs-12" id='+noList[element]+'><div class="tv-dishes-img"><img src="images/' + nameList[element] + '.jpg" class="width-100 img-responsive"></div><div class="tv-dishes-info"><h5>' + nameList[element] + '</h5><span>' + classList[element] + '</span><p>' + timeList[element] + '</p></div></div>')
            });


        } else {
            var temp = url.split("?");


            name = decodeURIComponent(temp[1])
            console.log('name', name, typeof (name), 'res', res)

        }




        $("#search").on("keydown", function (e) {


            if (event.which == 13) {

                var value = $(this).val();
                var searchstr = value;
                console.log('searchstr', searchstr)
                var searcharr = searchstr.split('');
                var reg = new RegExp(searcharr.join('.*'));
                var resultarr = new Array();
                // alert(value)
                for (var i = 0; i < nameList.length; i++) {
                    if (reg.exec(nameList[i])) {
                        if (resultarr.includes(nameList[i]) == false) {
                            // resultarr.push(nameList[i]);
                            console.log(nameList[i])
                            if(resultarr.length<8 && resultarr.includes(i)==false){
                                resultarr.push(i);
                            }

                        }
                    }
                }
                for (var i = 0; i < classList.length; i++) {
                    if (reg.exec(classList[i])) {
                        if (resultarr.includes(classList[i]) == false) {
                            // resultarr.push(nameList[i]);
                            console.log(nameList[i])
                            if(resultarr.length<8 && resultarr.includes(i)==false){
                                resultarr.push(i);
                            }
                           
                        }

                    }
                }
                for (var i = 0; i < foodList.length; i++) {
                    if (reg.exec(classList[i])) {
                        if (resultarr.includes(foodList[i]) == false) {
                            // resultarr.push(nameList[i]);
                            console.log(nameList[i])
                            if(resultarr.length<8 && resultarr.includes(i)==false){
                                resultarr.push(i);
                            }
                        }

                    }
                }
                console.log('resultarr', resultarr);
                window.location = './store.html?' + name + '/res' + resultarr;






            }



        });





    });




});