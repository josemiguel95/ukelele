input.onButtonPressed(Button.A, function () {
    music.ringTone(parseFloat(lista_frecuencias[cuerda]))
})
input.onButtonPressed(Button.AB, function () {
    music.rest(music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    if (cuerda < 5) {
        cuerda += 1
    } else {
        cuerda = 0
    }
    basic.showString("" + (lista_de_notas[cuerda]))
    music.ringTone(parseFloat(lista_frecuencias[cuerda]))
})
let lista_frecuencias: string[] = []
let lista_de_notas: string[] = []
let cuerda = 0
cuerda = 4
lista_de_notas = [
"E",
"A",
"D",
"G",
"B",
"E"
]
lista_frecuencias = [
"335",
"440",
"547",
"761",
"906",
"1516"
]
basic.showString("" + (lista_de_notas[cuerda]))
