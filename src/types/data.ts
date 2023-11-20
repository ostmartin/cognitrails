export type T_TrailStage = {
    id: string | number;
    title: string;
    goals?: string[];
    projects?: T_Project[];
    additional?: {title: string, description: string, link: string}[]
}

export type T_Trail = {
    id: string | number;
    title: string;
    completed: boolean;
    stages?: any[];
};

export type T_Project = {
    id: string | number;
    url?: string;
    title?: string;
    description?: string;
    features?: string;
    stack?: string[] | string;
};

export type T_ItemsList<T> = T[];

export type T_User = {
    nickname: string;
    name?: string;
    location?: string;
    blog?: string;
    photo?: string;
}