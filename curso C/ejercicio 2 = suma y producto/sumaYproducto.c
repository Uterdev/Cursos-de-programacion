#include<stdio.h>
#include<conio.h>

int main()
{
    int num1;
    int num2;
    int suma;
    int producto;
    printf("introduzca el valor del primer numero:");
    scanf("%i",&num1);
    printf("introduzca el valor del segundo numero:");
    scanf("%i",&num2);
    suma=num1+num2;
    printf("la suma de los dos numeros es =");
    printf("%i", suma);
    printf("\n");
    producto=num1*num2;
    printf("el producto de los dos numeros es =");
    printf("%i", producto);
    getch();
    return 0;
}

