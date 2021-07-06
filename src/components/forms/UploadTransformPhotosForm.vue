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
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="number-of-shapes"
              />
              <label class="form-check-label" for="number-of-shapes"
                >$ 50</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section mt-2">
      <button type="submit" class="btn btn-primary btn-block btn-lg">
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
    };
  },
  computed: {
    ...mapState({
      primitiveModes: (state) => state.primitive.primitiveModes,
    }),
  },
  created() {
    this.getPrimitiveModes();
  },
  methods: {
    getPrimitiveModes() {
      this.$store.dispatch("getPrimitiveModes");
    },
  },
};
</script>

<style scoped></style>
