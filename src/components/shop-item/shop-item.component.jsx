import { useContext } from 'react';
import Button from '../button/button.component';
import './shop-item.styles.scss'
import { CartContext } from '../../contexts/cart.context';
import { Link } from 'react-router-dom';

const ShopItem = ({ item }) => {
  const { name, price, imageUrl} = item;
  const { addItemToCart } = useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(item);

  return (
    <div className='shop-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addItemToCartHandler}>Add to Cart</Button>
    </div>
  )
}

export default ShopItem;
