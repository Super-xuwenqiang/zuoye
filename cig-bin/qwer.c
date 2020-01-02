#include <stdio.h>
#include <stdlib.h>
#include "sqlite3.h"


typedef struct{
    int id;
    char *title;
    char *content;
    char *created_at;
}Message;



int insert(sqlite3 *db,Message new){
    char *err;
    char sql[100];

    new.title = malloc(sizeof(char));
    new.content = malloc(sizeof(char));
    new.created_at = malloc(sizeof(char));

     printf("输入标题：\n");
    scanf("%s",new.title);
    printf("输入内容：\n");
    scanf("%s",new.content);
    printf("输入时间:\n");
    scanf("%s",new.created_at); 

    sprintf(sql,"INSERT INTO news (title,content,created_at) VALUES ('%s','%s','%s')",
                    new.title,new.content,new.created_at);

    if(0 != sqlite3_exec(db,sql,NULL,NULL,&err)){
        printf("%s\n",err);
        exit (-1);
    }
    return 1;

}

int callback(void *para, int col_count, char **col_value, char **col_name) {

    for (int i = 0; i < col_count; i++) {
        printf("%s: %s \n", col_name[i], col_value[i]);
    }

//    printf("%s: %s \n", col_name[1], col_value[2]);

    printf("=================\n");

    return 0;
}



int show(sqlite3 *db)
{

	char *err;
    	char sql[100];

    	sprintf(sql, "SELECT * FROM news");

    	if (0 != sqlite3_exec(db, sql, callback, NULL, &err)) {
        	printf("%s\n", err);
        	exit(-1);
   	 }
	return 0;

}



int del(sqlite3 *db,int x)
{
	char *err;
        char sql[100];
	sprintf(sql, "DELETE FROM news WHERE id='%d'",x);
	if (0 != sqlite3_exec(db, sql, callback, NULL, &err)) {
                printf("%s\n", err);
                exit(-1);
         }
        return 0;
}



int update(sqlite3 *db,Message new){
    char *err;
    char sql[100];
    new.title = malloc(sizeof(char));
    new.content = malloc(sizeof(char));
    new.created_at= malloc(sizeof(char));
    printf("请输入需要更新的ID： ");
    scanf("%d",&new.id);
    printf("请输入标题: ");
    scanf("%s",new.title);
    printf("请输出内容:");    
    scanf("%s",new.content);
    printf("请输出时间:");
    scanf("%s",new.created_at);
    printf("更新成功\n");

   sprintf(sql,"UPDATE news SET title = '%s',content = '%s',created_at = '%s' WHERE id = %d",new.title,new.content,new.created_at,new.id);
    if(SQLITE_OK != sqlite3_exec(db,sql,NULL,NULL,&err)){
        printf("%s\n",err);
        exit(-1);
    }
    return 0;
};


 int main(){

   sqlite3 *db = NULL;

    int res = sqlite3_open("cms.db",&db);
    if(res != 0){
        printf("open db fail\n");
        return -1;
    }

     int falg = 1;
     int i;
     int x;
     int count = 0;
     Message a;
     Message user[1000];
     while(falg){
        printf("=====菜单栏=====\n");
        printf("1.新增信息\n2.查看信息\n3.删除信息\n4.修改信息\n5.退出查询\n");
        scanf("%d",&i);

        switch(i){
        
            //增加信息
            case 1:
               insert(db,user[count]);
                break;

                //查询信息
            case 2:
                show(db);
                break;

                //删除信息
            case 3:
                printf("输入要删除的编号\n");
			    scanf("%d",&x);
                del(db,x);
                break;

                //更改信息
            case 4:
                update(db,user[count]);
                break;

                //返回
            case 5:
                falg = 0;
                printf("退出成功!!!\n");
                return 0;

                   //报错
            default :
                printf("请输入正确的项目!!!\n");
                printf("\n");
                break;

        }
     }
     return 0;
}
