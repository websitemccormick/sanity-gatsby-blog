export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62d4a41435667d3f20715566",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-d25yhqsh",
                  apiId: "9ce8a386-c79d-449a-ac10-dbf9f440d671",
                },
                {
                  buildHookId: "62d4a415c1d65d3b0285c1b0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9rtbr2jk",
                  apiId: "611a6114-7f48-4109-8ec8-bf141246c574",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/websitemccormick/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9rtbr2jk.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
