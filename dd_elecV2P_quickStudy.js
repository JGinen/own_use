const url = $request.url;
const modifiedUrl = url.replace(/\/1(\?isOver=false&pause=true)$/, '/8888$1');
$done({ url: modifiedUrl });
