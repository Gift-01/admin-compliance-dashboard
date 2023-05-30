const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),

    children: [{ path: "", component: () => import("pages/LandingPage.vue") }],
  },

  {
    path: "/businesspage",

    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/BusinessPage.vue") }],
  },

  {
    path: "/businessdetail",

    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/BusinessDetail.vue") },
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
