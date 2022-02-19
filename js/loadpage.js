window.onload=function(e) {
  var sample = localStorage.getItem("loadTime");
  if (sample == null) {
    localStorage.setItem("loadTime", new Date().getTime());
    window.location.reload(true);
  } else {
    var loadingTime = new Date().getTime() - sample;
    let div = document.createElement('div');
    div.className = 'loadpage';
    div.innerHTML = 'Page loaded in: ' + loadingTime + ' milliseconds';
    document.body.append(div);
    localStorage.removeItem("loadTime")
  }
}