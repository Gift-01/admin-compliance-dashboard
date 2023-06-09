const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),

    children: [{ path: "", component: () => import("pages/LandingPage.vue") }],
  },

  {
    path: "/businesses",

    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/BusinessPage.vue") },
      {
        path: ":id",
        component: () => import("pages/BusinessDetailsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
