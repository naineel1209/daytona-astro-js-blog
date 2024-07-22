import { defineType, defineField } from "sanity";

export const authorType = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'shortBio',
            title: 'Short Bio',
            type: 'text',
            validation: (Rule) => Rule.required().min(5).max(50),
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                slugify: (input) => {
                    const str = input.toLowerCase().replace(/\s+/g, '-')
                    const digits = new Date().getTime().toString().slice(-5)
                    return `${str}-${digits}`;
                }
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
})