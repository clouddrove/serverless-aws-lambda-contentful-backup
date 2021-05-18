<h1 align='center'>Serverless AWS Lambda Contentful Backup</h1><p align='center' style='font-size: 1.2rem;'> This script is used to deploy lambda function to take automatic backup for contentful. </p>	<p align="center"><a href="https://serverless.com"><img src="https://img.shields.io/badge/Serverless-v1.56-red" alt="Serverless"> </a><a href="LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="Licence"></a></p><p align='center'>	<a href='https://facebook.com/sharer/sharer.php?u=https://github.com/clouddrove/serverless-aws-lambda-contentful-backup'>	  <img title='Share on Facebook' src='https://user-images.githubusercontent.com/50652676/62817743-4f64cb80-bb59-11e9-90c7-b057252ded50.png' />	</a>	<a href='https://www.linkedin.com/shareArticle?mini=true&title=Serverless+AWS+Lambda+Contentful+Backup&url=https://github.com/clouddrove/serverless-aws-lambda-contentful-backup'>	  <img title='Share on LinkedIn' src='https://user-images.githubusercontent.com/50652676/62817742-4e339e80-bb59-11e9-87b9-a1f68cae1049.png' />	</a>	<a href='https://twitter.com/intent/tweet/?text=Serverless+AWS+Lambda+Contentful+Backup&url=https://github.com/clouddrove/serverless-aws-lambda-contentful-backup'>	  <img title='Share on Twitter' src='https://user-images.githubusercontent.com/50652676/62817740-4c69db00-bb59-11e9-8a79-3580fbbf6d5c.png' />	</a>	</p>	<hr>

We eat, drink, sleep and most importantly love DevOps. We are working towards stratergies for create some scripts with serverless and easily managed structure on AWS.

This module is basically run with serverless. It also helps to deploy lambda function with Cloudformation Stack.

## Prerequesties
This module has a few dependencies:

- [Serverless](https://serverless.com/framework/docs/providers/aws/guide/installation/)

## How to store parameter
Store parameter in SSM parameter store via [refrence](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-create-console.html)

Add following parameters in SSM and dev is here env name you can change according to your environment. Also please take care that parametrs store in same region where you deploying lambda function.
```hcl
dev/contentful/environment
dev/contentful/space_id
dev/contentful/cms_authorization_token
```

## How to Install

Deploy lambda function to your AWS account via following command.

```
serverless deploy --stage="dev" --bucket_name="s3-bucket-name" --region="us-east-1" --schedule="cron(0 0 1 */1 ? *)"
```

## How to Remove

Remove lambda function to your AWS account via following command.

```
serverless remove --stage="dev" --bucket_name="s3-bucket-name" --region="us-east-1" --schedule="cron(0 0 1 */1 ? *)"
```

## Feedback
If you come accross a bug or have any feedback, please log it in our [issue tracker](https://github.com/clouddrove/serverless-contentful-automatic-backup/issues), or feel free to drop us an email at [hello@clouddrove.com](mailto:hello@clouddrove.com).

If you have found it worth your time, go ahead and give us a ★ on [our GitHub](https://github.com/clouddrove/serverless-contentful-automatic-backup)!

## About us

At [CloudDrove][website], we offer expert guidance, implementation support and services to help organisations accelerate their journey to the cloud. Our services include docker and container orchestration, cloud migration and adoption, infrastructure automation, application modernisation and remediation, and performance engineering.

<p align="center">We are <b> The Cloud Experts!</b></p>
<hr />
<p align="center">We ❤️  <a href="https://github.com/clouddrove">Open Source</a> and you can check out <a href="https://github.com/clouddrove/serverless-contentful-automatic-backup">our other modules</a> to get help with your new Cloud ideas.</p>
