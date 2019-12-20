$(document).ready(function () {



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



    if (typeof (temp[1]) != 'undefined') {
        // alert('not null')

        $("#sign").attr("href", "")
        $('#sign').hide()
        $('#singin').hide()
        $('#name').show()
        $('#name').text(name)
        $("#order").show()
        $("#order1").show()
        $("#out").show()
        $("#out").click(function () {
            console.log('out')
            window.location = './landingPage.html';


            firebase.auth().signOut().then(function () {
                var user = firebase.auth().currentUser;
                console.log(user)


            })

        })
        $("#out11").show()
        $("#out11").click(function () {
            console.log('out')
            window.location = '../landingPage.html';


            firebase.auth().signOut().then(function () {
                var user = firebase.auth().currentUser;
                console.log(user)


            })

        })
        $('#24').click(function () {
            href1 = "./examples/24.html?" + name
            location.href = href1
        })

        $("#logo").click(function () {
            // alert('isme')
            window.location = './landingPage.html?' + name;

        })
        $("#logo1").click(function () {
            // alert('isme')
            window.location = '../landingPage.html?' + name;

        })
        $("#order").click(function () {
            // alert('isme')
            window.location = './order.html?' + name;

        })
        $("#order1").click(function () {
            // alert('isme')
            window.location = '../order.html?' + name;

        })


    } else {
        $("#logo").click(function () {
            // alert('isme')
            window.location = './landingPage.html';

        })
        $("#logo1").click(function () {
            // alert('isme')
            window.location = '../landingPage.html';

        })
        $('#yoshinoya').click(function () {
            href1 = "./examples/yoshinoya.html"
            location.href = href1
        })


    }



});