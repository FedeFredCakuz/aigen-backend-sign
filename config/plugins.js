module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  'site-publisher': {
    config: {
      owner: 'fredcakuz', // The Github organisation or user
      repo: 'aigen-frontend', // The name of the repository
      workflow_id: 'firebase-hosting-merge.yml', // The workflow_id or filename
      token: env('GITHUB_TOKEN'), // The GitHub personal access token with access to trigger workflows and view build status
      branch: 'main', // The branch the workflow should be triggered on
      inputs: {
        // Optional inputs to pass through to the GitHub workflow
        // some_input: 'Some value',
        // some_other_input: 'Some other value',
      }
    }
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});