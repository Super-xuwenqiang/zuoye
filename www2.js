const net = require('net');
const fs = require('fs');

const server =net.createServer();
server.on ("connection",(client)=>{
	console.log("有人连接!!!");
	client.on('data',(data)=>{

		var x=data.toString();
		let num=x.indexOf("\n");
		num = x.substr(0,num).split(' ');
		let num2=x.trim().lastIndexOf("\n");
		z2=x.substr(num2+1);
		var num3=x.lastIndexOf('=');
		z3=x.substr(num3+1);

		//a链接页面
		if(num[1]=='/admin'){

			wenj=z3.split("\n")[0].trim();
			if (fs.existsSync(wenj)) {

				fs.readFile("./"+wenj, (err,name) => {
					client.write("HTTP/1.1 200 OK\n");
					client.write("content-type:text/html;charset=utf-8\n\n");
					client.write( `登陆的人是:${name}\n`);
					client.end();
				})

			}else{
			client.write("HTTP/1.1 302 \n");
			client.write('location:http://localhost:8001/login\n\n');
			client.end();}

				
		}else if(num[1]=="/login"){
			//登录页面
            if(num[0] == "GET"){
            client.write("HTTP/1.1 200 OK\n");
            client.write("content-type:text/html;charset=utf-8\n\n");

            client.write("<form action='http://localhost:8001/login' method='post'>");
            client.write("用户名：<input type='text' name='username'><br>");
            client.write("密 码：<input type='password' name='password'><br>");
            client.write("<input type='submit' value='登陆'><br>");
            client.write("</form>");

            client.end();
        }else{
                var [n,p]=z2.split('&')
                if(n.split("=")[1]=='admin'&& p.split("=")[1]=="123456"){
                    var item1 = parseInt(Math.random()*10000000).toString(16);
                    
                    fs.writeFile(item1, n.split("=")[1], ()=>{
                        client.write("HTTP/1.1 302 ok \n");
                        client.write("content-type:text/html;charset=UTF-8\n");
                        client.write(`set-cookie:SSID=${item1}\n`);
                        client.write("Location:http://localhost:8001/admin \n\n")
                        
                        client.end();
                        
                    })
                    
                }
			}
        }else{
			//主页面
			client.write("HTTP/1.1 200 OK\n");
			client.write("content-type:text/html;charset=utf-8\n\n");
			client.write("<h1>welcome</h1><br><a href='/admin'>进入后台管理</a>\n");

			client.end();
		}
	})
})
server.listen(8001, () => {
	console.log('机器已然启动!!!');

});
