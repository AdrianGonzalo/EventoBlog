import { Rule } from "sanity";

export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(5).max(100),
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
      validation: (Rule: Rule) => Rule.required().min(10),
    },
    {
      name: "mainImage",
      title: "Imagen destacada",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
    },
    {
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Novias", value: "novias" },
          { title: "Madrinas", value: "madrinas" },
          { title: "Principal", value: "principal" },
        ],
      },
    },
    {
      name: "content",
      title: "Contenido completo",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
