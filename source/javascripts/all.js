 $(document).on('ready', function() {

 $("#angry").click(function() {

        var src = $('#angry').attr('src');

        //if the current image is picture1.png, change it to picture2.png
        if(src == 'images/angry-256.png') {
            $("#angry").attr("src","images/quiet-256.png");

        }
        else if(src == 'images/quiet-256.png') {
            $("#angry").attr("src","images/meditation-256.png");

        } else if(src == "images/meditation-256.png") {
            $("#angry").attr("src","images/teddy-bear-256.png"); 

        } else if(src == "images/teddy-bear-256.png") {
            $("#angry").attr("src","images/hug-256.png"); 

        } else if(src == "images/hug-256.png") {
            $("#angry").attr("src","images/television-256.png"); 

        } else if(src == "images/television-256.png") {
            $("#angry").attr("src","images/painter-256.png"); 

        } else if(src == "images/painter-256.png") {
            $("#angry").attr("src","images/singer-256.png"); 

        } else if(src == "images/singer-256.png") {
        	$("#angry").attr("src","images/angry-256.png");
        	alert("Call Help Line at 1866-531-2600");

        } else {
            $("#angry").attr("src","images/quiet-256.png");
        }
    }); 



 	$("#harm").click(function() {

        var src = $('#harm').attr('src');

        if(src == 'images/bang-on-wall-256.png') {
            $("#harm").attr("src","images/quiet-256.png");

        } else if(src == 'images/quiet-256.png') {
            $("#harm").attr("src","images/head-protection-256.png");

        } else if(src == "images/head-protection-256.png") {
            $("#harm").attr("src","images/hug-256.png"); 

        } else if(src == "images/hug-256.png") {
            $("#harm").attr("src","images/singer-256.png"); 

        } else if(src == "images/singer-256.png") {
        	$("#harm").attr("src","images/bang-on-wall-256.png");
            alert("Call help line at 1866 531 2600");

        } else {
            $("#harm").attr("src","images/bang-on-wall-256.png");
        }
    }); 

    $("#suicide").click(function() {

        var src = $('#suicide').attr('src');

        if(src == 'images/suicide-256.png') {
            $("#suicide").attr("src","images/pills-256.png");
        } else if(src == 'images/pills-256.png') {
            $("#suicide").attr("src","images/suicide-256.png");
            alert("Call Help Line at 416-408-4357");
        } else {
            $("#suicide").attr("src","images/violent-256.png");
        }
    });  

    $("#violent").click(function() {

        var src = $('#violent').attr('src');

        if(src == 'images/violent-256.png') {
            $("#violent").attr("src","images/light-off-256.png");
        } else if(src == 'images/light-off-256.png') {
            $("#violent").attr("src","images/pills-256.png");

        } else if (src == 'images/pills-256.png') {
            $("#violent").attr("src","images/violent-256.png");
            alert("Call Help Line at 1866-531-2600");
        } else {
            $("#violent").attr("src","images/violent-256.png");
        }
    });  
});


