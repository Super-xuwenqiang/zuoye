#include <stdio.h>
#include <stdlib.h>
#include "sqlite3.h"

typedef struct{
    int id;
    char *title;
    char *content;
    char *date;
}Message;






//创建news表
// CREATE TABLE IF NOT EXISTS news(
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     title TEXT,
//     content TEXT,
//     date TEXT
// );
 
int insert(sqlite3 *db,Message message){
    char *err;
    char sql[100];

    sprintf(sql,"INSERT INTO news (title,content,date) VALUES ('%s','%s','%s')",
                    message.title,message.content,message.date);

    // printf("%s",sql);
    // return 0;

    if(0 != sqlite3_exec(db,sql,NULL,NULL,&err)){
        printf("%s\n",err);
        exit (-1);
    }
    return 0;
}



//gcc cms.c slite3.o
int main(){

    sqlite3 *db = NULL;

    int res = sqlite3_open("cms.db",&db);
    if(res != 0){
        printf("open db fail\n");
        return -1;
    }
    
    Message message = {0,"hello world","qwer","2019-12-30"};
    insert(db,message);


    
}


















