var aws = require('aws-sdk')
var secretsFile = require('../index.js')
var Promise = require('bluebird')
var secretsFile = require('../index').secretsFile


aws.config.update({
  // signatureVersion: 'v4',
  accessKeyId: secretsFile.AWSAccessKeyId,
  secretAccessKey: secretsFile.AWSSecretKey,
})

//WHY DOES THIS NEED TO CONFIG AGAIN

module.exports = {
	sign(filename, filetype, res){
		var s3 = new aws.S3()

		var params = {
		Bucket: 'travelapp1234',
      	Key: (Date.now() + filename),
      	Expires: 60,
      	ContentType: filetype,
      	ACL: 'public-read'
		}

		return s3.getSignedUrl('putObject', params, (err, data) => {
			if (err){
				console.log(err)
				return err
			} else {
				const returnData = {
					signedRequest: data, 
					url: `https://travelapp1234.s3.amazonaws.com/${params.Key}`
				}
				res.json(returnData)
			}
		})
	}




}


// <?xml version=“1.0” encoding=“UTF-8"?>
// <CORSConfiguration xmlns=“http://s3.amazonaws.com/doc/2006-03-01/“>
// <CORSRule>
//     <AllowedOrigin>*</AllowedOrigin>
//     <AllowedMethod>GET</AllowedMethod>
//     <AllowedMethod>POST</AllowedMethod>
//     <AllowedMethod>PUT</AllowedMethod>
//     <AllowedHeader>*</AllowedHeader>
// </CORSRule>
// </CORSConfiguration>