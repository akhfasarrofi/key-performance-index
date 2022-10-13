import Iconify from 'components/Iconify';

const getIcon = (name: string) => <Iconify icon={name} width={22} height={22} />;

const SidebarConfig = [
    {
        title: 'dashboard',
        path: '/dashboard',
        icon: getIcon('eva:pie-chart-2-fill'),
    },
    {
        title: 'user',
        path: '/user',
        icon: getIcon('eva:people-fill'),
    },
];

export default SidebarConfig;
