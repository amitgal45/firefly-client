export interface IMovies {
    title: string;
    rank: string;
    id: string;
    year?: number;
    director?: string|null;
    actors?: string[];
}