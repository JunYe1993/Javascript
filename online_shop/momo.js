javascript:(function myLoop(i) {
  if (document.getElementsByClassName("checkoutArea").length > 0){
      window.alert = function alert (message) {
          console.log(message);
      };
      setTimeout(function() {
          var current = new Date();
          if (current.getHours() >= 12 && current.getMinutes() >= 0 && current.getSeconds() >= 0){
              OrderProcess('cart', '');
          } else {
              console.log(current.getHours() + ":" + current.getMinutes() + ":" +current.getSeconds());
          }
          if (--i) myLoop(i);
      }, 300)
  } else if (document.getElementsByClassName("checkoutBtn").length > 0) {
      console.log("About to check out...");
      document.querySelector("li.checkoutBtn>a").click();
  }
})(200);