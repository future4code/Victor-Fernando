
export type Competidor = {
  id: string,
  competicao: string,
  atleta: string,
  tempo: number,
  unidade: string
}


export interface CompetidorInputDTO {
  id: string
  competicao: string,
  atleta: string,
  tempo: number,
  unidade: string
}

export type Competicao = {

  name:string

}