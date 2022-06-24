import { Router, Request, Response } from 'express';
import path from 'path';
import filter from '../../utils/imgspath';
import tnfilter from '../../utils/tnpath';
import resizeImg from '../../utils/imgproc';
const imgsRoute = Router();

imgsRoute.get('/Api/img', (req: Request, res: Response) => {
  const imgName = req.query.n as string; // use Query (n) to retrieve image's name
  const w = req.query.w ? parseInt(req.query.w as string, 10) : null;
  const h = req.query.h ? parseInt(req.query.h as string, 10) : null;
  const regEx = new RegExp('^' + imgName + '.+?[a-z]*$', 'igm'); // use regEX to find the equilivent file to search
  const fimg = filter.find((element) => element.match(regEx)) as string; // save image with extension as a string
  const img = filter.includes(fimg); // get a boolean with true if img exists;
  const tn = tnfilter.includes(w + 'x' + h + '-' + fimg);
  const fimgp = path.resolve('./') + `/assets/org/${fimg}`; // set images location to retrieve later
  const tnp = path.resolve('./') + `/assets/tn/${w}x${h}-${fimg}`; // set thumbnail location to retrieve later
  // If the parameters wasn't provided return and end function
  if (!imgName) {
    return res
      .status(400)
      .send('Please specify the name of the image you need.');
  }
  // If the name doesn't exist in the array return error and end function
  if (img === false) {
    res
    .status(404)
    .send('Resource not found, this image does not exist!');
  } else {
  if (!h || !w) {
    res
      .status(404)
      .send('Please specify a correct Width and Height to process the image');
  }
  if (tn === true) {
    res.status(200).sendFile(tnp);
  } else {
    if (h !== null && w !== null)
      resizeImg({
        fimgp,
        tnp,
        h,
        w,
      })
        .then(() => {
          res.status(200).sendFile(tnp);
        })
        .catch(() => {
          res.status(500).send('Internal server error while image processing.');
        });
  }
}
  // else send the found image.
  // res.sendFile(fimgp);
});
export default imgsRoute;
