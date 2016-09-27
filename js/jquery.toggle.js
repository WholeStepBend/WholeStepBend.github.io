//<![CDATA[

    //Toggle boolean
 var isText = 1;
 var isURL = 0;
 var isFile = 0;

    //Image preload
var i2s = (new Image()).src = "images/input_2_select.png";
var i3s = (new Image()).src = "images/input_3_select.png";
var i1 = (new Image()).src = "images/input_1.png";
    

$(document).ready(function() {
   //Hide forms for URL and file
    $('#url').hide();
    $('#file').hide();
   
    //Mouseover and mouseout functions
    
    //For file
    $('#file_input').mouseenter(function(){if(!Boolean(isFile)){$('#file_input').css("background-image", "url(images/input_2_select.png)")}});                                         
    $('#file_input').mouseleave(function(){
        if(!Boolean(isFile)){
        $('#file_input').css("background-image", "url(images/input_2.png)");
    }});

    //For text
    $('#text_input').mouseenter(function(){if(!Boolean(isText)){$('#text_input').css("background-image", "url(images/input_1_select.png)")}});    
    $('#text_input').mouseleave(function(){
        if(!Boolean(isText)){
        $('#text_input').css("background-image", "url(images/input_1.png)");
    }});

    //For URL
    $('#url_input').mouseenter(function(){if(!Boolean(isURL)){$('#url_input').css("background-image", "url(images/input_3_select.png)")}});
    $('#url_input').mouseleave(function(){
        if(!Boolean(isURL)){
        $('#url_input').css("background-image", "url(images/input_3.png)");
    }});

    //Form toggle functions
    
    //For file
     $('#file_input').click(function(){
          if(Boolean(isText) || Boolean(isURL) && !Boolean(isFile)){
                   isText = 0;
        isURL = 0;
        isFile = 1;
        $('.colors').slideUp("slow");
        $('#file').delay(300).slideDown( "slow" );
       $('#url_input').css("background-image", "url(images/input_3.png)");
        $('#text_input').css("font-weight", "normal");
        $('#url_input').css("font-weight", "normal");
        $('#file_input').css("font-weight", "bold");
        $('#text_input').css("background-image", "url(images/input_1.png)");
        $('#file_input').css("background-image", "url(images/input_2_select.png)");
     

        }
    });
    
        //For URL
         $('#url_input').click(function(){
                if(Boolean(isText) || Boolean(isFile) && !Boolean(isURL)){
        isText = 0;
        isFile = 0;
        isURL = 1;   
        $('.colors').slideUp("slow");
        $('#url').delay(300).slideDown( "slow" );
      $('#url_input').css("background-image", "url(images/input_3_select.png)");
        $('#text_input').css("font-weight", "normal");
        $('#file_input').css("font-weight", "normal");
        $('#url_input').css("font-weight", "bold");
        $('#text_input').css("background-image", "url(images/input_1.png)");
        $('#file_input').css("background-image", "url(images/input_2.png)");
 
 }
    });
  
    //For text
        $('#text_input').click(function(){
                if(Boolean(isFile) || Boolean(isURL) && !Boolean(isText)){
        isText = 1;
        isFile = 0;
        isURL = 0;
        $('.colors').slideUp("slow");
        $('#text').delay(300).slideDown( "slow" );
              $('#url_input').css("background-image", "url(images/input_3.png)");
                      $('#url_input').css("font-weight", "normal");
        $('#file_input').css("font-weight", "normal");
        $('#text_input').css("font-weight", "bold");
        $('#text_input').css("background-image", "url(images/input_1_select.png)");
        $('#file_input').css("background-image", "url(images/input_2.png)");

     }    
    });
   

});
//]]> 
