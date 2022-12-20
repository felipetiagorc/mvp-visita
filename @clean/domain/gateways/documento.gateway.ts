import { Documento } from '../entities/documento';

export interface DocumentoGateway {
  findAll(): Promise<Documento[]>;
  findById(id: number): Promise<Documento>;
}
