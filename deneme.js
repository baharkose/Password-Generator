document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.getElementById("rangeInput");
    const rangeValueDisplay = document.getElementById("rangeValue");

    // Başlangıçta sayfanın yüklenmesiyle birlikte değeri göster
    rangeValueDisplay.textContent = `Selected value: ${rangeInput.value}`;

    // Range input'un "input" olayını dinleyerek değeri anlık olarak güncelle
    rangeInput.addEventListener("input", function () {
        const selectedValue = rangeInput.value;
        rangeValueDisplay.textContent = `Selected value: ${selectedValue}`;

        // Burada seçilen değeri kullanarak başka işlemler yapabilirsiniz
        // Örneğin, bir grafik güncellemesi yapabilir veya değeri bir API'ye gönderebilirsiniz.
    });
});
