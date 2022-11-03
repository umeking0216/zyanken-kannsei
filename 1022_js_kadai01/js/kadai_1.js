$(".guu").on("click", function () {

   
    var random = Math.floor(Math.random() * 3);
    console.log(random, "ランダムな数字");
    var random_2 = Math.floor(Math.random() * 5);
    console.log(random_2, "ランダムな数字");

    if (random === 0) {
      console.log("グー");
      $(".aite").html("<img src='img/guu.png' class='aite_item' id=aite alt=''>");
      $(".win").css("background-color", "yellow");
      $(".aiko").css("background-color", "red");
      $(".lose").css("background-color", "yellow");
      $('.audio_2').get(0).play();
      
    } else if (random === 1) {
      console.log("チー");
      $(".aite").html("<img src='img/peace.png' class='aite_item' alt=''>");
      $(".win").css("background-color", "red");
      $(".aiko").css("background-color", "yellow");
      $(".lose").css("background-color", "yellow");
      $('.audio_4').get(0).play();
      $(function(){
        setTimeout(function(){
         $(".aite").html("<img src='img/kazu.gif' class='aite_item' alt=''>");
          }, 1000);
         });

        if (random_2 === 0){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu1.png' class='aite_item' alt=''>"); 
          }, 4000);
        
        } else if (random_2 === 1){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu2.png' class='aite_item' alt=''>"); 
          }, 4000);
        }
        else if (random_2 === 2){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu3.png' class='aite_item' alt=''>"); 
          }, 4000);

        }else if (random_2 === 3){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu4.png' class='aite_item' alt=''>"); 
          }, 4000);
        }
        else if (random_2 === 4){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu5.png' class='aite_item' alt=''>"); 
          }, 4000);
        };
    } else if (random === 2) {
      console.log("パー");
      $(".aite").html("<img src='img/par.png' class='aite_item' alt=''>");
      $(".win").css("background-color", "yellow");
      $(".aiko").css("background-color", "yellow");
      $(".lose").css("background-color", "red");
      $('.audio_3').get(0).play();
    } 
 });

  


  $(".peace").on("click", function () {
    var random = Math.floor(Math.random() * 3);
    console.log(random, "ランダムな数字");
    var random_2 = Math.floor(Math.random() * 5);
    console.log(random_2, "ランダムな数字");



    if (random === 0) {
      console.log("グー");
      $(".aite").html("<img src='img/guu.png' class='aite_item' alt=''>");
      $(".win").css("background-color", "yellow");
      $(".aiko").css("background-color", "yellow");
      $(".lose").css("background-color", "red");
      $('.audio_3').get(0).play();
    } else if (random === 1) {
      console.log("チー");
      $(".aite").html("<img src='img/peace.png' class='aite_item' alt=''>");
      $(".win").css("background-color", "yellow");
      $(".aiko").css("background-color", "red");
      $(".lose").css("background-color", "yellow");
      $('.audio_2').get(0).play();
    } else if (random === 2) {
      console.log("パー");
      $(".aite").html("<img src='img/par.png' class='aite_item' alt=''>");
      $(".win").css("background-color", "red");
      $(".aiko").css("background-color", "yellow");
      $(".lose").css("background-color", "yellow");
      $('.audio_4').get(0).play();
      $(function(){
        setTimeout(function(){
         $(".aite").html("<img src='img/kazu.gif' class='aite_item' alt=''>");
          }, 1000);
         });

        if (random_2 === 0){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu1.png' class='aite_item' alt=''>"); 
          }, 4000);
        
        } else if (random_2 === 1){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu2.png' class='aite_item' alt=''>"); 
          }, 4000);
        }
        else if (random_2 === 2){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu3.png' class='aite_item' alt=''>"); 
          }, 4000);

        }else if (random_2 === 3){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu4.png' class='aite_item' alt=''>"); 
          }, 4000);
        }
        else if (random_2 === 4){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu5.png' class='aite_item' alt=''>"); 
          }, 4000);
        };
    } 

    
  });

  $(".par").on("click", function () {
    var random = Math.floor(Math.random() * 3);
    console.log(random, "ランダムな数字");
    
    var random_2 = Math.floor(Math.random() * 5);
    console.log(random_2, "ランダムな数字");

    
    if (random === 0) {
      console.log("グー");
      $(".aite").html("<img src='img/guu.png' class='aite_item' alt=''>");
      $(".win").css("background-color", "red");
      $(".aiko").css("background-color", "yellow");
      $(".lose").css("background-color", "yellow");
      $('.audio_4').get(0).play();
      $(function(){
        setTimeout(function(){
         $(".aite").html("<img src='img/kazu.gif' class='aite_item' alt=''>");
          }, 1000);
         });

        if (random_2 === 0){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu1.png' class='aite_item' alt=''>"); 
          }, 4000);
        
        } else if (random_2 === 1){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu2.png' class='aite_item' alt=''>"); 
          }, 4000);
        }
        else if (random_2 === 2){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu3.png' class='aite_item' alt=''>"); 
          }, 4000);

        }else if (random_2 === 3){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu4.png' class='aite_item' alt=''>"); 
          }, 4000);
        }
        else if (random_2 === 4){
          setTimeout(function(){
            $(".aite").html("<img src='img/kazu5.png' class='aite_item' alt=''>"); 
          }, 4000);
        };

      
      


    } else if (random === 1) {
      console.log("チー");
      $(".aite").html("<img src='img/peace.png' class='aite_item' alt=''>");
      $(".win").css("background-color", "yellow");
      $(".aiko").css("background-color", "yellow");
      $(".lose").css("background-color", "red");
      $('.audio_3').get(0).play();
    } else if (random === 2) {
      console.log("パー");
      $(".aite").html("<img src='img/peace.png' class='aite_item' alt=''>");
      $(".win").css("background-color", "yellow");
      $(".aiko").css("background-color", "red");
      $(".lose").css("background-color", "yellow");
      $('.audio_2').get(0).play();
    } 
  });

  

  $('#musicPlay').click(function(){
    $('.audio_1').get(0).play();
    $(".aite").html("<img src='img/start3.gif' class='aite_item' alt=''>")

  });

  $("#reset").on("click", function(){
    $(".aite").empty();
  });

  $("#reset").on("click", function(){
    $(".win").css("background","yellow");
  });

  $("#reset").on("click", function(){
    $(".lose").css("background","yellow");
  });

  $("#reset").on("click", function(){
    $(".aiko").css("background","yellow");
  });

