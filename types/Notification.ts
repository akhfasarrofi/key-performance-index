export interface NotificationDto {
    notification: {
        createdAt: string;
        id: string;
        isUnRead: Boolean;
        title: string;
        description: string;
        type: string;
        avatar: any;
    };
}
