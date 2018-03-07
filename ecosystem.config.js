/**
 * Project configuration section
 */

var project_name     = 'react-starter';
var client_name      = 'giantagency';
var git_repo         = 'git@github.com:GiantAgency/react-starter.git';
var git_branch       = 'master';
var fortawesome_cmd  = 'npm config set @fortawesome:registry https://npm.fontawesome.com/EEFD84F8-907F-4B20-82D9-DC20387F3808 && ';

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
      },
      env_qa : {
        NODE_ENV: 'qa'
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
      'key' : '~/.ssh/GiantProductionLightSail.pem',
      user : '[USERNAME]',
      host : '[IP ADDRESS]',
      ref  : 'origin/'+git_branch,
      repo : git_repo,
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
      ref  : 'origin/'+git_branch,
      repo : git_repo,
      'pre-setup':'mkdir -vp /var/www/stage/' + client_name + '/' + project_name + ' && sudo /usr/local/bin/virtualhost create stage.'+ project_name +'.giantstaging.com ' + '/var/www/stage/'+ client_name + '/' + project_name + '/htdocs' ,
      'post-setup': 'pwd && ls -la',
      path : '/var/www/stage/'+ client_name + '/' + project_name,
      'post-deploy' : fortawesome_cmd + 'npm install && npm run build && cp -r ./build/* ../htdocs/',
      env  : {
        NODE_ENV: 'stage'
      }
    },
    client : {
      'key' : '~/.ssh/GiantStageEC2.pem',
      user : 'ec2-user',
      host : 'ec2-35-173-91-159.compute-1.amazonaws.com',
      ref  : 'origin/'+git_branch,
      repo : git_repo,
      'pre-setup':'mkdir -vp /var/www/stage/' + client_name + '/' + project_name + ' && sudo /usr/local/bin/virtualhost create client.'+ project_name +'.giantstaging.com ' + '/var/www/stage/'+ client_name + '/' + project_name + '/htdocs_client' ,
      'post-setup': 'pwd && ls -la',
      path : '/var/www/stage/' + client_name + '/' + project_name,
      'post-deploy' : fortawesome_cmd + 'npm install && npm run build && sudo cp -r ./build/* ../htdocs_client/',
      env  : {
        NODE_ENV: 'client'
      }
    },
    qa : {
      'key' : '~/.ssh/GiantStageEC2.pem',
      user : 'ec2-user',
      host : 'ec2-35-173-91-159.compute-1.amazonaws.com',
      ref  : 'origin/'+git_branch,
      repo : git_repo,
      'pre-setup':'mkdir -vp /var/www/stage/' + client_name + '/' + project_name + ' && sudo /usr/local/bin/virtualhost create qa.'+ project_name +'.giantstaging.com ' + '/var/www/stage/'+ client_name + '/' + project_name + '/htdocs_qa',
      'post-setup': 'pwd && ls -la',
      path : '/var/www/stage/' + client_name + '/' + project_name,
      'post-deploy' : fortawesome_cmd + 'npm install && npm run build && sudo cp -r ./build/* ../htdocs_qa/',
      env  : {
        NODE_ENV: 'qa'
      }
    }
  }
};
