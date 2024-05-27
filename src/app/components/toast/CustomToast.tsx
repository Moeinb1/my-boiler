import { toast } from 'react-toastify';

const CustomToast = ({
  type = 'default',
  message = '',
}: {
  message?: string;
  type: 'default' | 'info' | 'success' | 'warning' | 'error';
}) => {
  return toast(message, {
    type,
    delay: 0,
    position: 'top-center',
    pauseOnHover: false,
  });
};

export default CustomToast;
