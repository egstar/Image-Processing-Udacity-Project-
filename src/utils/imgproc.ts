import sharp from 'sharp';
interface imgproc {
  fimgp: string;
  tnp: string;
  h: number;
  w: number;
}
const resizeImg = async ({ fimgp, tnp, h, w }: imgproc): Promise<unknown> => {
  if (fimgp && w && h && tnp) {
    await sharp(fimgp).resize(w, h).toFile(tnp);
    return tnp;
  }
  if (!fimgp) {
    return `Error, [ ${fimgp} ] is not a valid image name`;
  }
  if (!w && !h) {
    return `Error, Please Specify a valid numbers in the [Width & Height] fields`;
  }
};

export default resizeImg;
