'use strict';
const express = require('express');

var app = express();
app.use(express.json());

const image_list = [
    {
        name: 'AWS',
        url: 'https://first-demo-static-web.s3-ap-southeast-1.amazonaws.com/images/demo-image-0.png',
        value: 'Amazon Web Services(AWS)',
        link: 'https://aws.amazon.com/ko/?nc2=h_lg'
    },
    {
        name: 'Amazon ECR',
        url: 'https://first-demo-static-web.s3-ap-southeast-1.amazonaws.com/images/demo-image-1.png',
        value: 'Amazon Elastic Container Registry',
        link: 'https://aws.amazon.com/ko/ecr/'
    },
    {
        name: 'Amazon EKS',
        url: 'https://first-demo-static-web.s3-ap-southeast-1.amazonaws.com/images/demo-image-2.png',
        value: 'Amazon Elastic Kubernetes Service',
        link: 'https://aws.amazon.com/ko/eks/'
    },
    {
        name: 'Amazon ECS',
        url: 'https://first-demo-static-web.s3-ap-southeast-1.amazonaws.com/images/demo-image-3.png',
        value: 'Amazon Elastic Container Service',
        link: 'https://aws.amazon.com/ko/ecs/'
    },
    {
        name: 'AWS Fargate',
        url: 'https://first-demo-static-web.s3-ap-southeast-1.amazonaws.com/images/demo-image-4.png',
        value: 'Serverless compute for containers',
        link: 'https://aws.amazon.com/ko/fargate/'
    },
    {
        name: 'Amazon Cloud9',
        url: 'https://first-demo-static-web.s3-ap-southeast-1.amazonaws.com/images/demo-image-5.png',
        value: 'A cloud IDE for writing, running, and debugging code',
        link: 'https://aws.amazon.com/ko/cloud9/'
    },
    {
        name: 'AWS CloudFormation',
        url: 'https://first-demo-static-web.s3-ap-southeast-1.amazonaws.com/images/demo-image-6.png',
        value: 'Speed up cloud provisioning with infrastructure as code',
        link: 'https://aws.amazon.com/ko/cloudformation/'
    },    
]

app.get('/services/all', function (req, res) {
  console.log(`${req.method} ${req.url}`);
  res.header("Access-Control-Allow-Origin", "*");
  res.send({outcome : image_list});
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server is working : ', host, port);
});