document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("tipForm");
    const billTotal = document.getElementById("billTotal");
    const tipRange = document.getElementById("tipRange");
    const tipPercentageValue = document.getElementById("tipPercentageValue");
    const tipAmount = document.getElementById("tipAmount");
    const totalWithTip = document.getElementById("totalWithTip");

    form.addEventListener("input", updateTip);
    form.addEventListener("change", updateTip);

    function updateTip() {
        const bill = parseFloat(billTotal.value);
        const tip = parseFloat(tipRange.value);
        const tipValue = (bill * tip) / 100;
        const total = bill + tipValue;

        if (!isNaN(bill) && !isNaN(tip)) {
            tipPercentageValue.textContent = tip + "%";
            tipAmount.value = tipValue.toFixed(2);
            totalWithTip.value = total.toFixed(2);
        } else {
            tipPercentageValue.textContent = "0%";
            tipAmount.value = "";
            totalWithTip.value = "";
        }
    }
});