export type T_Trail = {
    id: number;
    completed: boolean;
    stages?: any[];
};

export type T_Project = {
    id: number;
    url?: string;
    title?: string;
    description?: string;
    features?: string;
    stack?: string[] | string;
};

export type T_ItemsList<T> = {
    items: T[]
}