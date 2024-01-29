import { S3Client, S3 } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

import { StreamingBlobPayloadInputTypes } from '@smithy/types';
import { DO_SPACES_BUCKET, DO_SPACES_SECRET, DO_SPACES_KEY, DO_SPACES_ENDPOINT, DO_SPACES_REGION } from '../constants';

export const bucket = DO_SPACES_BUCKET;

export const config = {
  region: DO_SPACES_REGION,
  endpoint: DO_SPACES_ENDPOINT,
  credentials: {
    accessKeyId: DO_SPACES_KEY,
    secretAccessKey: DO_SPACES_SECRET,
  },
};

export const createUploadStream = async (key: string, body: StreamingBlobPayloadInputTypes) => {
  let data;
  try {
    const parallelUploads3 = new Upload({
      client: new S3(config) || new S3Client(config),
      params: {
        Bucket: bucket,
        Key: key,
        Body: body,
        ACL:'public-read'
      },
    });

    parallelUploads3.on('httpUploadProgress', (progress) => {
      console.log(progress);
    });

    data = await parallelUploads3.done();
  } catch (e) {
    throw new Error('Tenemos problemas para subir el avatar')
  }

  return data;
};