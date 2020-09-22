export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f6a3e5ea513e01f8d4e3c1f',
                  title: 'Sanity Studio',
                  name: 'test-starter-studio',
                  apiId: 'bc69fb9f-f85a-4fa2-b390-5404e943df4e'
                },
                {
                  buildHookId: '5f6a3e5e544a7d20618dfc23',
                  title: 'Blog Website',
                  name: 'test-starter',
                  apiId: '635bb9c5-ebde-48e4-b0aa-f4db51ab2fca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wluna01/test-starter',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://test-starter.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
