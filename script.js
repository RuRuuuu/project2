


const changeImage = document.querySelector("#imgs");
const changer = [ "/images/wiger.jpg", "/images/wigtreat.jpg", "/images/wig12.jpeg", "/images/wig1.jpeg",
 "/images/wigg.jpeg", "/images/hiarst.jpg", "/images/install.jpg", "/images/wiged.jpg","/images/wiger.jpg",
 "/images/wigg.jpeg", "/images/wig12.jpeg", "/images/wig1.jpeg", "/images/hiarst.jpg", "/images/wigtreat.jpg",
 "/images/wiged.jpg", "/images/wiger.jpg", "/images/install.jpg", "/images/wiged.jpg", "/images/wig1.jpeg"];

counter = 0
   
          function range()
{
    changeImage.style.backgroundImage = 'url(" ' + changer[counter] + ' ")';
    counter++;
}

setInterval( range, 2000);



const hid = document.querySelector("#hidden");
const btn = document.querySelector("#btn-open");
const butnClose = document.querySelector("#but-close")

btn.addEventListener("mouseover", function(){
    hid.style.display = "block";
});

butnClose.addEventListener("click", function(){
    hid.style.display = "none";
})



    
