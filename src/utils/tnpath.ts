import path from 'path';
import fs from 'fs';

// locate thumbnails
const dpath = path.join(__dirname, '../../assets/tn/');
const imgsPath: fs.Dirent[] = fs.readdirSync(dpath, { withFileTypes: true });
const tnfilter = imgsPath.filter((img) => img.isFile()).map((img) => img.name);

export default tnfilter;
