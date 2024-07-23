import { defineType, defineField, type DateRule } from 'sanity'


export const articlesType = defineType({
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (Rule: DateRule) => {
                return Rule.required().custom((date) => {
                    if (!date || new Date(date).toString() === 'Invalid Date') {
                        return 'Required';
                    }
                    return true;
                })
            }
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => {
                return Rule.required().min(1).max(4);
            },
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'markdown',
        }),
        defineField({
            name: 'draft',
            title: 'Draft',
            type: 'boolean',
        }),
        defineField({
            name: 'starred',
            title: 'Starred',
            type: 'boolean',
        }),
        defineField({
            name: 'views',
            title: 'Views',
            type: 'number',
            validation: (Rule) => Rule.required(),
            initialValue: 0,
        }),
        defineField({
            name: 'imageUrl',
            title: 'ImageURL',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule) => Rule.required(),
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt text',
                    options: {
                        isHighlighted: true,
                    }
                }
            ]
        })
    ],
    initialValue: {
        draft: false,
        starred: false,
    }
})
