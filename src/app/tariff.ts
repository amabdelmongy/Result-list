export interface Tariff {
    id;
    name: string;
    downloadSpeed?: number;
    uploadSpeed?: number; 
    price?: number;
    benefits?;
}