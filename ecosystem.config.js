var project_name = 'react-starter';
var client_name  = 'giantagency';
var git_repo     = 'git@github.com:GiantAgency/react-starter.git';

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
      ref  : 'origin/master',
      repo : git_repo,
      'pre-setup':'mkdir -vp /var/www/stage/' + client_name + '/' + project_name + ' && sudo /usr/local/bin/virtualhost create stage.'+ project_name +'.giantstaging.com ' + '/var/www/stage/'+ client_name + '/' + project_name + '/build' ,
      'post-setup': 'pwd && ls -la',
      path : '/var/www/stage/'+ client_name + '/' + project_name,
      'post-deploy' : 'npm install && npm run build && cp -r ./build/* ../htdocs/',
      env  : {
        NODE_ENV: 'stage'
      }
    },
    client : {
      'key' : '~/.ssh/GiantStageEC2.pem',
      user : 'ec2-user',
      host : 'ec2-35-173-91-159.compute-1.amazonaws.com',
      ref  : 'origin/master',
      repo : git_repo,
      'pre-setup':'mkdir -vp /var/www/clients/' + client_name + '/' + project_name + ' && sudo /usr/local/bin/virtualhost create client.'+ project_name +'.giantstaging.com ' + '/var/www/clients/'+ client_name + '/' + project_name + '/build' ,
      'post-setup': 'pwd && ls -la',
      path : '/var/www/clients/' + client_name + '/' + project_name,
      'post-deploy' : 'npm install && npm run build && cp -r ./build/* ../htdocs/',
      env  : {
        NODE_ENV: 'client'
      }
    }
  }
};
