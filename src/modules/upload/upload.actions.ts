import { Response, Request } from 'express';
import { bucket, config} from '../../utils/s3';
import { DO_SPACES_ROUTE } from '../../utils/constants';
import { Upload } from '@aws-sdk/lib-storage';
import { S3, S3Client } from '@aws-sdk/client-s3';


export async function uploadFile(req: Request, res: Response) {

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let data;

  if (req.files.file) {
    try {
      const parallelUploads3 = new Upload({
        client: new S3(config) || new S3Client(config),
        params: {
          Bucket: bucket,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          Key: `${DO_SPACES_ROUTE}/plans/images/${ req.files.file.name as string }`,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          Body: req.files.file.data,
          ACL: 'public-read',
        },
      });

      parallelUploads3.on('httpUploadProgress', (progress) => {
        console.log(progress);
      });

      data = await parallelUploads3.done();
    } catch (error) {
      throw new Error('Tenemos problema para actualizar el usuario');
    }

  }
  return res.send(data?.Location);
};