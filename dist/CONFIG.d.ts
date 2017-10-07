export interface IGlobalConfig {
    PORT: number;
    DB: {
        HOST: string;
        PORT: number;
        NAME: string;
        URL: string;
    };
}
export declare const CONFIG: IGlobalConfig;
