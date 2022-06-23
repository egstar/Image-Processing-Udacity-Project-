import path from 'path';
import fs from 'fs';

// locate original images.
const dpath = path.join(__dirname, '../../assets/org/');
const imgsPath: fs.Dirent[] = fs.readdirSync(dpath, { withFileTypes: true });
const filter = imgsPath.filter((img) => img.isFile()).map((img) => img.name);

export default filter;
