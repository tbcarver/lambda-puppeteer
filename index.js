const handler = require('./handler');
const json = { "cookies": [], "headers": { "host": "localhost:3000", "connection": "keep-alive", "cache-control": "max-age=0", "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"", "sec-ch-ua-mobile": "?0", "sec-ch-ua-platform": "\"Linux\"", "upgrade-insecure-requests": "1", "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36", "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "sec-fetch-site": "none", "sec-fetch-mode": "navigate", "sec-fetch-user": "?1", "sec-fetch-dest": "document", "accept-encoding": "gzip, deflate, br", "accept-language": "en-US,en;q=0.9,la;q=0.8,es;q=0.7" }, "isBase64Encoded": false, "pathParameters": null, "queryStringParameters": { "url": "http://aws.com/", "screen": "800,600" }, "rawPath": "/", "rawQueryString": "url=http%3A%2F%2Faws.com%2F&screen=800%2C600", "requestContext": { "accountId": "offlineContext_accountId", "apiId": "offlineContext_apiId", "authorizer": { "jwt": {} }, "domainName": "offlineContext_domainName", "domainPrefix": "offlineContext_domainPrefix", "http": { "method": "GET", "path": "/", "protocol": "HTTP/1.1", "sourceIp": "127.0.0.1", "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36" }, "requestId": "offlineContext_resourceId", "routeKey": "GET /", "stage": "$default", "time": "09/Oct/2022:16:49:40 -0600", "timeEpoch": 1665355780012 }, "routeKey": "GET /", "stageVariables": null, "version": "2.0" };

handler.capture(json);