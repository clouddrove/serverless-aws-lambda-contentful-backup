    'use strict'
    
    const AWS = require('aws-sdk');
    const s3 = new AWS.S3();
    const fs = require('fs');
    const contentfulExport = require('contentful-export');
    
    exports.handler = async (event) => {
      const local_backup_path = '/tmp/'
      const file_name = 'contentful_backup.json'
    
      const options = {
      spaceId: process.env.SPACE_ID,                                      // Replace it
      environmentId: process.env.SPACE_ENV,                               // Replace it
      managementToken: process.env.MANAGEMENT_TOKEN,                      // Replace it 
      
      contentFile: file_name,
      exportDir: local_backup_path,
      useVerboseRenderer: false,
      saveFile: true
      }
    
      try {
      const result = await contentfulExport(options);
      console.log('Your space data has been downloaded!');
    // Save file to AWS S3
    console.log('Preparing file for AWS S3!');
    const outputFile = local_backup_path + file_name;
    let fileBuffer = new Buffer(fs.readFileSync(outputFile));
    fs.unlinkSync(outputFile);
    
    await uploadFile(fileBuffer);
    
    return sendResponse(200, outputFile);
      } catch (err) {
      console.log('Oh no! Some errors occurred!', err);
      }
    
      return sendResponse(200,'End of the Function');
    };
    
    const sendResponse = (status, body) => {
      var response = {
      statusCode: status,
      body: body
      };
    
      return response;
    };
    
    const uploadFile = async (buffer) => {
      let params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: process.env.SPACE_ENV+ '/backups/' + Date.now().toString() + '.json',
      Body: buffer
      };
    
      return await s3.putObject(params).promise();
    }
