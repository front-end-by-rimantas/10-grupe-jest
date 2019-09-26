function dalyba( a, b ) {
    if ( typeof(a) !== 'number' &&
         typeof(b) !== 'number' ) {
        return 'KLAIDA: abu ne skaicius';
    }
    if ( typeof(b) !== 'number' ) {
        return 'KLAIDA: antras ne skaicius';
    }
    if ( typeof(a) !== 'number' ) {
        return 'KLAIDA: pirmas ne skaicius';
    }

    return a/b;
}

module.exports = dalyba;