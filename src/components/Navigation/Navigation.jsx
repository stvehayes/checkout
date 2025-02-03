import {
  MarkGithubIcon,
  ThreeBarsIcon,
} from '@primer/octicons-react';
import {
  Avatar,
  Box,
  Heading,
  IconButton,
} from '@primer/react';
import { ProductSwitcher } from '../../ProductSwitcher';
import ColorModeSwitcher from '../../ColorModeSwitcher';

export function Navigation() {
  const src = 'https://avatars.githubusercontent.com/u/13389614?v=4';
  const style = {
    color: 'fg.muted',
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          bg: 'canvas.subtle',
          border: '1px solid',
          borderColor: 'border.default',
          p: 3,
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            alignItems: 'center',
          }}
        >
          <IconButton
            sx={style}
            icon={ThreeBarsIcon}
            aria-label='Open menu'
          />
          <MarkGithubIcon size={32} />
          <Heading
            sx={{
              fontSize: '1',
            }}
          >
            Payment
          </Heading>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <ProductSwitcher />
          <ColorModeSwitcher />

          <Avatar
            size={32}
            src={src}
          />
        </Box>
      </Box>
    </Box>
  );
}
