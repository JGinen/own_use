var body = $request.body;
var obj = JSON.parse(body);
obj.percent = 100;
$done({body: JSON.stringify(obj)});
