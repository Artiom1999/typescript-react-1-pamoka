import { ShippingStatusEnum } from './types';

interface ShippingStatusProps {
  id: number;
  status: ShippingStatusEnum;
}

export const ShippingStatus: React.FC<ShippingStatusProps> = ({
  status,
  id,
}) => {
  const getColor = () => {
    switch (status) {
      case ShippingStatusEnum.Pending:
        return 'green';
      case ShippingStatusEnum.Shipped:
        return 'red';
      case ShippingStatusEnum.Delivered:
        return 'blue';
      case ShippingStatusEnum.Canceled:
        return 'orange';
    }
  };
  return (
    <div>
      <h3>Usakymo numeris #{id}</h3>
      <p>
        Usakymo statusas:{' '}
        <strong style={{ color: getColor() }}>{status}</strong>
      </p>
    </div>
  );
};
