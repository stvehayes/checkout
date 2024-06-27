export const products = [
  {
    type: 'Advanced Security',
    seats: 100,
    price: {
      monthly: 49,
      yearly: 588,
    },
    description:
      'Code scanning, secret scanning, and dependency review for your codebase.',
    cadence: 'monthly',
    license: 'committer',
  },
  {
    type: 'Enterprise',
    seats: 10,
    price: {
      monthly: 21,
      yearly: 231,
    },
    description:
      'Security, compliance, and flexible deployment for enterprises',
    cadence: 'monthly',
    license: 'user',
  },
];

export const organization = {
  name: 'GitHub',
  description: 'GitHub, Inc.',
  avatar: 'https://avatars.githubusercontent.com/u/9919',
};

export const billing = {
  name: 'Mona Lisa',
  type: 'Personal account',
  company: 'GitHub, Inc.',
  address: '88 Colin P Kelly Jr St',
  city: 'San Francisco, CA 94107',
  country: 'United States',
  avatar: 'https://avatars.githubusercontent.com/u/92997159?v=4',
};

export const payment = {
  card: 'Visa',
  number: '5467',
  expiration: '12/2030',
};
