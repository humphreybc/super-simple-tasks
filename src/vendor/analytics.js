// Analytics
// https://davidsimpson.me/2014/05/27/add-googles-universal-analytics-tracking-chrome-extension/

tracking_code = 'UA-37638548-1';
dev_tracking_code = 'UA-37638548-3';

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://ssl.google-analytics.com/analytics.js','ga'); // Note: https protocol here
 
ga('create', tracking_code, 'auto');
ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
ga('require', 'displayfeatures');