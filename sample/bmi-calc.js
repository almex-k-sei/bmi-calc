/*height(身長)とwiight(体重)から、BMIを算出 */
function calcBmi() {
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value
    var bmi = weight / Math.pow(height / 100, 2)
    document.getElementById("bmi").value = bmi
}
