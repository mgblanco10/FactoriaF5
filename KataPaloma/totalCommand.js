function totalCommand(){
    const total = this.scannedItems.reduce((acc, curr) => acc + curr, 0);
    return `Total: $${total.toFixed(2)}`;
}
module.exports = totalCommand;