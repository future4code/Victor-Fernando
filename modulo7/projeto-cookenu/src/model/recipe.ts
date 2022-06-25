export type recipe = {
    id: string;
    title: string;
	description: string;
	dataCriacao: Date;
    idUser: string
}

export interface InputRecipeDTO  {
    title: string;
	description: string;
	dataCriacao: Date;
    idUser: string;
    token: string
}  