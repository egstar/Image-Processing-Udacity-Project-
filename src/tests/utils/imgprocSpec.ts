import resizeImg from '../../utils/imgproc';
import path from 'path';


const fimgp = path.resolve(__dirname, '../../../assets/org/fjord.jpg');
const tnp = path.resolve(__dirname, '../../../assets/tn/200x200-fjord.jpg');

describe('Testing the Image processing', (): void => {
  it('Processing Image with 200x200 size successfuly', async () => {
    const myImage = (await resizeImg({
      fimgp: fimgp,
      tnp: tnp,
      h: 200,
      w: 200,
    })) as string;
    expect(myImage).toBe(tnp);
  });
});
