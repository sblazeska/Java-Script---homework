//17. Направи for циклус кој на екран ќе ги испечати броевите од 1 до 9, секој број во нов ред.
for ( let i = 1; i < 9; i++) {
    console.log(i);
}

//18. Направи for циклус кој на екран ќе ги испечати броевите од 23 до 4, секој број во нов ред.

for ( let i = 23; i >= 4; i--) {
   console.log(i);
}

//19. Направи for циклус кој на екран ќе ги испечати само парните проеви од 1 до 100. *Задача 9 може да ти помогне.

for ( let i = 2; i <= 100; i++) {
   if(i % 2 == 0 ) console.log(i);
}

//20. Направи for циклус кој на екран ќе почне да ги принта броевите од 25 до 63, но кога ќе стигне до 32, со break направете да излезе од циклусот.
for ( let i = 25; i <= 63; i++) {
   if(i > 32) break;
    console.log(i);
}