var url = "https://slack.com";
url += '?' + $.param({
'api-key': "xoxp-296524535633-315205315799-409996486770-ee89ec4d42d8a91f370f0e6926bc475b"
});
$.ajax({
url: url,
method: 'GET',
}).done(function(result) {
console.log(result);
}).fail(function(err) {
throw err;
});
