export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e423dfb0f7492abd467067a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-waeyt19m',
                  apiId: '2f017252-22fd-422d-99f5-b65e82e73b7f'
                },
                {
                  buildHookId: '5e423dfcf2d7677aac45814a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nz7p3ju9',
                  apiId: '2001cf50-3c16-4085-856b-37ef5d9275b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrispecoraro/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nz7p3ju9.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
