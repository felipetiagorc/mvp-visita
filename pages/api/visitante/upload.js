export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      //   res.status(200).json({ id, nome: `User ${id}` });
      res.status(200).json({ msg: method });
      break;

    case 'PUT':
      res.status(200).json({ msg: method });
      //   res.status(200).json({ id, nome: nome || `User ${id}` });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} nao permitido`);
  }
}
