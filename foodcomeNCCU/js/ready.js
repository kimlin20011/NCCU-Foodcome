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



    if (typeof (temp[1]) != 'undefined' && temp[1] != 'undefined') {
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
            window.location = './index.html';


            firebase.auth().signOut().then(function () {
                var user = firebase.auth().currentUser;
                console.log(user)


            })

        })
        $("#out11").show()
        $("#out11").click(function () {
            console.log('out')
            window.location = '../index.html';


            firebase.auth().signOut().then(function () {
                var user = firebase.auth().currentUser;
                console.log(user)


            })

        })
        $('#24').click(function () {

            href1 = "./examples/24.html?" + name
            location.href = href1
            // alert('click')
        })

        $("#logo").click(function () {
            // alert('isme')
            window.location = './index.html?' + name;

        })
        $("#logo1").click(function () {
            // alert('isme')
            window.location = '../index.html?' + name;

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
            window.location = './index.html';

        })
        $("#logo1").click(function () {
            // alert('isme')
            window.location = '../index.html';

        })
        $('#24').click(function () {
            window.location = '../examples/24.html';
        })
        $("#order").click(function () {
            // alert('isme')
            window.location = './order.html?'

        })
        $("#order1").click(function () {
            // alert('isme')
            window.location = '../order.html?'

        })


    }




});