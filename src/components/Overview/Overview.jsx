import { Text, Heading, Button, Link, Box } from '@primer/react';

function Overview({
  credit,
  licenses,
  billingPeriod,
  monthlyPrice,
  yearlyPrice,
  product,
  tax,
}) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const safeLicenses = licenses > 0 ? licenses : 1;
  const totalCycle = billingPeriod === 'monthly' ? monthlyPrice : yearlyPrice;
  const totalWithLicenses =
    totalCycle * safeLicenses * (billingPeriod === 'monthly' ? 1 : 12);
  const subTotal = totalWithLicenses - credit;
  const final = subTotal + subTotal * tax;

  const CTA = () => (
    <Box sx={{ marginTop: 3 }}>
      <Button
        variant='primary'
        sx={{ width: '100%' }}
      >
        {billingPeriod === 'monthly'
          ? 'Activate subscription'
          : `Pay ${formatter.format(Math.max(final, 0))}`}
      </Button>
      <Box
        sx={{
          maxWidth: '83%',
          paddingTop: 3,
          margin: '0 auto',
          fontSize: 1,
          color: 'fg.muted',
          textAlign: 'center',
        }}
      >
        By clicking pay you agree to our{' '}
        <Link
          href='https://docs.github.com/en/site-policy/github-terms/github-terms-of-service'
          inline
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          href='https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement'
          inline
        >
          Privacy
        </Link>
        .
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        paddingTop: 160,
        '@media (max-width: 768px)': { paddingTop: 0 },
      }}
      aria-labelledby='overview-heading'
    >
      <Box
        sx={{
          top: 0,
          display: 'flex',
          padding: 3,
          flexDirection: 'column',
          border: '1px solid',
          borderColor: 'border.default',
          borderRadius: 2,
          boxShadow: 'shadow.small',
          paddingBottom: 32,
          fontSize: 1,
        }}
      >
        <Heading
          as='h2'
          sx={{
            paddingBottom: 3,
            fontSize: 2,
            borderBottom: '1px solid ',
            borderColor: 'border.default',
            flex: 1,
          }}
        >
          Summary
        </Heading>
        <Box
          sx={{
            display: 'flex',
            py: 3,
            borderBottom: '1px solid ',
            borderColor: 'border.default',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <Text sx={{ fontWeight: 600 }}>{product}</Text>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Text
                sx={{
                  fontSize: 1,
                  color: 'fg.muted',
                }}
              >
                {billingPeriod.charAt(0).toUpperCase() + billingPeriod.slice(1)}
              </Text>
              <Text
                sx={{
                  fontSize: 1,
                  color: 'fg.muted',
                }}
              >
                ·
              </Text>
              <Text
                sx={{
                  fontSize: 1,
                  color: 'fg.muted',
                }}
              >
                {licenses} licenses
              </Text>
            </Box>
          </Box>
          <Text>{formatter.format(totalWithLicenses)}</Text>
        </Box>
        <Box
          sx={{
            display: 'flex',
            py: 3,
            flexDirection: 'column',
            gap: 2,
            borderBottom: '1px solid ',
            borderColor: 'border.default',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text sx={{ fontWeight: 600 }}>Subtotal</Text>
            <Text>{formatter.format(subTotal)}</Text>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text sx={{ fontWeight: 600 }}>Tax</Text>
            <Text>{formatter.format(subTotal * tax)}</Text>
          </Box>
        </Box>
        {billingPeriod === 'monthly' && (
          <Box
            sx={{
              display: 'flex',
              py: 3,
              flexDirection: 'column',
              gap: 2,
              borderBottom: '1px solid ',
              borderColor: 'border.default',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Text sx={{ fontWeight: 600 }}>Monthly payment</Text>
                <Text
                  sx={{
                    fontSize: 1,
                    color: 'fg.muted',
                  }}
                >
                  Due Aug 1, 2024
                </Text>
              </Box>
              <Text>{formatter.format(final)}</Text>
            </Box>
          </Box>
        )}
        <CTA />
      </Box>
    </Box>
  );
}

export default Overview;
