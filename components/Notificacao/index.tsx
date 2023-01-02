export type NotificationType = 'info' | 'alerta' | 'erro' | 'sucesso';

export interface NotificationProps {
  title: string;
  description?: string;
  type: NotificationType;
  timeout?: number;
}

export const Notificacao = ({
  title,
  description,
  type,
  timeout,
}: NotificationProps) => {
  return (
    <div>
      <h1 className="top-60 fixed right-0">{title}</h1>
      {description ? (
        <p className="top-62 fixed right-0">{description}</p>
      ) : null}
      <button>Abrir Notificacão</button>
    </div>
  );
};
