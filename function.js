


/* funktion  3 para übergeben      1+2Zahlen  3teZeichen(+ - / * ) 
wenn eingabe falsch war, dann Fehler zurück geben

*/

function rechnen(zahl1, zahl2, paraRechenZeichen) {
    let z = paraRechenZeichen
    let ergebniss = 0
    if ((zahl1 >= 0 && zahl2 >= 0) && (z == "+" || z == "-" || z == "/" || z == "*")) {
        if (z == "+") {
            ergebniss = zahl1 + zahl2

        } 
        else if (z == "-") {
            ergebniss = zahl1 - zahl2
        }
        else if (z == "/") {
            ergebniss = zahl1 / zahl2
        }
        else if (z == "*") {
            ergebniss = zahl1 * zahl2
        }

        return { wert : ergebniss,
                boolean : true, }
    } else {
        return [false, "wiederhole die Eingabe"]
    }
}


/* export default rechnen
 */
export {rechnen}
