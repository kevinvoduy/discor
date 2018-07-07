import express from 'express';
import multer from 'multer';
import AWS from 'aws-sdk';

require('dotenv').config();

AWS.config.update({
  // accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,

});

// AWS.config = new AWS.Config();
// AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
// AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
// AWS.config.region = process.env.AWS_REGION;

const s3 = new AWS.S3();
console.log('aws', AWS.config);
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5000000}
});

const router = express.Router();

router.post('/photo', upload.single('photo'), (req, res) => {
  s3.upload({
    Bucket: 'discor-photos',
    Key: req.file.originalname,
    Body: req.file.buffer,
    ACL: 'public-read',
  }, err => {
    if (err) return res.status(400).send(err);
    res.send('File uploaded to S3');
  });
});

export default router;
