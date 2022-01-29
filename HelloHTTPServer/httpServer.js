const http = require('http')

// function createServer(requestListener?: http.RequestListener): http.Server (+1 overload)
const server = http.createServer((req,res)=>{
    //(method) ServerResponse.writeHead(statusCode: number, statusMessage?: string, headers?: http.OutgoingHttpHeaders | http.OutgoingHttpHeader[]): http.ServerResponse (+1 overload)
    res.writeHead(200,{"Content-Type":"text/html"});
    //(method) internal.Writable.write(chunk: any, callback?: (error: Error) => void): boolean (+1 overload)
    res.write('<h1>Hello World Julian Lopez!</h1>');
    res.end();
});

//(method) Server.listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void): http.Server (+8 overloads)
server.listen(5500);