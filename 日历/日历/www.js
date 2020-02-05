//顶部显示的box
var box = document.getElementById('top-conter'); 


//往前一个月
document.getElementById('left').onclick = function(){
    lastMonth();
}


//向后一个月
document.getElementById('right').onclick = function(){
    nextMonth();
}


//日期
var getDate = document.getElementById('bottom-bottom');
var dateday = document.getElementsByClassName('date');


//自动显示当前年月
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
// console.log(month)
var day = date.getDate();

console.log(date)

var today;
let nowDate = year + '年' + month + '月' + day + '日';
box.innerHTML = nowDate;


//点击显示天
function getdate(num){
    day = num.target.innerHTML;
    let qwe = num.target.className;
    console.log(day)
    if(qwe != 'lastmonth'){
                let nowDate = year + '年' + month + '月' + day + '日';
                box.innerHTML = nowDate;
    }else{
        if(day > 20){
            lastMonth();
        }else{
            nextMonth();
        }
    }
}



function blackdate(){
    today = getmonthday(year,month);
    // console.log(today); //这个月几天
    var firstDay = (new Date(year,month-1,1)).getDay();//一号第几天
    console.log(firstDay);
    var lastMonthDay = getmonthday(year,month);
    console.log(lastMonthDay);
    var lastDay = lastMonthDay - firstDay+1;//上个月第一行第一个是第几天
    // console.log(lastDay);
    // console.log(dateday)

   


    var num1 = 1, nextnum = 1;
    for(var i = 0;i < dateday.length;i++){
        let list=dateday[i].children;
            // console.log(list)
        for(var line = 0;line < list.length;line++){
            list[line].style.color = 'black';
            if(i == 0){
                if(line >= firstDay){
                        list[line].innerHTML = num1++;
                        list[line].setAttribute("class","thismonth");
                }else{
                    list[line].innerHTML = lastDay++;
                    list[line].setAttribute("class","lastmonth");
                    list[line].style.color = 'gray';
                }
            }else{
                if(num1 <= today){
                    list[line].setAttribute("class","thismonth");
                    list[line].innerHTML = num1++;
                }else{
                    list[line].innerHTML = nextnum++;
                    list[line].setAttribute("class","lastmonth");
                    list[line].style.color = 'gray';
                }
            }
        }
    }
}



blackdate()

//判定月数
function getmonthday(year,month){
    if(month == 2 ){
        days = (year%4 == 0) && (year%100 !== 0) || (year%400 == 0) ? 29:28;
    }else if(month <= 7){
        days = month%2 == 1 ?31:30;
    }else if(month >= 8){
        days = month%2 == 0 ?31:30;
    }
    return days;
}


//上一个月
function lastMonth(){
    month --;
    if(month < 1){
        month = 12;
        year -= 1;
    }
    console.log(month)
    let nowDate = year + '年' + month + '月' + day + '日';
    box.innerHTML = ' ';
    box.innerHTML = nowDate;
    blackdate();
}


//下一个月
function nextMonth(){
    month ++;   
    if( month > 12){
        month = 1;
        year += 1 ;
    }
    console.log(month)
    let nowDate = year + '年' + month + '月' + day + '日';
    box.innerHTML = nowDate;
    blackdate();
}



document.getElementById('top-box').onclick = function(){
    alert('qwe');
}



