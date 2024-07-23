import { defineType, defineField } from "sanity";
import slugify from "slugify";

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
                    return slugify(input, {
                        replacement: '-',
                        strict: true,
                        lower: true,
                    })
                }
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
})