import { useContext } from 'react';
import { ActionMenu, ActionList, Box } from '@primer/react';
import { products } from './data/Data';
import { ProductsContext } from './context/ProductsContext';
import { CadenceContext } from './context/CadenceContext';

export function ProductSwitcher() {
  const { selectedProduct, setSelectedProduct } = useContext(ProductsContext);
  const { updateCadence } = useContext(CadenceContext);

  const handleProductSwitch = (index) => {
    setSelectedProduct(index);
    updateCadence('monthly');
  };

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
          <ActionMenu.Button>
            {products[selectedProduct].name}
          </ActionMenu.Button>
          <ActionMenu.Overlay align='right'>
            <ActionList showDividers>
              <ActionList.Group selectionVariant='single'>
                {products.map((product, index) => (
                  <ActionList.Item
                    key={product.value}
                    href='#'
                    selected={index === selectedProduct}
                    onSelect={() => handleProductSwitch(index)}
                  >
                    {product.name}
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
