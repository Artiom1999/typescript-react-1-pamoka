interface ButtonProps {
  size: '32px' | '24px' | '16px' | '52px';
  title: string;
  // voidreiskia, kad funkcija nieko negrazina
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ size, title, onClick }) => {
  return (
    <button onClick={onClick} style={{ fontSize: size }}>
      {title}
    </button>
  );
};
