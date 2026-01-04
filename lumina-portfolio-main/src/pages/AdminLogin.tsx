import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Login Disabled</h1>
      <p className="mb-4 text-muted-foreground">The admin panel is currently unavailable during the migration.</p>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );
};

export default AdminLogin;
