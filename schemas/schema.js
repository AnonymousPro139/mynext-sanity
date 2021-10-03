// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Хичээл",
      name: "lesson",
      type: "document",

      fields: [
        {
          title: "Хичээлийн агуулга",
          name: "category",
          type: "reference",
          to: [{ type: "lessonName" }],
        },
        {
          title: "Багш",
          name: "teacherName",
          type: "reference",
          to: [{ type: "teacher" }],
        },
        {
          title: "Хичээлийн нэр",
          name: "name",
          type: "string",
        },
        {
          title: "Хичээлийн тайлбар",
          name: "lessonDescription",
          type: "string",
        },

        {
          title: "Хичээлийн бичлэг",
          name: "file",
          type: "file",
        },
        {
          title: "Хаяг",
          name: "slug",
          type: "slug",
          options: {
            source: "name",
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
          },
        },
      ],
    },

    {
      title: "Хичээлийн бүртгэл",
      name: "lessonName",
      type: "document",

      fields: [
        {
          title: "Хичээлийн ерөнхий нэр",
          name: "title",
          type: "string",
        },
        {
          title: "Хичээлийн зураг",
          name: "lessonPic",
          type: "image",
        },
      ],
    },
    {
      title: "Багшийн бүртгэл",
      name: "teacher",
      type: "document",

      fields: [
        {
          title: "Багшийн нэр",
          name: "name",
          type: "string",
        },
        {
          title: "Багшийн зураг",
          name: "picture",
          type: "image",
        },
      ],
    },
  ]),
});
