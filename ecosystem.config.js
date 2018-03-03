module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : '[PROJECT NAME]',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // Second application
    {
      name      : 'WEB',
      script    : 'web.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    dev : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    production : {
      'key' : '~/.ssh/[PEM FILE].pem',
      user : '[USERNAME]',
      host : '[IP ADDRESS]',
      ref  : 'origin/[BRANCH]',
      repo : 'git@github.com:GiantAgency/[REP].git',
      'post-setup': 'pwd && ls -la',
      path : '/home/[USERNAME]/',
      'post-deploy' : 'npm install && npm run build && cp -r ./build/* ../htdocs/',
      env  : {
        NODE_ENV: 'production'
      }
    },
    stage : {
      'key' : '~/.ssh/[PEM FILE].pem',
      user : '[USERNAME]',
      host : '[IP ADDRESS]',
      ref  : 'origin/[BRANCH]',
      repo : 'git@github.com:GiantAgency/[REP].git',
      'post-setup': 'pwd && ls -la',
      path : '/home/[USERNAME]/',
      'post-deploy' : 'npm install && npm run build && cp -r ./build/* ../htdocs/',
      env  : {
        NODE_ENV: 'production'
      }
    },
    client : {
      'key' : '~/.ssh/[PEM FILE].pem',
      user : '[USERNAME]',
      host : '[IP ADDRESS]',
      ref  : 'origin/[BRANCH]',
      repo : 'git@github.com:GiantAgency/[REP].git',
      'post-setup': 'pwd && ls -la',
      path : '/home/[USERNAME]/',
      'post-deploy' : 'npm install && npm run build && cp -r ./build/* ../htdocs/',
      env  : {
        NODE_ENV: 'production'
      }
    }
  }
};
