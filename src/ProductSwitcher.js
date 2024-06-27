import { useContext } from 'react';
import { ActionMenu, ActionList, Box } from '@primer/react';
import { products } from './data/Data';
import { ProductsContext } from './context/ProductsContext';

export function ProductSwitcher() {
  const { selectedProduct, setSelectedProduct } = useContext(ProductsContext);

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          dispaly: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <ActionMenu>
          <ActionMenu.Button size='small'>
            <Box sx={{ display: 'inline-block', ml: 2 }}>
              {products[selectedProduct].type}
            </Box>
          </ActionMenu.Button>
          <ActionMenu.Overlay align='right'>
            <ActionList showDividers>
              <ActionList.Group selectionVariant='single'>
                {products.map((product, index) => (
                  <ActionList.Item
                    key={product.value}
                    href='#'
                    selected={product === selectedProduct}
                    onSelect={() => setSelectedProduct(index)}
                  >
                    {product.type}
                  </ActionList.Item>
                ))}
              </ActionList.Group>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </Box>
    </Box>
  );
}
