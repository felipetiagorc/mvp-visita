/**
    Esse arquivo trata otimização de imagem - para fotos q vem da api
chama ele dentro das tags <Image/>
    "<Image loader={imageLoader} unoptimized ... />"
    Pro nextjs não otimizar  = "unoptimized" quando já estao hosteados
    Tambem tem que configurar next.config.js = 
 *  */

const imageLoader = ({ src }: { src: string }) => {
  return src;
};

export default imageLoader;
