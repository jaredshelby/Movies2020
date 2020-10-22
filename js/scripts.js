

// Adding back in focus styles for keyboard users
function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);

// Fixed header on scroll
window.onscroll = function() {headerScroll()};
var header = document.getElementById("fixed-header");
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    document.getElementById("header-logo").src = "images/logo-sm.svg";
  } else {
    header.classList.remove("sticky");
      document.getElementById("header-logo").src = "images/logo-bg.svg";
  }
}

// Dropdown Menu

// Add Event listener
const dropButton = document.getElementsByClassName("dropbtn");
dropButton[0].addEventListener('click', ()=>{
  document.getElementById("myDropdown").classList.toggle("show");
});
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Dynamic list numbers to ease rearranging of entries
var entries = document.getElementsByClassName('number');

for(var i=0; i < entries.length; i++){
  entries[i].innerText = i + 1;
}

// Looping through More buttons to add event listener and swap text
const buttonList = Array.from(document.getElementsByClassName('trigger'));

Array.prototype.forEach.call(buttonList, function(element, index, array){
  element.addEventListener('click', function toggleShow() {
    if (this.innerText === "More +") {
      this.innerText = "Less -";
    } else {
      this.innerText = "More +";
    }

    const element = this.nextElementSibling;
    element.classList.toggle("show");
  });
});
