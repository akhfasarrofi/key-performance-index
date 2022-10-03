import { ChangeEvent, ChangeEventHandler } from 'react';

export interface UserListHeadProps {
    order: any;
    orderBy: string;
    rowCount: number;
    headLabel?: Array<[UserDto]>;
    numSelected: number;
    onRequestSort: Function;
    onSelectAllClick?:
        | ((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void)
        | undefined;
}

export interface UserListToolbarProps {
    numSelected: number;
    filterName: string;
    onFilterName?:
        | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
        | undefined;
}

export interface UserDto {
    id: string | number;
    avatarUrl: string;
    name: string;
    isVerified: boolean;
    status: string | undefined;
    role: string | undefined;
    company: string;
}
