let section1 = document.querySelector(".section-1")
let section2 = document.querySelector(".section-2")
let section3 = document.querySelector(".section-3")
let section4 = document.querySelector(".section-4")
let mainPart = document.querySelector(".main-part")
let button1 = document.querySelector("#butt-1")
let uname = document.querySelector("#u-name")
let ready = document.querySelector('#redy-butt')
let alphabet = document.querySelector('#alphabet')
let genc =document.querySelector('.matter',"p")
let timer = document.querySelector( `.timer`,`h1`)
let matter = document.querySelector('.matter')
let body =document.querySelector('body')
let wordsu = document.querySelector('#words')




let time = 0;
let correct =0;
let wrong=0;





let naame = document.querySelector("#name")
naame.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault(); 
      sessionStorage.setItem("username", naame.value); 
    }})

    // let username = sessionStorage.getItem('username')

    function screennone()
    {section1.style.display = 'none'
    section2.style.display = 'none'
    section3.style.display = 'none'
    section4.style.display = 'none'
    mainPart.style.display = 'none'}
    // =====================================================================================================================
    
    function wordsf(){

      const words = [
        "apple", "banana", "grape", "orange", "melon", "lemon", "peach", "berry", "kiwi", "mango",
        "chair", "table", "lamp", "sofa", "shelf", "rug", "clock", "couch", "bed", "mirror",
        "dog", "cat", "mouse", "horse", "lion", "tiger", "bear", "wolf", "deer", "zebra",
        "car", "truck", "bike", "train", "plane", "boat", "bus", "van", "scooter", "subway",
        "sun", "moon", "star", "sky", "cloud", "rain", "snow", "wind", "storm", "fog",
        "book", "pen", "pencil", "paper", "board", "chalk", "desk", "notebook", "eraser", "marker",
        "happy", "sad", "fast", "slow", "hot", "cold", "big", "small", "long", "short",
        "run", "walk", "jump", "swim", "fly", "crawl", "climb", "sit", "stand", "dance",
        "red", "blue", "green", "yellow", "black", "white", "pink", "orange", "purple", "brown",
        "time", "day", "night", "week", "month", "year", "second", "minute", "hour", "moment"
      ];
      
      
      let x = Math.floor(Math.random()*words.length+1)
      y = words[x];
      console.log(y);
      genc.textContent=`${y}`
      matter.style.width=`max-content`;
      matter.style.fontSize=`7vw`
      
      let written= document.querySelector('#written')
      written.value = ""; // clear textbox

      written.addEventListener('keydown', function checkWord(e) {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
    
          let typed = written.value.trim(); // trim for safety
          if (typed === y) {
            correct++;
            console.log("✅ Correct:", correct);
          } else {
            wrong++;
            console.log("❌ Wrong:", wrong);
          }
    
          // prepare next word
          written.removeEventListener('keydown', checkWord); // remove listener to avoid stacking
          wordsf();
  }})
      
      
    };




    
// ----------------------------------------------------------------------------------------------------------------------------------------------

    function alphabetsf(){

      let alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


      let x = Math.floor(Math.random()*alphabets.length)
      y = alphabets[x];
      console.log(y);
      genc.textContent=`${y}`
      matter.style.width=`max-content`;
      matter.style.fontSize=`7vw`
      document.addEventListener("keydown", function(e) {

        if (e.key === y) {
          correct++;
          console.log("Correct: " + correct);
          alphabetsf(); 
      } else {
          wrong++;
          console.log("Wrong: " + wrong);
      }
  });



    }

    /*--------------------------------------------------------------------------------------------------------------- */

    screennone();
  section1.style.display = 'block'
    button1.addEventListener('click',function(){
            
      screennone();
      section2.style.display='block'
      let username = sessionStorage.getItem('username')
      uname.textContent=`${username}`

    })

    ready.addEventListener('click',function(){

      screennone();
      section3.style.display=``


      })

      alphabet.addEventListener('click',function(){
      screennone()
      mainPart.style.display = ''
      alphabetsf()
      let tim =setInterval(() => {
        time++;
        timer.innerText=`${time}`  
      }, 1000);  
    
      if( time===60){
        clearInterval(tim);
        screennone();
    
      }
      
    })

    wordsu.addEventListener('click',function(){
      screennone()
      mainPart.style.display = ''
      wordsf();
      
      let tim=setInterval(() => {
        time++;
        timer.innerText=`${time}`  
      }, 1000);  
    
      if( time == 60){
        clearInterval(tim);
        screennone();
    
      }

      let writtene = sessionStorage.getItem(`written`)
      console.log(writtene);
        
      
      
    })

  












