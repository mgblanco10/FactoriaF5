const {scanBarcode, totalCommand} = require("./barcode");

test("scanBarcode 12345 should display price $7.25",()=>{
    expect(scanBarcode(12345)).toBe("$7.25");
})

test("scanBarcode 23456 should display price $12.50",()=>{
    expect(scanBarcode(23456)).toBe("$12.50");
})

test('should return an error message for an invalid barcode', () => {
    expect(scanBarcode(99999)).toBe('Error: barcode not found');
  });


test('should return an error message for an empty barcode', () => {
    expect(scanBarcode('')).toBe('Error: empty barcode');
});

test('should return the correct total price for scanned items', () => {
    // scanBarcode('12345');
    // scanBarcode('23456');
    expect(totalCommand([12345, 23456])).toBe('Total: $19.75');
});

test('should return $0 for an empty list of scanned items', () => {
    expect(totalCommand()).toBe('Total: $0.00');
});