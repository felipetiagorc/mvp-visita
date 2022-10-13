import nc from 'next-connect';
import upload from './src/utils/upload';

export const handler = nc()
  .use(upload.single('file'))
  .post((req, res) => {
    const { title, authorName, authorAvatar, imagemUrl } = req.body;
    const {db} = await conn
    res.json({});
  });
