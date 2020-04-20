$(document).ready(function(){

    $('#profile').click(function(){
        $('#myprofile').toggle()
    })

    $('#usr').keyup(function(){
        var output = $('#usr').val();
        console.log(output.length);
        if(output.length%2 == 0){
            $('#output').css("color", "red")
        }
        else{
            $('#output').css("color", "blue")
        }
        $('#output').html(output);

    })

    // Arrow Function
    $.getJSON("./experience.json", result =>{
        console.log(result);
        var x = '';
        result.forEach(doc => {
            x  += '<tr>'+
                    '<td>'+ doc.id + '</td>'+
                    '<td>'+ doc.title + '</td>'+
                    '<td>'+ doc.description + '</td>'+
                '</tr>'
        });
        
        $('tbody').html(x);
    });

    // Normal Function of javascript
    $.getJSON("./skill.json", function(result){
        console.log(result);
        var x = '';
        result.forEach(function(doc) {
            x  += '<div class="progress">' +
            '<div class="progress-bar bg-success" style="width:'+  doc.progress +'%">'+doc.language+'</div>&nbsp;'+ doc.progress +'%'+
            '</div><br>' 
        });


        $('.language').html(x);
    });



  
  });