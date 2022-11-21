import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import MainGallery from "../pages/MainGallery.vue";
import UploadPhoto from "../pages/UploadPhoto.vue";
import UploadVideo from "../pages/UploadVideo.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/gallery",
    component: MainGallery,
  },
  {
    path: "/upload-photo",
    component: UploadPhoto,
  },
  {
    path: "/upload-video",
    component: UploadVideo,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
