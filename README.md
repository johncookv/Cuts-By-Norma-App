# Getting Started
Install it with
```
npm i
```

Watch SASS with
```
npm run watch-css
```

Start Node wtih
```
npm run start
```

Build for production distribution
```
npm run build
```

[Documentation Here](https://giantagency.atlassian.net/wiki/spaces/MT/pages/162201601/Bootstrap+and+React.js+Web+Application+Development+Process)


# Requirements
Node v8.9 or higher. You can switch between multiple versions with [Node Version Manager](https://github.com/creationix/nvm)

## Fortawesome Support
Run the following command
```
npm config set @fortawesome:registry https://npm.fontawesome.com/EEFD84F8-907F-4B20-82D9-DC20387F3808
```
# PM2 Deployment

Install http://pm2.keymetrics.io/docs/usage/quick-start/
```
npm install pm2@latest -g
```
Place `.pem` files in your local ssh folder `~/.ssh/` which are located on Giant file server `Shared/GIANT/Department Resources/Marketing_Tech/Security`

Update permissions 
```
chmod 400 *.pem
```

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
