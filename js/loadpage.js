window.onload=function(e) {
  var sample = localStorage.getItem("loadTime");
  if (sample == null) {
    localStorage.setItem("loadTime", new Date().getTime());
    window.location.reload(true);
  } else {
    var loadingTime = new Date().getTime() - sample;
    alert('Page loaded in: ' + loadingTime + 'milliseconds')
    localStorage.removeItem("loadTime")
  }
}