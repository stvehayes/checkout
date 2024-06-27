import { Text } from '@primer/react';
import { Section } from '../../Section/Section';

export function Form() {
  // const inputs = [
  //   {
  //     label: 'Business name',
  //     type: 'text',
  //   },
  //   {
  //     label: 'VAT number',
  //     type: 'text',
  //   },
  //   {
  //     label: 'Address',
  //     type: 'text',
  //   },
  //   {
  //     label: 'City',
  //     type: 'text',
  //   },
  //   {
  //     label: 'Country',
  //     type: 'text',
  //   },
  //   {
  //     label: 'State',
  //     type: 'text',
  //     caption: 'Required in certain countries',
  //   },
  //   {
  //     label: 'ZIP code',
  //     type: 'text',
  //     caption: 'Required in certain countries',
  //   },

  //   {
  //     label: 'Billing email',
  //     type: 'email',
  //   },
  // ];

  return (
    <Section
      title='Organization owner'
      hasEdit
    >
      <Text sx={{ fontSize: 1, textAlign: 'center' }}>Form</Text>
    </Section>
  );
}
