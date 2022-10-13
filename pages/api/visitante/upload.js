import nc from 'next-connect';
import upload from './../../../utils/upload';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const handler = nc()
  .use(upload.single('file'))
  .post(async (req, res) => {
    const { email } = req.body;

    const usuario = await prisma.user.findFirst({
      where: { email: email },
      select: {
        Documento: true,
      },
    });

    await prisma.user.update({
      where: {
        email: email,
      },

      //Argument data.Documento.set of type DocumentoWhereUniqueInput needs exactly one argument, but you provided 0 and 1 and 2 and 3
      // falta um select aqui ? ou parar de usar Document...

      data: {
        Documento: {
          set: [...usuario.Documento, req.file.location],
        },
      },
    });
    return res.status(200).json({ ok: true });
  });

export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
