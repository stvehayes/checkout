import { Box, Button, Heading } from '@primer/react';

export function Header({ hasEdit, title }) {
  return (
    <Box
      sx={{
        mb: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}
    >
      <Heading
        as='h2'
        sx={{ fontSize: 2 }}
      >
        {title}
      </Heading>
      {hasEdit && (
        <Box sx={{ mt: 1 }}>
          <Button size='small'>Edit</Button>
        </Box>
      )}
    </Box>
  );
}
