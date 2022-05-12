function display1() {
    var img= document.getElementsByClassName("img1") 
    img[1].classList.toggle("show");
    img[0].classList.toggle("background");
    }
    
    function display2() {
    var img= document.getElementsByClassName("img2") 
    img[1].classList.toggle("show");
    img[0].classList.toggle("background");
    }
    
    function display3() {
    var img= document.getElementsByClassName("img3") 
    img[1].classList.toggle("show");
    img[0].classList.toggle("background");
    }
    
    function display4() {
    var img= document.getElementsByClassName("img4") 
    img[1].classList.toggle("show");
    img[0].classList.toggle("background");
    }
    
    function display5() {
    var img= document.getElementsByClassName("img5") 
    img[1].classList.toggle("show");
    img[0].classList.toggle("background");
    }
    
    function display6() {
    var img= document.getElementsByClassName("img6") 
    img[1].classList.toggle("show");
    img[0].classList.toggle("background");
    }
    
    function display7() {
    var img= document.getElementsByClassName("img7") 
    img[1].classList.toggle("show");
    img[0].classList.toggle("background");
    }
    
    function display8() {
    var img= document.getElementsByClassName("img8") 
    img[1].classList.toggle("show");
    img[0].classList.toggle("background");
    }

    function display9() {
        var img= document.getElementsByClassName("img9") 
        img[1].classList.toggle("show");
        img[0].classList.toggle("background");
        }

        function display10() {
        var img= document.getElementsByClassName("img10") 
        img[1].classList.toggle("show");
        img[0].classList.toggle("background");
       }  
       function display11() {
        var img= document.getElementsByClassName("img11") 
        img[1].classList.toggle("show");
        img[0].classList.toggle("background");
       } 
       function display12() {
        var img= document.getElementsByClassName("img12") 
        img[1].classList.toggle("show");
        img[0].classList.toggle("background");
       } 
       function display13() {
        var img= document.getElementsByClassName("img13") 
        img[1].classList.toggle("show");
        img[0].classList.toggle("background");
       } 
    // const imgList= ["https://cdn.glitch.global/c5d44a59-e8f8-4982-b716-7ae8591fa235/img80%20draft%20copy.jpg?v=1651731485875", 
    //                "https://cdn.glitch.global/c5d44a59-e8f8-4982-b716-7ae8591fa235/IMG_8866%20copy.jpg?v=1651757256166",
    //                "https://cdn.glitch.global/c5d44a59-e8f8-4982-b716-7ae8591fa235/12126235%20copy.jpg?v=1651731925886",
    //                "https://cdn.glitch.global/c5d44a59-e8f8-4982-b716-7ae8591fa235/544-5443652_and-right-now-were-doing-great-green-spray.png.png?v=1651731828620",
    //                "https://cdn.glitch.global/c5d44a59-e8f8-4982-b716-7ae8591fa235/nametitlezein%20copy.png?v=1651732071755",
    //                "https://cdn.glitch.global/c5d44a59-e8f8-4982-b716-7ae8591fa235/2501a7a6e169670a2ab16a6158a5cbc7.png?v=1651731891330",
    //                "https://cdn.glitch.global/c5d44a59-e8f8-4982-b716-7ae8591fa235/259029190000212.png?v=1651733373375",
    //                 "https://cdn.glitch.global/c5d44a59-e8f8-4982-b716-7ae8591fa235/image_processing20200804-547-hzhrkx.png?v=1651732736147"]
    
    const imgList= document.querySelectorAll(".output");
    console.log(imgList)
    function randomizer() {
      console.log("buttonwasclicked")
      for (var i=0; i<5; i++)
      {var random=Math.floor(Math.random() * imgList.length) 
      console.log(random)
      imgList[random].classList.toggle("show");
      }
    }
    
    
    