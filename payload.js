function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
  return 'gm';
}
(function () {
  function loadScript(url, callback) {
    var d = document;
    var script = d.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) { //IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else { //Others
      script.onload = function () {
        callback();
      };
    }
    script.src = url;
    d.getElementsByTagName("head")[0].appendChild(script);
  }
  loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
     //jQuery loaded
     $(function() {
      var $div = $('<div>');
      $div.css({
        position:'fixed',
        padding:0,
        margin:0,
        top:0,
        left:0,
        width: '100%',
        height: '100%',
        background:'rgba(0,0,0,0.5)'
      });
      var $frm = $('<iframe>');
      $frm.css({'height': '600px', 'width': '400px', 'margin': '40px 40%'});
      $frm.attr('frameBorder', 0);
      var page = GetURLParameter('p');
      $frm.prop('src', page+'.html');
      $frm.appendTo($div);
      $div.appendTo('body');
    });
  });
})();
