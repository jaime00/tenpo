import { ALERT_BY_DEFAULT, DURATION_ALERT } from '@/constants/alert';
import { RESPONSE_TYPE } from '@/constants/response';
import type { AlertType } from '@/types/alert';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

export default function useAlert() {
  const customAlert = ({
    type,
    message,
    errorMessage,
  }: AlertType = ALERT_BY_DEFAULT) => {
    const options = {
      id: uuidv4(),
      duration: DURATION_ALERT,
      style: {},
    };
    switch (type) {
      case RESPONSE_TYPE.SUCCESS:
        toast.success(message, options);
        break;
      case RESPONSE_TYPE.ERROR:
        toast.error(message, options);
        if (errorMessage) console.log(errorMessage);
        break;
      case 'icon':
        toast(message, {
          ...options,
          icon: '👋',
        });
        if (errorMessage) console.log(errorMessage);
        break;
      default:
        toast(message, options);
        break;
    }
  };

  return {
    customAlert,
  };
}
