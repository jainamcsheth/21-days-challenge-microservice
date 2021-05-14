# 21 Days Challenge Application

Awesome way to turn your goals into habit. Provides interesting challenges each with 21 unique tasks unlocked each day and much more...

Front end developed using React + TypeScript and backend is powered by Serverless Microservices developed using AWS services.

The motivation for taking on this project comes from a problem which we face in day to day life - Trying hard to put on a habit but never works for more than a few days. This web application provides a unique way to create a new habit just in 21 days. Users can start a challenge and the user will be presented with one unique challenge each day for 21 days. On completing a challenge the user receives a few coins which can be seen on the dashboard.

## Microservices Architecture:

There are three unique services in this project

- Challenge Microservice
- User Microservice
- Notification Microservice

### Challenge Microservice

All the Challenges data stored in one DB table - _Challenges_ and one lambda function _microservices-challenge-read_. There are some preconfigured challenges which the frontend application can fetch. User won't be allowed to make changes to this created challenges. Pending feature - Creating a Custom Challenge with 21 tasks. This microservice is a standalone and doesn't need to interact with any other microservice.

### User Microservice

User related data are divided into three tables - _UserDetail_, _UserChallenges_, _UserStatistics_ and few lambdas - _microservices-user-getUserDetails_, _microservices-user-getUserChallenges_, _microservices-user-getUserStatistics_, _microservices-user-create-sqs-subscription_, _microservices-user-startChallenge_, _microservices-user-completeTask_, _microservices-user-updateStatistics_.

User Microservice uses AWS Cognito service for Login/Signup authentication of the user.

For the user to receive notifications as email, the user email needs to be added to the Notification SNS topic. To communicate with the Notification service, User service uses SQS to send messages to the Notification Lambda.
All the user lambdas are triggered via API Gateway with GET and POST Rest calls.

### Notification Microservice

Notification Microservice has two lambdas - _microservices-notification-addSubscription_, _microservices-notification-publishMail_.

Add subscription lambda pools SQS queue _microservices-notification-queue_ to receive message from User Service and then adds the email id to the SNS subscription Topic _ChallengeNotification_. Here, the user receives a confirmation email to confirm to subscription and then the user will receive daily notification via email.
Email is sent using SNS subscription via publishMail lambda to all the subscribed email id.

## Workflow

This is the high level architecture of our Application [Link](https://21-days-challenge-app-icons.s3-us-west-2.amazonaws.com/Architecture/Workflow.jpeg).

User signs up and logins which is done using AWS Cognito. Before the sign up, a pre-signup lambda is triggered by AWS Cognito named _microservices-cognito-pre-signup_. On successful sign up, AWS cognito triggers a lambda _microservices-cognito-to-db-user-write_ which creates the User in _UserDetails_ table. This triggers the **Step Function** _microservices-create-stats-subscription_ which calls two lambdas to initialize the user statistics table(lambda name _microservices-user-updateStatistics_) and to add the user email id to subscription list(lambda name _microservices-user-create-sqs-subscription_).

On successful sign up, User service calls **SQS** _microservices-notification-queue_ via step function and on the Notification service side, a lambda pools the message from the queue and adds the email id to the subscription list in **SNS** topic _ChallengeNotification_.

On successful login, the front end application makes a call to the backend services to fetch the data from both User microservicess and Challenge Microservices using lambdas. On interaction by the user with the application, the respective lambdas are triggered there by updating the Users DB.

## Setup for Front End

Run `npm install` in the root directory to install all the dependencies.

### Development server

Run `npm start` in the root folder to bring up the application.

Now Navigate to [http://localhost:3000/](http://localhost:3000/) to interact with the application.

### EC2 Deployment

[DeplyedURL](http://ec2-54-191-181-82.us-west-2.compute.amazonaws.com:3000/).

### Technologies/Libraries Used

- React + Typescript - Front end
- Lambdas - Serverless Microservices
- DynamoDB - Database
- SQS - Communication between Services
- SNS - Email Notifications
- StepFunctions - Grouping lambdas
- CodeCommit - For code sharing
- CodeDeploy, CodePipeline - CI/CD
- Prettier + Eslint - Code Structure
