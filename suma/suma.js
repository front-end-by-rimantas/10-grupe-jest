function suma( a, b ) {
    if ( typeof(a) !== 'number' ) {
        return 'KLAIDA: pirmas kintamasis ne skaiciaus tipo.';
    }
    if ( typeof(b) !== 'number' ) {
        return 'KLAIDA: antras kintamasis ne skaiciaus tipo.';
    }
    return a+b;
}

module.exports = suma;