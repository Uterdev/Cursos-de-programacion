#include<stdio.h>

int main()
{
    float lado;
    float superficie;
    printf("ingrese el valor del lado del cuadrado:");
    scanf("%f",&lado);
    superficie=lado*lado;
    printf("la superficie del cuadrado es:");
    printf("%f",superficie);
    getchar();
    return 0;

}
