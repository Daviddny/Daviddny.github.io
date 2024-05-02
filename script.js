function showPoem(month) {
    var poem = getPoem(month);
    document.getElementById("poem").innerHTML = poem;
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
}

function getPoem(month) {
    var poems = {
        "1": "Pensando en ti, paso en día pensando en ti, enseñame a escuchar tus labios a leer el sol",
        "2": "Tengo miedo, ayúdame a caminar, pues nunca solo yo podré encontrar la forma de ser libre",
        "3": "Tengo sed de beber tu voz, aunque este muda de amor",
        "4": "Quiero morirme en ti, sobre tu pecho abrazame",
        "5": "Llevame hasta ti quiero vivir en tus labios, quiero ser tu amor",
        "6": "Soñaré tu voz, para que me hables de noche, para que me den calor",
        "7": "No voy a dejarte pues tú eres mi amor, no voy a olvidarte mientras viva",
        "8": "Sigueme, no hay nada que perder, si quieres ser feliz podemos construir una historia de amor",
        "9": "En la torre más alta brilla tu luz, En tus ojos encuentro mi paz y mi cruz.",
        "10": "Como un enredo de hilos en la maraña,Nuestro amor se teje en cada mañana.",
        "11": "En cada nota de tu risa, en cada canción, Nuestro amor se convierte en una dulce ilusión.",
        "12": "Como las estrellas en el cielo nocturno, Nuestro amor brilla con un fulgor eterno.",
        "13": "En tu abrazo encuentro mi hogar, En tu amor, siempre quiero descansar.",
        "14": "Como un sueño dorado en la noche oscura, Nuestro amor es la promesa más pura",
        "15": "En cada gesto, en cada sonrisa, en cada instante, Tu presencia es la magia que me hace amarte.",
        "16": "Eres lo único que yo amo, y a pesar que no estás, te llevo cocida a mí piel",
        "17": " Y me enamoré de una chica que nunca tuvo miedo de fallar, para mí eso la hace perfecta.",
        "18": "El amor no se da por vencido, jamás pierde fé, siempre tiene esperanza, y se mantiene firme en toda circunstancia",
        "19": "Que Dios te bendiga y siempre te cuide, que Dios te mire con agrado y siempre te muestre su bondad, que Dios te llene de paz y amor.",
        "20": "De la manera que Dios te ama, yo te amo, eres mi todo.",
        "21": "En mis ojos eres de gran estima, eres honorable, y yo te amo. Daré todo de mi por tu amor y vida",
        "22": "Que el Señor te bendiga y te guarde; que el Señor te mire con agrado y te extienda su amor; que el Señor te muestre su favor y te conceda la paz",
        "23": "El amor es paciente, es bondadoso. No es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor. El amor no se deleita en la maldad, sino que se regocija con la verdad. Todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta.",
        "24": "Y yo a ti te amo"
    };
    
    return poems[month];
}
