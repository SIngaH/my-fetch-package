myFetch
Opgave:

I umd.js filen skal der tilføjes endnu et fallback til de 4 HTTP metoder, vi allerede har skrevet: myFetch.post(), myFetch.get(), myFetch.put() og myFetch.del().

Vi har allerede skrevet fallback efter følgende princip:

Hvis fetch er en funktion {
	udfør en request med fetch
}

ellers {
	udfør en request med XMLHttpRequest
}

Nu skal vi tilføje et fallback som gør, at vi også kan lave requests ved hjælp af Node.js. Det vil sige, vi skal kunne lave requests fra et script, som ikke bliver kørt i browseren. Fallbacket skal følge dette princip:

Hvis fetch er en funktion {
	udfør en request med fetch
}

ellers, hvis XMLHttpRequest er en funktion {
	udfør en request med XMLHttpRequest
}

ellers {
	udfør en request med et node.js-baseret request værktøj
}

Tænk over følgende:

Hvordan laver man requests til et web API fra et Node.js script?

Skal dette Node.js-baserede værktøj nævnes øverst i vores UMD-factory som en dependency?