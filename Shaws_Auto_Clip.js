// setTimeout is suppose to be in MS, but it's actually a centisecond for some reason. This issue makes no sense but this is javascript so anything can be real in this dimension.

var time = 0;

function delayFunction(messageEnd, buttonSelected) {
  console.log(messageEnd); 
   buttonSelected.click();
}

if (document.all !== undefined)
  {
    var items = document.all;
  }
  else
  {
    var items = document.getElementsByTagName("*");
}                   
for (var i = 0; i < items.length; ++i) {
  if (items[i].textContent.includes("Load more")) {
    console.log("Loading Button Found");
    time = time + 50;
    setTimeout(delayFunction, time, "Loading More", items[i]);
  }
}

for (var i = 0; i < items.length; ++i) {
  if (items[i].textContent.includes("Clip Coupon") || items[i].textContent.includes("Add to List")) {
    console.log("Coupon Found");
    time = time + 42;
    setTimeout(delayFunction, time, "Coupon Clipped", items[i]);  
  }
}