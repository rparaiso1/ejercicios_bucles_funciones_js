const cartoons = [
    { name: 'Mickey Mouse', debut: 1928 },
    { name: 'Bugs Bunny', debut: 1938 },
    { name: 'SpongeBob SquarePants', debut: 1999 },
    { name: 'Tom and Jerry', debut: 1940 },
    { name: 'Scooby-Doo', debut: 1969 },
    { name: 'The Flintstones', debut: 1960 },
    { name: 'Batman: The Animated Series', debut: 1992 },
    { name: 'The Simpsons', debut: 1989 },
    { name: 'Pokémon', debut: 1997 },
    { name: "Dexter's Laboratory", debut: 1996 }
  ];
  
  // Añade tu código de bucle aquí
serieAntigua = ""
masAntigua = Infinity
for (let i = 0; i < cartoons.length; i++) {
    if (cartoons[i].debut < masAntigua) {
        masAntigua = cartoons[i].debut;
      serieAntigua = cartoons[i].name;
    }
  }

console.log("La serie de dibujos animados más antigua es: " + serieAntigua);
