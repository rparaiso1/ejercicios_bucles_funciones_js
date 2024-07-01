const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
      // insert code
    if (capitals.hasOwnProperty(country)) {
      return capitals[country];
    } else {
      return 'Capital not found';
    }
  }
  
  console.log(getCapital('Spain')); 
  console.log(getCapital('Brazil')); 
  console.log(getCapital('France')); 