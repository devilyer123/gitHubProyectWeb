export interface AdministradoresCreacionDTO{
    nombreUsuario: string;
    contraseña: string;
    correo: string;
    fechaHabilitacion: Date;
    //habilitado: boolean;
    foto: File;
}

export interface AdministradoresDTO{
    id: number;
    nombreUsuario: string;
    contraseña: string;
    correo: string;
    fechaHabilitacion: Date;
    //habilitado: boolean;
    foto: string;
}