<template>
  <div>
    <div class="appHeader">
      <div class="pageTitle">Transform Photos</div>
      <div class="right"></div>
    </div>

    <div id="appCapsule" class="mb-3">
      <div class="section mt-2" v-if="error">
        <div class="card">
          <div class="card-body">
            <div class="alert alert-danger text-white" role="alert">
              {{ error.message }}
            </div>
          </div>
        </div>
      </div>

      <upload-transform-photos-form
        v-if="!transformedPhotoResponse"
      ></upload-transform-photos-form>

      <div class="section pt-1" v-if="transformedPhotoResponse">
        <div class="card">
          <div class="card">
            <img
              :src="transformedPhotoResponse.url"
              class="card-img-top"
              alt="image"
            />
            <div class="card-body">
              <div class="wallet-card">
                <div class="wallet-footer">
                  <div class="item">
                    <a
                      :href="transformedPhotoResponse.url"
                      :download="transformedPhotoResponse.url"
                    >
                      <div class="icon-wrapper bg-info">
                        <ion-icon
                          name="cloud-download-outline"
                          role="img"
                          class="md hydrated"
                          aria-label="cloud download outline"
                        ></ion-icon>
                      </div>
                      <strong>Download Image</strong>
                    </a>
                  </div>

                  <div class="item">
                    <a
                      class="upload-image-button"
                      @click="showUploadFormHandler"
                    >
                      <div class="icon-wrapper">
                        <ion-icon
                          name="cloud-upload-outline"
                          role="img"
                          class="md hydrated"
                          aria-label="cloud upload outline"
                        ></ion-icon>
                      </div>
                      <strong>Upload Image</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom-navbar></bottom-navbar>
  </div>
</template>

<script>
// @ is an alias to /src

import BottomNavbar from "../components/navigation/BottomNavbar";
import UploadTransformPhotosForm from "../components/forms/UploadTransformPhotosForm";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: { UploadTransformPhotosForm, BottomNavbar },
  data() {
    return {
      showUploadForm: false,
    };
  },
  computed: {
    ...mapState({
      error: (state) => state.utils.error,
      transformedPhotoResponse: (state) =>
        state.primitive.transformedPhotoResponse,
    }),
  },
  methods: {
    showUploadFormHandler() {
      this.$store.dispatch("clearTransformPhotosResponse");
    },
  },
};
</script>

<style scoped>
.upload-image-button:hover {
  cursor: pointer;
}
</style>
