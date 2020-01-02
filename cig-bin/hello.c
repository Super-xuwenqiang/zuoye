#include <stdio.h>
#include <stdlib.h>
#include <sqlite3.h>

int callback(void *para, int col_count, char **col_value, char **col_name) {

    printf("<li style='background-color:#87CEFF;border-radius: 4px;line-height: 50px;margin-bottom: 2px;text-align: center;margin-right:auto;margin-left:auto;width:400px;'><a href='hello1.cgi?%s'>%s</a></li>",col_value[0],col_value[1]);
    return 0;
}

       int show(sqlite3 *db){

                printf("<ul>");

                char *sql = "SELECT * FROM news";
                char *err;

                if(0 !=sqlite3_exec(db, sql, callback, NULL, &err)){
                    printf("%s\n",err);
                    exit(-1);
                }
                printf("</ul>");
                return 0;
            }


//gcc hellocgi.c -o hellocgi.cgi
int main() {
    //基础不可更改(协议内容)
    printf("Content-Type: text/html\n\n");

        char *header = "<!DOCTYPE html>" \
                    " <html lang='en'> " \
                    "<head>" \
                    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" \
                    " <meta charset='UTF-8'>" \
                    " <title>信息发布</title>" \
                    "</head>" \
                    "<body>" ;
                printf("%s\n", header);                                                         
                 
                printf("<style>a{  font-size: 20px;color: #969696;text-decoration: none}</style>");
                printf("<style>body,list{margin: 0;padding: 0;}</style>");
                printf("<style>li,ul,ol{list-style:none;}</style>");
               
                printf("<div style='font-size: 80px;background-color:#969696; line-height:80px; text-align: center;width: color:#fff;'><b>This is div</b></div>");

                        sqlite3 *db = NULL;

                        int res = sqlite3_open("cms.db",&db);
                        if(res != 0){
                            printf("open db fail\n");
                            return -1;
                        }

                        show (db);
                        sqlite3_close(db);
                        printf("</body></html>");

                        return 0;            
}