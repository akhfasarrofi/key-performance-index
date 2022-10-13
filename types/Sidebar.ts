export interface SidebarItemProps {
    item: {
        title?: string;
        path?: string;
        icon?: string;
        children?: ItemSidebar[];
    };
    active: Function;
}

export interface SidabarMenuProps {
    sidebarConfig: Array<object>;
}

export interface ItemSidebar {
    path: string;
    icon: string;
    title: string;
}
