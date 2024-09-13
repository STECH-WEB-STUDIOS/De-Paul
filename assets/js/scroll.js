window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollTopBtn").style.display = "block";
      } else {
        document.getElementById("scrollTopBtn").style.display = "none";
      }
    }
    document.getElementById("scrollTopBtn").onclick = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }