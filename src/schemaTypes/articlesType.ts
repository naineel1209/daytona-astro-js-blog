import {defineType, defineField, type DateRule} from 'sanity'


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
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (Rule:DateRule) => {
                return Rule.required().custom((date) => {
                    if (!date || new Date(date).toString() === 'Invalid Date'){
                        return 'Required';
                    }
                    return true;
                })
            }
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}],
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
        })
    ],
    initialValue: {
        draft: false,
        starred: false,
    }
})
