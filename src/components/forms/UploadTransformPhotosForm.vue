<template>
  <form enctype="multipart/form-data" @submit.prevent="transformPhotos">
    <div class="section mt-2">
      <div class="section-title">Choose Photo</div>

      <div class="card">
        <div class="card-body">
          <div class="custom-file-upload" id="file-chooser">
            <input
              type="file"
              id="photo-upload"
              accept="image/*"
              @change="uploadPhotos"
            />
            <label for="photo-upload">
              <span>
                <strong>
                  <ion-icon
                    name="arrow-up-circle-outline"
                    role="img"
                    class="md hydrated"
                    aria-label="arrow up circle outline"
                  ></ion-icon>
                  <i>{{ labelText }}</i>
                </strong>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!--    <div class="section mt-2" v-if="photosToPreview.length">-->
    <!--      <div-->
    <!--        class="card bg-dark text-white"-->
    <!--        v-for="(url, key) in photosToPreview"-->
    <!--        :key="key"-->
    <!--      >-->
    <!--        <img :src="url" class="card-img overlay-img" alt="image" />-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="section mt-2">
      <div class="section-title">Select a Shape To Use</div>

      <div class="card">
        <div class="card-body p-0">
          <div class="input-list">
            <div
              class="form-check"
              v-for="primitiveMode in primitiveModes"
              :key="primitiveMode.mode"
            >
              <input
                type="radio"
                class="form-check-input"
                :id="'checkbox-' + primitiveMode.mode"
                v-model="mode"
                :value="primitiveMode.mode"
              />
              <label
                class="form-check-label"
                :for="'checkbox-' + primitiveMode.mode"
              >
                {{ primitiveMode.name }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section mt-2">
      <div class="section-title">Select Number of Shapes</div>
      <div class="card">
        <div class="card-body p-0">
          <div class="input-list">
            <div class="form-check" v-for="n in numberOfShapes" :key="n">
              <input
                type="radio"
                class="form-check-input"
                :id="'number-of-shapes' + n"
                :value="n"
                v-model="shapes"
              />
              <label class="form-check-label" :for="'number-of-shapes' + n">
                {{ n }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section mt-2">
      <button
        :disabled="!canTransformPhotos"
        v-if="!transformingPhotos"
        type="submit"
        class="btn btn-primary btn-block btn-lg"
      >
        Transform
      </button>

      <button
        v-else
        class="btn btn-primary btn-block btn-lg"
        type="button"
        disabled
      >
        <span
          class="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UploadTransformPhotosForm",
  data() {
    return {
      mode: 0,
      shapes: 10,
      formData: null,
      photosToPreview: [],
      transformingPhotos: false,
    };
  },
  computed: {
    ...mapState({
      primitiveModes: (state) => state.primitive.primitiveModes,
      numberOfShapes: (state) => state.primitive.numberOfShapes,
    }),
    canTransformPhotos() {
      return this.mode !== null && this.formData !== null;
    },
    labelText() {
      const filesCount = this.photosToPreview.length;

      return !filesCount
        ? "Upload a Photo"
        : `${filesCount} photo(s) selected.`;
    },
  },
  created() {
    this.getPrimitiveModes();
    this.getNumberOfShapes();
  },
  methods: {
    getPrimitiveModes() {
      this.$store.dispatch("getPrimitiveModes");
    },
    getNumberOfShapes() {
      this.$store.dispatch("getNumberOfShapes");
    },
    uploadPhotos(e) {
      const formData = new FormData();
      const fileList = e.target.files;

      Array.from(Array(fileList.length).keys()).map((x) => {
        formData.append("photos", fileList[x], fileList[x].name);

        let url = URL.createObjectURL(fileList[x]);

        this.photosToPreview.push(url);
      });

      this.formData = formData;
    },
    async transformPhotos() {
      this.transformingPhotos = true;

      let formData = this.formData;

      formData.append("mode", this.mode);
      formData.append("shapes", this.shapes);

      try {
        await this.$store.dispatch("transformPhotos", formData);

        this.transformingPhotos = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped></style>
