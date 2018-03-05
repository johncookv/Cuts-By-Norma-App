# Getting Started
Install it with $ npm i

Watch SASS with $ npm run watch-css

Start Node wtih $ npm run start

Build dist with $ npm run build

[Documentation Here](https://giantagency.atlassian.net/wiki/spaces/MT/pages/162201601/Bootstrap+and+React.js+Web+Application+Development+Process)


# Requirements
Node v8.9 or higher. You can switch between multiple versions with [Node Version Manager](https://github.com/creationix/nvm)

# Deployment 
Checklist 
* `pm2` is installed globally on your local machine 
* `ecosystem.config.js` 
* Deploy Keys are in place and created with the following `ssh-keygen -t rsa -b 4096` on the production or staging machine
* The correct pem file is installed on your local machine

## Setup Staging and/or Client Review Server
Ignore warnings about `.../libcrypto.so.1.0.0: no version information available`
### Stage
```
pm2 deploy stage setup
```
### Client
```
pm2 deploy client setup
```

## Build for Production
```
pm2 deploy production
```

## Updating 
Same as building for production
```
deploy production update
```

## Reverting 
Update to previous a commit, 1 means -1 or 10 is -10 in the order of commits
```
deploy production revert 1
```
