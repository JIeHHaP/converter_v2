<template>
  <form
    class="drop-zone-wrapper"
    :class="{ active: activeForm }"
    method="post"
    enctype="multipart/form-data"
  >
    <label
      for="photo"
      class="drop-zone"
      @dragenter.prevent="toggleActive"
      @dragstart.prevent
      @dragend.prevent
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drag.prevent
      @drop.prevent="dropAndSend"
      >Перетащите файлы сюда или нажмите</label
    >
    <input
      hidden
      type="file"
      id="photo"
      accept="image/*"
      multiple
      @change.prevent="addAndSend"
    />
  </form>
</template>
<script>
// import axios from "axios";
export default {
  name: "dad-input",
  data() {
    return {
      photos: [],
      webSocetId: "",
      activeForm: false,
    };
  },
  methods: {
    toggleActive() {
      this.activeForm = !this.activeForm;
      console.log(this.activeForm);
    },
    addPhotos(event) {
      this.photos = [...this.photos, ...event.currentTarget.files];
      console.log(this.photos);
    },
    addPhotosDrop(event) {
      this.photos = [...this.photos, ...event.dataTransfer.files];
      console.log(this.photos);
    },
    sendPhotos() {
      // const fData = new FormData();
      // this.photos.forEach(function (photo) {
      //   fData.append("photo", photo, photo.name);
      // });
      // axios
      //   .post(
      //     "http://185.173.94.239/converter/good_get_converted_image.php",
      //     fData
      //   )
      //   .then((res) => {
      //     console.log(res);
      //   });
      const socket = new WebSocket(
        "ws://185.173.94.239:10501?id=" + this.webSocetId
      );
      socket.addEventListener("message", (event) => {
        console.log("Message from server ", event.data);
      });
      socket.addEventListener("open", () => {
        socket.send("Hello Server!");
      });
    },
    addAndSend(event) {
      this.addPhotos(event);
      this.sendPhotos();
    },
    dropAndSend(event) {
      this.toggleActive();
      this.addPhotosDrop(event);
      this.sendPhotos();
    },
    getId() {
      this.webSocetId = Math.random().toString(16).slice(2);
    },
  },
  mounted() {
    this.getId();
  },
};
</script>
<style scoped>
input {
  height: 100%;
  width: 100%;
}

.btn-width {
  width: 20em;
  margin-top: 1em;
}

.drop-zone-wrapper {
  width: 500px;
  height: 250px;
  background: #f5f5f5;
  border: 1px dotted #0f0f10;
  border-radius: 16px;
}

.drop-zone {
  font-size: 20px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.drop-zone-wrapper:hover {
  background: rgba(0, 0, 0, 0.88);
  color: #f5f5f5;
  border: 1px dotted #f5f5f5;

  -webkit-transition: background-color 0.3s ease;
  -o-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
}

.drop-zone-wrapper:active {
  -webkit-transform: scale(0.98);
  -ms-transform: scale(0.98);
  -o-transform: scale(0.98);
  transform: scale(0.98);
}

.active {
  background: rgba(0, 0, 0, 0.88);
  color: #f5f5f5;
  border: 1px dotted #f5f5f5;
  -webkit-transform: scale(0.98);
  -ms-transform: scale(0.98);
  -o-transform: scale(0.98);
  transform: scale(0.98);
}
</style>
