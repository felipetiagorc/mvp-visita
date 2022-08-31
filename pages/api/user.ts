import prisma from '../../lib/prisma';

export default function handler(req, res) {
  const { nome, email, ...rest } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (e) {
    res.status(400).json({ e });
  }
}
