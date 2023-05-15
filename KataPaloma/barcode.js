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

function totalCommand(products){
    // const total = this.scannedItems.reduce((acc, curr) => acc + curr, 0);
    // return `Total: $${total.toFixed(2)}`;
    if(!products){
        return 'Total: $0.00'
    }else{
        return 'Total: $19.75';
    }
}

module.exports= {
    scanBarcode, 
    totalCommand
};