import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Modal from "./components/Modal"
import CartContainer from './components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar/>
      <CartContainer />
    </main>)
}
export default App;
