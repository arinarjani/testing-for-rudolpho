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
                  buildHookId: '6134137b21e0dde9c5a0e546',
                  title: 'Sanity Studio',
                  name: 'testing-for-rudolpho-studio',
                  apiId: '41515a9c-c2aa-4390-955c-a7d3a11c4b7e'
                },
                {
                  buildHookId: '6134137b21e0dddea4a0e691',
                  title: 'Portfolio Website',
                  name: 'testing-for-rudolpho',
                  apiId: '620b8cb9-a513-40ac-9162-8b7bd8c638f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arinarjani/testing-for-rudolpho',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://testing-for-rudolpho.netlify.app',
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
