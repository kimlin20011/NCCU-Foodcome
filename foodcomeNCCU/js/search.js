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
        // console.log(store)
        classList = store.map(item => Object.values(item)[1]);
        foodList = store.map(item => Object.values(item)[2]);
        console.log(foodList)
        nameList = store.map(item => Object.values(item)[4]);
        addList = store.map(item => Object.values(item)[0]);
        noList = store.map(item => Object.values(item)[5]);
        ratingList = store.map(item => Object.values(item)[6]);
        timeList = store.map(item => Object.values(item)[7]);
        priceList = store.map(item => Object.values(item)[8]);

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
                // console.log('element', element, nameList[element], classList[element], timeList[element])
                if (typeof (temp[1]) != 'undefined' && temp[1] != 'undefined') {
                    $('#newstore').append('<div class="col-md-3 col-sm-4 col-xs-12" id=' + noList[element] + '><a href="../examples/' + noList[element] + '.html?'+name+'"><div class="tv-dishes-img"><img src="images/' + nameList[element] + '.jpg" class="width-100 img-responsive"></div><div class="tv-dishes-info"><h5>' + nameList[element] + '</h5><span>' + ratingList[element] + '顆星' + '</span><p>' + '營業時間:' + timeList[element] + '</p></div></a></div>')

                }
                else{
                    $('#newstore').append('<div class="col-md-3 col-sm-4 col-xs-12" id=' + noList[element] + '><a href="../examples/' + noList[element] + '.html"><div class="tv-dishes-img"><img src="images/' + nameList[element] + '.jpg" class="width-100 img-responsive"></div><div class="tv-dishes-info"><h5>' + nameList[element] + '</h5><span>' + ratingList[element] + '顆星' + '</span><p>' + '營業時間:' + timeList[element] + '</p></div></a></div>')

                }

            });

            $('#ratingSelect').on('change', function () {
                $('#priceSelect').val('')
                var v1 = this.value;
                $('#newstore').html('')
                res1.forEach(function (element) {

                    element = (parseInt(element, 10))
                    // alert(nameList[element])
                    // console.log('element', element, ratingList[element], priceList[element])
                    var r1 = (parseInt(ratingList[element], 10))
                    if (v1 == '') {
                        $('#newstore').append('<div class="col-md-3 col-sm-4 col-xs-12" id=' + noList[element] + '><a href="../examples/' + noList[element] + '.html"><div class="tv-dishes-img"><img src="images/' + nameList[element] + '.jpg" class="width-100 img-responsive"></div><div class="tv-dishes-info"><h5>' + nameList[element] + '</h5><span>' + ratingList[element] + '顆星' + '</span><p>' + '營業時間:' + timeList[element] + '</p></div></a></div>')

                    } else {
                        if (r1 == v1) {

                            $('#newstore').append('<div class="col-md-3 col-sm-4 col-xs-12" id=' + noList[element] + '><a href="../examples/' + noList[element] + '.html"><div class="tv-dishes-img"><img src="images/' + nameList[element] + '.jpg" class="width-100 img-responsive"></div><div class="tv-dishes-info"><h5>' + nameList[element] + '</h5><span>' + ratingList[element] + '顆星' + '</span><p>' + '營業時間:' + timeList[element] + '</p></div></a></div>')

                        }
                    }
                });
            });
            $('#priceSelect').on('change', function () {
                $('#ratingSelect').val('')

                var p1 = this.value;
                console.log('p1', p1, typeof (p1))
                $('#newstore').html('')
                res1.forEach(function (element) {

                    element = (parseInt(element, 10))

                    var p11 = (parseInt(priceList[element], 10))
                    if (p1 == '') {
                        $('#newstore').append('<div class="col-md-3 col-sm-4 col-xs-12" id=' + noList[element] + '><a href="../examples/' + noList[element] + '.html'+name+'"><div class="tv-dishes-img"><img src="images/' + nameList[element] + '.jpg" class="width-100 img-responsive"></div><div class="tv-dishes-info"><h5>' + nameList[element] + '</h5><span>' + ratingList[element] + '顆星' + '</span><p>' + '營業時間:' + timeList[element] + '</p></div></a></div>')

                    } else {
                       
                        if (p11 == p1) {

                            $('#newstore').append('<div class="col-md-3 col-sm-4 col-xs-12" id=' + noList[element] + '><a href="../examples/' + noList[element] + '.html"><div class="tv-dishes-img"><img src="images/' + nameList[element] + '.jpg" class="width-100 img-responsive"></div><div class="tv-dishes-info"><h5>' + nameList[element] + '</h5><span>' + ratingList[element] + '顆星' + '</span><p>' + '營業時間:' + timeList[element] + '</p></div></a></div>')

                        }
                    }


                });
            });



        } else {
            var temp = url.split("?");


            name = decodeURIComponent(temp[1])
            console.log('name', name, typeof (name), 'res', res)

        }




        $("#search").on("keydown", function (e) {


            if (event.which == 13) {

                var value = $(this).val();
                console.log('value', value)

                var searchstr = value;
                var searcharr = searchstr.split('');
                console.log('searchstr', searchstr)

                var reg = new RegExp(searcharr.join('.*'));
                console.log('reg', reg)

                var resultarr = new Array();
                // alert(value)
                for (var i = 0; i < nameList.length; i++) {
                    if (reg.exec(nameList[i])) {
                        if (resultarr.includes(nameList[i]) == false) {
                            // resultarr.push(nameList[i]);
                            console.log(nameList[i])
                            if (resultarr.length < 8 && resultarr.includes(i) == false) {
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
                            if (resultarr.length < 8 && resultarr.includes(i) == false) {
                                resultarr.push(i);
                            }

                        }

                    }
                }
                for (var i = 0; i < foodList.length; i++) {
                    if (reg.exec(foodList[i])) {
                        if (resultarr.includes(foodList[i]) == false) {
                            // resultarr.push(nameList[i]);
                            console.log(nameList[i])
                            if (resultarr.length < 8 && resultarr.includes(i) == false) {
                                resultarr.push(i);
                            }
                        }

                    }
                }
                console.log('resultarr', resultarr);
                window.location = '../store.html?' + name + '/res' + resultarr;






            }



        });

        $('#serch1').click(function () {

            // alert('click')
            var valu1 = $(exampleFormControlInput1).val();
            console.log('value', valu1, typeof (valu1))
            var searchstr = valu1;
            var searcharr = searchstr.split(' ');
            console.log('searcharr', searcharr)

            var reg = new RegExp(searcharr.join('.*'));
            console.log(typeof (reg), 'reg', reg)
            var resultarr = new Array();
            // console.log(nameList,typeof(nameList))




            for (var i = 0; i < nameList.length; i++) {
                if (reg.exec(nameList[i])) {
                    if (resultarr.includes(nameList[i]) == false) {
                        // resultarr.push(nameList[i]);

                        if (resultarr.length < 8 && resultarr.includes(i) == false) {
                            resultarr.push(i);
                            console.log(nameList[i])
                        }

                    }
                }
            }
            for (var i = 0; i < classList.length; i++) {
                if (reg.exec(classList[i])) {
                    if (resultarr.includes(classList[i]) == false) {
                        // resultarr.push(nameList[i]);
                        console.log(nameList[i])
                        if (resultarr.length < 8 && resultarr.includes(i) == false) {
                            resultarr.push(i);
                        }

                    }

                }
            }
            for (var i = 0; i < foodList.length; i++) {
                if (reg.exec(foodList[i])) {
                    if (resultarr.includes(foodList[i]) == false) {
                        // resultarr.push(nameList[i]);
                        console.log(nameList[i])
                        if (resultarr.length < 8 && resultarr.includes(i) == false) {
                            resultarr.push(i);
                        }
                    }

                }
            }
            console.log('resultarr', resultarr);
            window.location = '../store.html?' + name + '/res' + resultarr;








        })
        $('#f1').click(function () {
            var resultarr = new Array();

            resultarr = ['13', '12', '4', '5', '6', '7', '8', '9', '10']
            console.log('resultarr', resultarr);
            // window.location = './store.html?' + name + '/res' + resultarr;
            window.location = '../store.html?' + name + '/res' + resultarr;








        })
        $('#f2').click(function () {

            // alert('click')
            var valu1 = '小吃';
            // alert(valu1)
            var searchstr = valu1;
            console.log('searchstr', searchstr)
            var searcharr = searchstr.split('');
            var reg = new RegExp(searcharr.join('.*'));
            // alert(reg)
            var resultarr = new Array();
            // alert(value)
            for (var i = 0; i < nameList.length; i++) {
                if (reg.exec(nameList[i])) {
                    if (resultarr.includes(nameList[i]) == false) {
                        // resultarr.push(nameList[i]);
                        console.log(nameList[i])
                        if (resultarr.length < 8 && resultarr.includes(i) == false) {
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
                        if (resultarr.length < 8 && resultarr.includes(i) == false) {
                            resultarr.push(i);
                        }

                    }

                }
            }
            for (var i = 0; i < foodList.length; i++) {
                if (reg.exec(foodList[i])) {
                    if (resultarr.includes(foodList[i]) == false) {
                        // resultarr.push(nameList[i]);
                        console.log(nameList[i])
                        if (resultarr.length < 8 && resultarr.includes(i) == false) {
                            resultarr.push(i);
                        }
                    }

                }
            }
            console.log('resultarr', resultarr);
            // window.location = './store.html?' + name + '/res' + resultarr;
            window.location = '../store.html?' + name + '/res' + resultarr;








        })
        $('#f3').click(function () {

            // alert('click')
            var valu1 = '飲料';
            // alert(valu1)
            var searchstr = valu1;
            console.log('searchstr', searchstr)
            var searcharr = searchstr.split('');
            var reg = new RegExp(searcharr.join('.*'));
            // alert(reg)
            var resultarr = new Array();
            // alert(value)
            for (var i = 0; i < nameList.length; i++) {
                if (reg.exec(nameList[i])) {
                    if (resultarr.includes(nameList[i]) == false) {
                        // resultarr.push(nameList[i]);
                        console.log(nameList[i])
                        if (resultarr.length < 8 && resultarr.includes(i) == false) {
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
                        if (resultarr.length < 8 && resultarr.includes(i) == false) {
                            resultarr.push(i);
                        }

                    }

                }
            }
            for (var i = 0; i < foodList.length; i++) {
                if (reg.exec(foodList[i])) {
                    if (resultarr.includes(foodList[i]) == false) {
                        // resultarr.push(nameList[i]);
                        console.log(nameList[i])
                        if (resultarr.length < 8 && resultarr.includes(i) == false) {
                            resultarr.push(i);
                        }
                    }

                }
            }
            console.log('resultarr', resultarr);
            // window.location = './store.html?' + name + '/res' + resultarr;
            window.location = '../store.html?' + name + '/res' + resultarr;








        })







    });




});