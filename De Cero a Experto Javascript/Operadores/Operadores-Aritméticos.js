// Tipos de operadores Aritméticos
let a, b, c, d, e, f, g;

// + Suma // Ej. x+y
a = 3+4;
console.log(a);

// - Resta // Ej. x-y
b = 6-2;
console.log(b);

// * Multiplicacíon // Ej. x*y
c = a*2;
console.log(c);

// / División // Ej. x/y
d = b/2.5;
console.log(d);
console.log(typeof d);


// % Modulo (Residuo Dvisión) // Ej. x%y
f = 9%2;
console.log(f);

// ** Potencia (Exponente) // Ej. x**y
e = 2**3; // 2*2*2=8
console.log(e);

e= Math.pow(2,3);
console.log(e);

// ++ Incremento // Ej. ++x ó x++
g = 0;
++g;
console.log(g);
g++;
console.log(g);

// -- Decremento // Ej. --x ó x--
--g;
console.log(g);
g--;
console.log(g);


// Ejemplo
a = 5;
b = 2;
c = ++a * b--;
console.log(c);
console.log (a);
console.log (b);