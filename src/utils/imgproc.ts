import sharp from 'sharp';
interface imgproc {
  fimgp: string;
  tnp: string;
  h: number;
  w: number;
}
const resizeImg = async ({ fimgp, tnp, h, w }: imgproc) => {
  if (fimgp && w && h && tnp) await sharp(fimgp).resize(w, h).toFile(tnp);

  return tnp;
};

export default resizeImg;
