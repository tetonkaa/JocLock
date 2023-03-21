const Posts = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'ProductName',
      type: 'text',
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'productImageLink',
      type: 'text',
    },
    {
      name: 'price',
      type: 'text',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'ProductDescription',
      type: 'text' ,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      }
    }
  ],
}

export default Posts;