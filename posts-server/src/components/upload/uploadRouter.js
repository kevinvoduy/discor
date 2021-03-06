import express from 'express';
import multer from 'multer';
import AWS from 'aws-sdk';

require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-1',
});

const s3 = new AWS.S3();
const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 9000000}
});

router.post('/photo', upload.single('photo'), (req, res) => {
  s3.putObject({
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
