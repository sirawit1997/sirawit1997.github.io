

$(document).ready(function () {

    $('#profile').click(function () {
        $('#myprofile').toggle()
    })

    $('#skillhide').click(function () {
        $('#skillcard').toggle()
    })

    $('#usr').keyup(function () {
        var output = $('#usr').val();
        console.log(output.length);
        if (output.length % 2 == 0) {
            $('#output').css("color", "red")
        } else {
            $('#output').css("color", "blue")
        }
        $('#output').html(output);

    })

    // Arrow Function
    $.getJSON("./experience.json", result => {
        console.log(result);
        var x = '';
        result.forEach(doc => {
            x += '<tr><td>' + doc.id + '</td><td>' + doc.title + '</td><td>' + doc.description +
                    '</td></tr>'
        });

        $('tbody').html(x);
    });

    // Normal Function of javascript
    $.getJSON("./programingskill.json", function (result) {
        console.log(result);
        var x = '';
        result.forEach(function (doc) {
            x += '<div class="progress"><div class="progress-bar bg-success" style="width:' +
                    doc.progress + '%">' + doc.language + '</div>&nbsp;' + doc.progress + '%</div><' +
                    'br>'
        });

        $('.language').html(x);
    });

    $.getJSON("./businessskill.json", function (result) {
        console.log(result);
        var x = '';
        result.forEach(function (doc) {
            x += '<div class="progress"><div class="progress-bar bg-danger" style="width:' +
                    doc.progress + '%">' + doc.language + '</div>&nbsp;' + doc.progress + '%</div><' +
                    'br>'
        });

        $('.business').html(x);
    });

    $.getJSON("./otherskill.json", function (result) {
        console.log(result);
        var x = '';
        result.forEach(function (doc) {
            x += '<div class="progress"><div class="progress-bar bg-info" style="width:' + doc.progress +
                    '%">' + doc.language + '</div>&nbsp;' + doc.progress + '%</div><br>'
        });

        $('.other').html(x);
    });

    //Loop image
    $.getJSON("./programandframework.json", function (images) {
        console.log(images);
        var x = '';
        images.forEach(function (image) {
            x += '<img src="' + image.path + '" class="rounded" alt="Cinque Terre" width="50" he' +
                    'ight="50">'
        });
        $('.Programandframework').html(x);
    });

    // Loop create workexp
    $.getJSON("./workexp.json", function (result) {
        console.log(result);
        var x = '';
        result.forEach(function (doc) {
            console.log(doc)
            x += '<div class="card" style="width:300px">' +
                '<img class="card-img-top" src="./images/KUSubLogo.png" alt="Card image">'+
                    '<div class="card-body">'+
                        '<h4 class="card-title">'+doc.title+'</h4>'+
                        '<p class="card-text">'+doc.description+'</p>'+
                        '<a href="'+doc.link+'" class="btn btn-primary">See More</a>'+
                    '</div>'+
                '</div>'
                });
        $('#workexp').html(x);
    });

});