var token = "8dad7d671a89400a818fd76178ca76ae";
var url = $request.url;
var headers = $request.headers;

if (url.indexOf("gacmotor.com") !== -1 && headers.hasOwnProperty("token")) {
    headers["token"] = token;
}

$done({ headers: headers });
