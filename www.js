const readline = require('readline');

async function input(msg) {

    return await new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(msg, (answer) => {
            resolve(answer)
            rl.close();
        });
    })
}




(async () => {


    var menu = await input("请输入您想要的图形：\n1.正方形\t2.三角形\t3.菱形  \t4.回字  \t5.梯形  \n ");
    var inquiry = await input("是否要镂空:\t1.镂空  \t2.不镂空\n");
 
    switch (menu){

        //正方形
        case '1':
            if(inquiry == 1){
                let b = '';
                for(var i=0;i<10;i++){
                    for(var j=0;j<10;j++){
                        if(i>0 && i<9 && j>0 && j<9  ){
                            b += '  ';
                        }else{
                            b += ' *';
                        }
                    }
                    b += '\n';
                }
            console.log(b);
            }else if(inquiry == 2){
                let a = '';
                for(var i=0;i<6;i++){
                           for(var j=0;j<6;j++){
                               a += ' *';
                           }
                           a += '\n';
                       }
               console.log(a);
            }
            break;
        
        //三角形
        case '2':
            if(inquiry == 1){
                let f ='';
                for(var i=0;i<5;i++){
                for(var y=-4;y<5;y++){
                    if(i == 4 || y+i == 0 || i == Math.abs(y)){
                        f += ' *';
                    }else{
                        f += '  ';
                    }
                }
                    f += '\n';
                }
                console.log(f);
            }else if(inquiry == 2){
                var c = '';
                for(var i=0;i<8;i++){
                    for(var j=0;j<7-i;j++){
                        c += '  ';
                    }
                    for(var j=0;j<i*2+1;j++){
                        c += ' *';
                    }
                    c += '\n';
                }
                console.log(c);
            }
            break;
        
        //菱形
        case '3':
           if(inquiry == 1){
            let g = '';
            for(var i=0;i<7;i++){
            for(var j=-3;j<4;j++){
                if(i == Math.abs(j) || i+Math.abs(j) == 6){
                    g += ' *';
                }else{
                    g += '  ';
                }
            }
            g += '\n';
            }
            console.log(g);
           }else if(inquiry == 2){
            let e = '';
            for(var i=-3;i<4;i++){
                 m = i;
                 if(i<0)m = i*-1;
                 for(var j=0;j<m;j++){
                     e += '  ';
                 } 
                 for(var j=0;j<7-2*m;j++){
                     e += ' *';
                 }   
                     e += '\n';
            }
            console.log(e);            
           }
            break;
    
        //回字
        case '4':
            if(inquiry == 1){
                console.log('哪来的镂空的回字！！！')
            }else if(inquiry == 2){
                var h ='';
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
                if(i==4 && j==4){
                    h += '  ';
                }else
                if((i == 0 || i == 8 || j == 0 || j == 8) || (i>2 && i<6 && j>2 && j<6)){
                    h += ' *';
                }else{
                    h += '  ';
                }
            }
            h += '\n';
        }
        console.log(h);
            }
            break;
    
        //梯形
        case '5':
            if(inquiry == 1){
                var e = '';
            for(var i=0;i<8;i++){
                for(var j=0;j<7-i;j++){
                    e += '  ';
                }
                for(var j=0;j<i*2+1;j++){
                    if((i>=3 && i<=7 && j==0)||(i==3||i==7) || (i>=3 && i<=7 && j==2*i)){
                    e += ' *';
                    }else{
                        e += '  ';
                    }
                }
                e += '\n';
            }
            console.log(e);
            }else if(inquiry == 2){
                var e = ''; 
                for(var i=0;i<8;i++){
                    for(var j=0;j<7-i;j++){
                        e += '  ';
                    }
                    for(var j=0;j<i*2+1;j++){
                        if( i >2){
                        e += ' *';
                        }else{
                            e += '  ';
                        }
                    }
                    e += '\n';
                    }
                    console.log(e);
            }
            break;
    
        case '6':
            flage = 0;
            return 1;
    
        default:
            console.log('输入正确的图形!!!');
            break;
    }

    // console.log(menu)
})()


