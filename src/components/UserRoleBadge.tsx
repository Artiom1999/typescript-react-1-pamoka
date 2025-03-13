type UserRoles = 'admin' | 'editor' | 'viewer';

interface UserRoleBadgeProps {
  role: UserRoles;
  name: string;
}

export const UserRoleBadge: React.FC<UserRoleBadgeProps> = ({ role, name }) => {
  const getColor = () => {
    switch (role) {
      case 'admin':
        return 'green';
      case 'editor':
        return 'blue';
      case 'viewer':
        return 'red';
    }
  };
  return <span style={{ color: getColor() }}>{name}</span>;
};
