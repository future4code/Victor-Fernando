export type pedido = {
    id_pedido: string;
    id_user: string;
	data: string;
	valor: number;
    status: string
}

export interface InputPedidoDTO  {
    id_user: string;
	data: string;
	valor: number;
    status: string
}  

export interface FindPedidoDTO {
    idUser: string;
    token: string
}