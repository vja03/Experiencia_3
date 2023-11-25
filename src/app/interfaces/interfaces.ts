export interface Users {
    id: number;
    username: string;
    email: string;
    password: string;
    rol: string;
    asignatura: string;
    isactive: boolean;

}
export interface newUser{
    username:string;
    password: string;
    email: string;
    rol:string;
    isactive:boolean
}
export interface CodigoQR{
    id: string;
    nombreDocente: string;
    asignatura: string;
    fecha: string;
}
export interface QR{
    nombreDocente:string;
    asignatura:string;
    fecha:string;
}
export interface Clases{
    id:number;
    nombre:string;
    codigo:string;
    docente:string;
    anio:number;
    semestre:string;
    horasSemanales:number;
}

export interface ClaseEspecifica{
    nombre:string;
    codigo:string;
    docente:string;
    anio:number;
    semestre:string;
    horasSemanales:number;
}