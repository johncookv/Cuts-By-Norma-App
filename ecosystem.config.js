module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'react-starter',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      },
      env_stage : {
        NODE_ENV: 'stage'
      },
      env_client : {
        NODE_ENV: 'client'
      }
    },
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
      'key' : '~/.ssh/GiantProduction.pem',
      user : '[USERNAME]',
      host : '[IP ADDRESS]',
      ref  : 'origin/master',
      repo : 'git@github.com:GiantAgency/react-starter.git',
      'post-setup': 'pwd && ls -la',
      path : '/var/www/',
      'post-deploy' : 'npm install && npm run build && cp -r ./build/* ../htdocs/',
      env  : {
        NODE_ENV: 'production'
      }
    },
    stage : {
      'key' : '~/.ssh/GiantStageEC2.pem',
      user : 'ec2-user',
      host : 'ec2-35-173-91-159.compute-1.amazonaws.com',
      ref  : 'origin/stage',
      repo : 'git@github.com:GiantAgency/react-starter.git',
      'post-setup': 'pwd && ls -la',
      path : '/var/www/stage/giantagency/react-starter',
      'post-deploy' : 'npm install && npm run build && cp -r ./build/* ../htdocs/',
      env  : {
        NODE_ENV: 'stage'
      }
    },
    client : {
      'key' : '~/.ssh/GiantStageEC2.pem',
      user : 'ec2-user',
      host : 'ec2-35-173-91-159.compute-1.amazonaws.com',
      ref  : 'origin/client',
      repo : 'git@github.com:GiantAgency/react-starter.git',
      'post-setup': 'pwd && ls -la',
      path : '/var/www/clients/giantagency/react-starter',
      'post-deploy' : 'npm install && npm run build && cp -r ./build/* ../htdocs/',
      env  : {
        NODE_ENV: 'client'
      }
    }
  }
};
