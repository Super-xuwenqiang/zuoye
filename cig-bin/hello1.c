#include <stdio.h>
#include <stdlib.h>
#include <sqlite3.h>

int callback(void *para, int col_count, char **col_value, char **col_name) {
    printf("<div class='box1' style='backgroun:#EE00EE;' ");
    printf("<div class='title'><b style='font-size:50px;'>%s</b></div>\n",col_value[1]);
    printf("<div class='created_at'>%s</div>\n",col_value[3]);
    printf("<div class='content'>%s</div>\n",col_value[2]);
    printf("</div>\n");

    return 0;
}

       int show(sqlite3 *db){
        //    printf("%s\n",getenv("QUERY_STRING"));

           char *id = getenv("QUERY_STRING");
           char *err;
           char sql[100]; 
           sprintf(sql,"SELECT * FROM news WHERE id=%d ", atoi(id));

        //    sprintf(sql," select *from news where id=10");
   
            if(0 !=sqlite3_exec(db, sql, callback, NULL, &err)){
                    printf("%s\n",err);
                    exit(-1);
                }
                return 0;
            }

int main() {
    //基础不可更改(协议内容)
    printf("Content-Type: text/html\n\n");

        char *header = "<!DOCTYPE html>" \
                    " <html lang='en'> " \
                    "<head>" \
                    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" \
                    " <meta charset='UTF-8'>" \
                    " <title>信息发布</title>" \
                    "<style></style>"
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