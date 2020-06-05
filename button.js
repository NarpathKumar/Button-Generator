console.clear();
var form = document.getElementById('form');
var newButton = document.getElementById('newButton');
form.onsubmit=function(e){
    e.preventDefault();
    newButton.innerText = e.target.label.value;
    newButton.style.fontSize =  e.target.fontsize.value + "px" ;
    newButton.style.color = e.target.color.value ;
    newButton.style.paddingTop =  e.target.paddingtop.value + "px" ;
    newButton.style.paddingRight =  e.target.paddingright.value + "px" ;
    newButton.style.paddingBottom =  e.target.paddingbottom.value + "px" ;
    newButton.style.paddingLeft =  e.target.paddingleft.value + "px" ;
    newButton.style.backgroundColor = e.target.bgcolor.value;
    newButton.style.borderColor = e.target.bordercolor.value;
    newButton.style.borderWidth = e.target.borderwidth.value + "px";
    newButton.style.borderRadius = e.target.borderradius.value + "px";
}
