/**
    Esse arquivo trata otimização de imagem - para fotos q vem da api
chama ele dentro das tags <Image/>
    "<Image loader={imageLoader} unoptimized ... />"
    Pro nextjs não otimizar  = "unoptimized"
 *  */

const imageLoader = ({ src }: { src: string }) => {
  return src;
};

export default imageLoader;
