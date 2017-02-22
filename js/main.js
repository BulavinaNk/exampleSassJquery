const host = "http://127.0.0.1:80/";

function loadData(){


  $.ajax({
    url: host,            
    dataType : "json",                     
    success: function (data, textStatus) { 
      data.forEach(item=>{  
        let classloic = "inactiveloic"; 
        let imgLike = "heart2";
        if(item.like){
          classloic = "activeloic";
          imgLike = "heart1";
        }
        const template = `<div class="card column" id="card1">
                <div>
                <span class="title"> ${item.title} </span>
                <a href="#" class="close " id="close1" >   <img src="image/gtk-close1.ico">   </a>
                <p class="desc"> ${item.description}</p>
                <a  href="#" class="loic ${classloic}"><img src="image/${imgLike}.ico"></a>
                </div>
                </div>`;        
        $(".cards").append(template);
      }) 

    }
  });
}

$(document).ready(function(){
 
  loadData();
  

  $(".cards").on("click", ".loic", function(){      
    
    const self = this;          
    const indexCard = $(this).parent().parent().index();       

    $.ajax({
      type: "GET",
      url: `${host}like?index=${indexCard}`,

      success: function(result){
        if(result){
          const src = ($(self).find("img").attr("src") === "image/heart2.ico")
                      ? "image/heart1.ico" 
                      : "image/heart2.ico";
          $(self).find("img").attr("src", src);
        }
        else{
          console.log("not success");
        }              
      }
    });   
  });

  $(".cards").on("click", ".close", function(){
    const self = this;
    const indexCard = $(this).parent().parent().index();
    $.ajax({
      type: "GET",
      url: `${host}del?index=${indexCard}`,
      success: function(result){
        if(result){
          $(self).parent().parent().hide();
        }
        else{
          console.log("not success");
        }

      }
    });      
  });   

});
