#include<stdio.h>

int main()
{
    int horasTrabajadas;
    float costoHoras;
    float sueldo;
    printf("Ingrese las horas trabajadas por el empleado:");
    scanf("%i",&horasTrabajadas);
    printf("Ingrese el pago por hora:");
    scanf("%f",&costoHoras);
    sueldo=horasTrabajadas*costoHoras;
    printf("el sueldo total a percibir es ");
    printf("%f",sueldo);
    getchar();
    return 0;
}
