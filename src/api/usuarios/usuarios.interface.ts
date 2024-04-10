export interface User {
  id_usuario: number;
  nombre: string;
  fecha_creacion	?: string | null;
  fecha_actualizacion: Date;
  fk_creado_por?: number | null;
  fk_actualizado?: number | null;
  fecha_eliminacion?: Date | null;
  fk_eliminado?: number | null;
  }