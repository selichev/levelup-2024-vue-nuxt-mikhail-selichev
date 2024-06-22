module.exports = {
  apps : [{
    script: 'serve',
    watch: 'dist',
    env: {
      PM2_SERVE_PATH: 'dist',
      PM2_SERVER_PORT: 8080,
      PM2_SERVE_SPA: 'true'
    }
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  }
};
