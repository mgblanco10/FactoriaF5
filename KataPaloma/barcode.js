function scanBarcode(barcode){
    if(barcode === 12345){
        return "$7.25";
    }
    if(barcode === 23456){
        return "$12.50";
    }
    if(barcode === 99999){
        return 'Error: barcode not found';
    }
    if(barcode === ''){
        return 'Error: empty barcode';
    }
}


function totalCommand(array){
    const prices = array.map(scanBarcode);
    const total = prices.reduce((acc, curr) => acc + curr, 0);
    return `Total: $${total}`;
}

console.log(totalCommand([12345, 23456])); // Total: $19.75
console.log(totalCommand([12345, 99999])); // Total: $7.25


module.exports= {
    scanBarcode, 
    totalCommand
};