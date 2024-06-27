export const products = [
  {
    name: 'Enterprise',
    type: 'Subscribe',
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
  {
    type: 'Subscribe',
    name: 'Advanced Security',
    seats: 10,
    price: {
      monthly: 49,
      yearly: null,
    },
    description:
      'Code scanning, secret scanning, and dependency review for your codebase.',
    cadence: 'monthly',
    license: 'committer',
  },

  // {
  //   type: 'Subscribe',
  //   name: 'Copilot',
  //   seats: 10,
  //   price: {
  //     monthly: 19,
  //     yearly: null,
  //   },
  //   description: 'The AI coding assistant elevating developer workflows',
  //   cadence: 'monthly',
  //   license: 'user',
  // },
  {
    type: 'Subscribe',
    name: 'Team',
    seats: 10,
    price: {
      monthly: 4,
      yearly: 44,
    },
    description: 'Advanced collaboration and deployment features for teams',
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
