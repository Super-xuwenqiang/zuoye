#include <stdio.h>
#include <stdlib.h>
typedef  struct
{
    int id;
    char *name;
    int age;
    int sex;
    int tel;
} User;

//添加信息
User add() {
    User u;
    u.name = malloc(sizeof(char));
    printf("请输入名字: ");
    scanf("%s",u.name);
    printf("请输出您的年龄:");    
    scanf("%d",&u.age);
    printf("请输出您的电话:");
    scanf("%d",&u.tel);
    printf("请输出您的性别:");
    scanf("%d",&u.sex);
    // printf("id:%d 姓名:%s 年龄:%d 性别%d 电话:%d\n",count+1,u.name,u.age,u.sex,u.tel);
    printf("恭喜新增成功\n");
    // count++;
    return u;
};


//主菜单
int menu()
 {
    printf("=========主菜单========\n");
    printf("1.新增会员\n");
    printf("2.查看会员\n");
    printf("3.删除会员\n");
    printf("4.修改会员\n");
    printf("5.退出\n");
    // printf("=========主菜单========\n");
    printf("请输入: ");
}


//查看信息
void sel(int count,User user[])
{
    for(int a=0;a<count;a++){
        if(user[a].id!=0){
         printf("id:%d 姓名:%s 年龄:%d 性别%d 电话:%d\n",user[a].id,user[a].name,user[a].age,user[a].sex,user[a].tel);  
        }
    }
}

//删除信息
void del(int count,User user[])
{
     int x;
    printf("请您输入需要删除的id：");
    scanf("%d",&x);
    for(int i = x-1; i < count;i++){
        if(user[i].id == x){
            user[i]  = user[i+1];
            count--;
        }
    }
}

//修改信息
void modify(int count,User user[])
{

    int j;
    printf("请您输入需要修改的ID: ");
    scanf("%d",&j);
    for(int i = 0;i<count;i++){
        if(user[i].id==j){
            printf("请输入您的姓名：");
            scanf("%s",user[i].name);
            printf("请输入您的年龄：");
            scanf("%d",&user[i].age);
            printf("请输入您的性别：");
            scanf("%d",&user[i].sex);
            printf("请输入您的手机号码：");
            scanf("%d",&user[i].tel);
            printf("恭喜修改成功\n");
        }

    }
}


 int main(){
     int falg = 1;
     int i;
     int count = 0;
     User a;
     User user[1000];
     while(falg){
        menu();
        scanf("%d",&i);
        switch(i){
            //增加信息
            case 1:
               a = add();
                user[count].id = count+1;
                user[count].name = a.name;
                user[count].age = a.age;
                user[count].sex = a.sex;
                user[count].tel = a.tel;
                count++;
                break;
                //查询信息
            case 2:
                sel(count,user);
                break;
                //修改信息
            case 3:
                del(count,user);
                break;
                //更改信息
            case 4:
                modify(count,user);
                break;
                //返回
            case 5:
                falg = 0;
                printf("退出成功!!!\n");
                break;
                   //报错
            default :
                printf("请输入正确的项目!!!\n");
                printf("\n");
                break;

        }
     }
 }
 
