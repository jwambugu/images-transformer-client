<template>
  <div>
    <div class="appHeader">
      <div class="pageTitle">Transform Photos</div>
      <div class="right"></div>
    </div>

    <div id="appCapsule" class="mb-3">
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
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckd1"
                />
                <label class="form-check-label" for="customCheckd1">$ 50</label>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckd2"
                />
                <label class="form-check-label" for="customCheckd2"
                  >$ 100</label
                >
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckd3"
                />
                <label class="form-check-label" for="customCheckd3"
                  >$ 200</label
                >
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
    </div>

    <bottom-navbar></bottom-navbar>
  </div>
</template>

<script>
// @ is an alias to /src

import BottomNavbar from "../components/navigation/BottomNavbar";

export default {
  name: "Home",
  components: { BottomNavbar },
};
</script>
