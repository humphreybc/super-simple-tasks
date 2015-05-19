// Analytics
// https://davidsimpson.me/2014/05/27/add-googles-universal-analytics-tracking-chrome-extension/

var getTrackingCode = function() {
  var parser = document.createElement('a');
  parser.href = window.location.href;
  var hostname = parser.hostname;
  var trackingCode;

  if (hostname === 'localhost' || hostname === 'dev.supersimpletasks.com'){
    trackingCode = 'UA-37638548-3';
  } else {
    trackingCode = 'UA-37638548-1';
  };

  return trackingCode;
};

var trackingCode = getTrackingCode();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://ssl.google-analytics.com/analytics.js','ga'); // Note: https protocol here
 
ga('create', trackingCode, 'auto');
ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
ga('require', 'displayfeatures');