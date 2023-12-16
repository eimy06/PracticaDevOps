const { obtenerNombreCompleto } = require('./script');

test('obtenerNombreCompleto devuelve el nombre y la matrícula correctamente', () => {
    const resultado = obtenerNombreCompleto('Eimy L. Figueroa', '2020-9190');
    expect(resultado).toBe('Hola, soy Eimy L. Figueroa. Matrícula: 2020-9190');
});