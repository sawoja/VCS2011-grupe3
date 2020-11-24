// Rasyti komentarus, kur prasideda ir kur baigiasi kieno kodas

//Justes kodas

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
});

function rollmsg() {
  NowMsg = document.Outmsg.outmsg.value
  NowMsg = NowMsg.substring(1, NowMsg.length) + NowMsg.substring(0, 1)
  document.Outmsg.outmsg.value = NowMsg
  bannerid = setTimeout("rollmsg()", 100)
};














//Justes kodas end