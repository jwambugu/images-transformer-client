<template>
  <form>
    <div class="section mt-2">
      <div class="section-title">Choose Photo</div>
      <div class="card">
        <div class="card-body">
          <div class="custom-file-upload" id="file-chooser">
            <input type="file" id="photo-upload" accept=".png, .jpg, .jpeg" />
            <label for="photo-upload">
              <span>
                <strong>
                  <ion-icon
                    name="arrow-up-circle-outline"
                    role="img"
                    class="md hydrated"
                    aria-label="arrow up circle outline"
                  ></ion-icon>
                  <i>Upload a Photo</i>
                </strong>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

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
        type="submit"
        class="btn btn-primary btn-block btn-lg"
        :disabled="!canTransformPhotos"
      >
        Transform
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
      mode: null,
      shapes: 10,
      file: null,
    };
  },
  computed: {
    ...mapState({
      primitiveModes: (state) => state.primitive.primitiveModes,
      numberOfShapes: (state) => state.primitive.numberOfShapes,
    }),
    canTransformPhotos() {
      return this.mode !== null || this.file !== null;
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
  },
};
</script>

<style scoped></style>
