const suma = require('./suma.js');

it('Gera suma', ()=>{
    // testo logika
    // 2+3=5
    expect( suma(2, 3) ).toBe(5);
})

it('Gera suma', ()=>{
    expect( suma(2, 7) ).toBe(9);
})

it('catch wrong input type', ()=>{
    expect( suma(2, 'asd') ).toBe('KLAIDA: antras kintamasis ne skaiciaus tipo.');
})

it('catch wrong input type', ()=>{
    expect( suma('asd', 5) ).toBe('KLAIDA: pirmas kintamasis ne skaiciaus tipo.');
})