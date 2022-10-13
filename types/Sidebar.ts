export interface SidebarItemProps {
    item: {
        title: string;
        path: string;
        icon: string;
        children?: ItemSidebar[];
    };
    active: any;
}

export interface SidabarMenuProps {
    sidebarConfig: ItemSidebar[];
}

export interface ItemSidebar {
    path: string;
    icon: string;
    title: string;
}
