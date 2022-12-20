export type DocumentoProps = {
  id: number;
  nomeDoc: string;
  dataExpira: string;
  validaddo: boolean;
  createdAt: string;
  caminho: string;
};

export class Documento {
  constructor(public props: DocumentoProps) {}

  getId() {
    return this.props.id;
  }

  getNomeDoc() {
    return this.props.nomeDoc;
  }

  getDataExpira() {
    return this.props.dataExpira;
  }

  getValidado() {
    return this.props.validaddo;
  }

  getCreatedAt() {
    return this.props.createdAt;
  }

  getCaminho() {
    return this.props.caminho;
  }
}
