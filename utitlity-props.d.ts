declare type $ComponentType<T> = T extends React.ComponentType<infer Props>
    ? Props extends object
        ? Props
        : never
    : never;
