const dotenv = require('dotenv')
const aws = require('aws-sdk')
dotenv.config()

aws.config.update({
  'accessKeyId': process.env.accessKeyId_FEC,
  'secretAccessKey': process.env.secretAccessKey_FEC,
  'region': process.env.aws_region_FEC,
  'bucketname': process.env.awsBucket_FEC
});

const s3 = new aws.S3()
const S3_BUCKET = process.env.awsBucket_FEC;

module.exports = async (req, res) => {
  console.log(req.file, 'Test')
  const fileName = req.file.originalname;
  const fileType = req.file.mimetype
  // const test = 'test'
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 10000,
    Body: req.file.buffer,
    ContentType: fileType,
    ACL: 'public-read'
  }

  try {
    await s3.putObject(s3Params, (err, data) => {
      if (err) {
        console.log(err)
      }
    })
    const qaImgUrl = `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    console.log(qaImgUrl)
    res.send(qaImgUrl)
  } catch (err) {
    res.send(err)
  }
}