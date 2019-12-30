#include <stdio.h>

struct User{
    char name[20];
    int age;
    int sex;
} user_list[21];
int count=0;
int c=0;

 
//插入用户信息
int user_new ()
{   
        printf("输入用户名：\n");
        scanf("%s",user_list[c].name);
        printf("输入用户年龄：\n");
        scanf("%d",&user_list[c].age);
        printf("输入用户性别：\n");
        scanf("%d",&user_list[c].sex);
        count++;
        printf("你还可以添加%d条信息\n",20-count);
        
        int flag=1;
        while(flag){
            printf("是否还要新增：\n1.继续新增\n2.返回上一级\n"); 
            int q;
            scanf("%d",&q);
            switch(q){

                case 1:
                c++;
                count++;
                printf("输入用户名：\n");
                scanf("%s",user_list[c].name);
                printf("输入用户年龄：\n");
                scanf("%d",&user_list[c].age);
                printf("输入用户性别：\n");
                scanf("%d",&user_list[c].sex);
                printf("你还可以添加%d条信息\n",20-count);
                break;

                case 2:
                printf("返回上一级\n");
                flag = 0;
                break;
            }
        }         
}

//列出用户信息
int user_show()
{
    if(0==count) {
    printf("没有用户信息！！！\n") ;
    }else{
        printf("请输入你要查询什么业务：\n1.查询所有的用户信息\n2.查询单独的用户\n");
        int f;
        scanf("%d",&f);
        switch(f){
            case 1:
            for(int y=0;y<count;y++){
            printf("用户名：%s, 用户年龄：%d, 用户性别：%d\n",user_list[y].name,user_list[y].age,user_list[y].sex);
            }
            break;

            case 2:
            printf("输入要查询第几个用户：\n");
            int g;
            scanf("%d",&g);
            printf("用户名：%s, 用户年龄：%d, 用户性别：%d\n",user_list[g-1].name,user_list[g-1].age,user_list[g-1].sex);
            break;
        }
    }
}

//修改 用户信息
int user_revise()
{
    int  m;
    printf("请问你想修改第几个的人数据：\n");
    scanf("%d",&m);

        printf("输入用户名：\n");
        scanf("%s",user_list[m-1].name);
        printf("输入用户年龄：\n");
        scanf("%d",&user_list[m-1].age);
        printf("输入用户性别：\n");
        scanf("%d",&user_list[m-1].sex); 
    
}
// if(m<=0) printf("输入正确的编号！！！\n")；


int user_delete()
{
    printf("输入你要删除的第几个人：\n");
    int z;
    scanf("%d",&z);
    int i;
    for (i=z-1;i<count;i++){
        user_list[i]=user_list[i+1];
    }
    // user_list[z-1]=user_list[z];
    printf("删除成功!!!\n");
    count--;
}


int main(){

    int flag = 1;
    while(flag){    
        printf("请输入你要办理的业务：\n");
        printf("1.查看会员信息\n2.新增会员信息\n3.修改会员信息\n4.删除会员信息\n5.退出查询\n");
        int a;
        scanf("%d",&a);

        switch(a) {
            //查看会员的信息
            int i;
            case 1:
                user_show();
                break;
            
            //新增会员信息
            case 2:
                user_new();
                break;


            
            //修改会员信息 
            case 3:
                user_revise();
                break;



            //删除会员信息
            case 4:
                user_delete();
                break;


            
            //退出查询
            case 5:
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









