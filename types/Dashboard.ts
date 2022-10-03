import { ChangeEvent, ReactNode } from 'react';

export interface DashboardTaskProps {
    title: string;
    subheader?: string;
    list: Array<Task>;
}

export interface DashboardTaskItem {
    checked: boolean;
    onChange:
        | ((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void)
        | undefined;
    task: Task;
}

export interface Task {
    id: string;
    label: string;
}

export interface MenuButton {
    actions: ReactNode;
    onClose: Function;
    onOpen: any;
    open: any;
}

export interface DashboardWidget {
    color?: string;
    icon: string;
    title: string;
    total: number;
    sx?: object;
}

export interface DashboardAnalytic {
    title: string;
    subheader?: string;
    chartData?: Array<any>;
    chartLabels?: Array<string>;
    chartColors?: Array<string>;
    list?: Array<object>;
}

export interface NewsItems {
    id: string;
    description: string;
    image: string;
    postedAt: string;
    title: string;
}

export interface OrderItems {
    id: string;
    time: string;
    title: string;
    type: string;
}
