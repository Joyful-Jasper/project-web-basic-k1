const ticketsData = [
  {
    id: 'tix-abcd123',
    logoMaskapai: 'https://placekitten.com/24/24',
    nameMaskapai: 'Lorem Ipsum',
    fromName: 'Jakarta',
    fromNameCode: 'JKTA',
    fromCode: 'CBA',
    fromTime: '15:00',
    estTime: '1h 11m',
    transferCount: 'Langsung',
    destName: 'Surabaya',
    destNameCode: 'SUB',
    destCode: 'ZYX',
    destTime: '21:00',
    depart: 'Rabu, 22 Juni 2022',
    seatClass: 'Ekonomi',
    pricePerTix: 123_456,
    prices: [
      {
        id: 0,
        name: 'adult',
        price: 123_456,
      },
      {
        id: 1,
        name: 'child',
        price: 123_456,
      },
      {
        id: 2,
        name: 'infant',
        price: 123_456 * 0.2,
      },
      {
        id: 3,
        name: 'Free protection',
        price: 'Free',
      },
    ],
  },
  {
    id: 'tix-xyz987',
    logoMaskapai: 'https://placekitten.com/24/24',
    nameMaskapai: 'Lorem Ipsum',
    fromName: 'Bandung',
    fromNameCode: 'BDG',
    fromCode: 'BAC',
    fromTime: '10:00',
    estTime: '1h 21m',
    transferCount: 'Langsung',
    destName: 'Malang',
    destNameCode: 'MLG',
    destCode: 'ZYX',
    destTime: '12:21',
    depart: 'Kamis, 23 Juni 2022',
    seatClass: 'Ekonomi',
    pricePerTix: 100_900,
    prices: [
      {
        id: 0,
        name: 'adult',
        price: 100_900,
      },
      {
        id: 1,
        name: 'child',
        price: 100_900,
      },
      {
        id: 2,
        name: 'infant',
        price: 100_900 * 0.2,
      },
      {
        id: 3,
        name: 'Free protection',
        price: 'Free',
      },
    ],
  }
];


export { ticketsData };
