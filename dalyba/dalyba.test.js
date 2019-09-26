const dalyba = require('./dalyba.js');

it('Gera dalyba', () => {
    expect( dalyba(8, 2) ).toBe(4);
})

it('Gera dalyba', () => {
    expect( dalyba(8, 4) ).toBe(2);
})

it('Gera dalyba', () => {
    expect( dalyba(81, 3) ).toBe(27);
})

it('Ne skaiciaus tipas', () => {
    expect( dalyba(81, 'asd') ).toBe('KLAIDA: antras ne skaicius');
})

it('Ne skaiciaus tipas', () => {
    expect( dalyba('asd', 3) ).toBe('KLAIDA: pirmas ne skaicius');
})

it('Ne skaiciaus tipas', () => {
    expect( dalyba('qwe', 'asd') ).toBe('KLAIDA: abu ne skaicius');
})