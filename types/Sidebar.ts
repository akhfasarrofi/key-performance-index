export interface SidebarItemProps {
    item: {
        title: string;
        path: string;
        icon: string;
        info: string;
        children?: Array<{
            title: string;
            path: string;
        }>;
    };
    active: any;
}

export interface SidabarMenuProps {
    sidebarConfig: Array<object>;
}

export interface ItemSidebar {}
