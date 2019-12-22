let instruments = ['violin', 'harp', 'flute', 'french horn', 'piano'];

instruments.push('clarinet');
console.log(instruments);

instruments.splice(2,1);
console.log(instruments);

const instrumentsList = instruments.join(', ');
console.log(instrumentsList);
