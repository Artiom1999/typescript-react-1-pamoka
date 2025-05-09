import { Button } from './components/Button';
import { List } from './components/List';
import { ObjectList } from './components/ObjectList';
import { ProductList } from './components/ProductList';
import { UserProfile } from './components/UserProfile';
import { UserForm } from './components/UserForm';
import { Alert } from './components/Alert';
import { UserRoleBadge } from './components/UserRoleBadge';
import { ShippingStatus } from './components/ShippingStatus/ShippingStatus';
import { ShippingStatusEnum } from './components/ShippingStatus/types';

function App() {
  return (
    <>
      <UserProfile name={'Artiom'} age={33} isActive={true} />
      <UserProfile name={'Tomas'} isActive={true} />
      <List items={['obuolys', 'kriause', 'bananas', 1]} />

      <List items={[10, 12, 12]} />
      <ObjectList
        items={[
          { name: 'Artiom', age: 33 },
          { name: 'Tomas', age: 50 },
        ]}
      />
      <Button
        size="32px"
        title="Paspausk mane"
        onClick={() => console.log('Mygtukas paspaustas')}
      />
      <Button
        size="24px"
        title="Paspausk mane"
        onClick={() => console.log('Mygtukas paspaustas')}
      />
      <Button
        size="16px"
        title="Paspausk mane"
        onClick={() => console.log('Mygtukas paspaustas')}
      />
      <ProductList
        items={[
          { name: 'Obuolys', price: 3, isOnSale: true },
          { name: 'Bananai', price: 2, isOnSale: false },
          { name: 'Vynuogės', price: 4.5, isOnSale: true },
        ]}
      />
      <UserForm />
      <Alert type="success" message="Sekme!" />
      <Alert type="warning" message="Normalu" />
      <Alert type="error" message="Sugedo!" />
      <UserRoleBadge role="admin" name="John" />
      <ShippingStatus id={312} status={ShippingStatusEnum.Delivered} />
    </>
  );
}

export default App;
