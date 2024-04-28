import { notification } from "antd";

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

const DefaultReturnMessage: Record<NotificationType, string> = {
  success: 'Sent successfully',
  info: 'Information',
  warning: 'Warning',
  error: 'Error occurred'
};

export const useCustomNotification = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (type: NotificationType, message?: string) => {
        api[type]({
          message: message || DefaultReturnMessage[type]
        });
      };

    return {
        openNotification,
        contextHolder
    };
}
