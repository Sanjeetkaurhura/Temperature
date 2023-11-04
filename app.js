document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const kelvinOutput = document.getElementById("kelvin");
    const convertButton = document.getElementById("convert");

    convertButton.addEventListener("click", function() {
        const celsius = parseFloat(celsiusInput.value);

        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;

            fahrenheitOutput.textContent = fahrenheit.toFixed(2);
            kelvinOutput.textContent = kelvin.toFixed(2);
        } else {
            fahrenheitOutput.textContent = "---";
            kelvinOutput.textContent = "---";
        }
    });
});