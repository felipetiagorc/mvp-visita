import nc from 'next-connect';
import upload from './../../../utils/upload';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const handler = nc()
  .use(upload.single('file'))
  .post(async (req, res) => {
    const { email } = req.body;

    console.log(req.file);
    console.log(req.file.location);
    // const doc = await prisma.documento.create({
    //   data: {
    //     nomeDoc: 'RG',
    //     dataExpira: '2022-03-19T14:21:00+02:00',
    //     validado: false,
    //     caminho: req.file.location,
    //   },
    // });

    await prisma.user.update({
      where: { email: email },
      data: {
        documentos: {
          create: {
            nomeDoc: 'cpf',
            dataExpira: new Date('2022-03-19'),
            validado: false,
            caminho: req.file.location,
          },
        },
      },
    });

    return res.status(200).json({ ok: true });
  })
  .get(async (req, res) => {
    const docId = req.query.docId;
    const result = await prisma.documento.findMany({
      where: {
        userId: docId,
      },
    });
    res.json(result);
  });

export const config = {
  api: {
    // sem o 'bodyparser: false':
    // não consegue passar file + algo no req.body (eu acho)
    // ou não consegue acessar o req. e o body na resposta
    bodyParser: false,
  },
};
export default handler;
