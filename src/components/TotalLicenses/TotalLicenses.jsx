import { Box, Text, Heading, TextInput, SegmentedControl } from '@primer/react';

function TotalLicenses({
  licenses,
  billingPeriod,
  monthlyPrice,
  yearlyPrice,
  setBillingPeriod,
  setLicenses,
  product,
}) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        py: 3,
        flexDirection: 'column',
        '@media (max-width: 768px)': { py: 2 },
      }}
    >
      <Heading
        as='h2'
        sx={{ flex: 1, fontSize: 2 }}
      >
        Licenses
      </Heading>
      <Box
        sx={{
          display: 'grid',
          paddingTop: 3,
          gridTemplateColumns: 'auto',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: 3,
            fontSize: 2,
            flexDirection: 'column',
            border: '1px solid',
            borderColor: 'border.default',
            borderRadius: 2,
            boxShadow: 'shadow.small',
            gap: 3,
          }}
        >
          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>

            {yearlyPrice && (
              <SegmentedControl sx={{marginBottom: 3}} aria-label='Billing period'>
                <SegmentedControl.Button
                  defaultSelected
                  onClick={() => setBillingPeriod('monthly')}
                >
                  Monthly
                </SegmentedControl.Button>
                <SegmentedControl.Button
                  onClick={() => setBillingPeriod('yearly')}
                >
                  Yearly
                </SegmentedControl.Button>
              </SegmentedControl>
            )}

<Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 1,
            }}
          >
            <Text
              sx={{
                fontWeight: 600,
              }}
            >
              {product}
            </Text>
            <Text
              sx={{
                color: 'fg.muted',
              }}
            >
              Security, compliance, and flexible deployment
            </Text>
          </Box>

            </Box>
            <Box
              sx={{
                fontSize: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Text sx={{ fontWeight: 600 }}>
                {formatter.format(
                  billingPeriod === 'monthly' ? monthlyPrice : yearlyPrice
                )}{' '}
                / user
              </Text>
              <Text
                sx={{
                  fontSize: 0,
                  color: 'fg.muted',
                }}
              >
                per {billingPeriod === 'monthly' ? 'month' : 'year'}
              </Text>
            </Box>
          </Box>


          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <TextInput
              type='number'
              min={1}
              id='licenses'
              value={licenses}
              onChange={(e) => setLicenses(Number(e.target.value))}
              sx={{
                maxWidth: 96,
              }}
            />
            <Text
              sx={{
                fontSize: 1,
                fontWeight: 400,
                color: 'fg.muted',
              }}
              as='label'
              htmlFor='licenses'
            >
              licenses
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TotalLicenses;