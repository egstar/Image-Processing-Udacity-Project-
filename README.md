# imgproc
Image Processing API ( Udacity )

Welcome to my first Project With Udacity..

First of all i'd like to thank you to let me be in this place.

[SETUP]
* you need to run the command `npm run build` to start building the app

[ Run server ]
* you need to run the command `npm run start:prod` to start the live server.

[HOW TO USE]
* -> you can use the UI at http://localhost:3000 and then go to the Image's to choose which image you need to change it size.
OR
* -> you can find the Images list using GET `/api/imgs` as a JSON result
* -> you can start the image processing API using GET `/api/img?n=[ImageName]&w=[width]&h=[height]`

(p.s) use the image name without the file ext, for example : `/api/img?n=Desert&w=400&h=400`


------------------------------------------------------------------------------
[ All tests had been passed using the unit testing Jasmin supertest ]
* to run test use the command `npm run test` and it will start the unit testing.

[ TypeScript files has been checked using esLint and Prettier ]
* to run the esLint check use the command ` npm run lint ` and to fix errors use ` npm run lint:f `
* to run the prettier check use the commadn `npm run pret ` and to fix error use `npm run pret:f`

[DEVELOPER MODE]
* you need to run the command `npm run dev` to start the app in dev mode
