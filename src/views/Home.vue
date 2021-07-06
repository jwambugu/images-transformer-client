<template>
  <div>
    <div class="appHeader">
      <div class="pageTitle">Transform Photos</div>
      <div class="right"></div>
    </div>

    <div id="appCapsule" class="mb-3">
      <upload-transform-photos-form></upload-transform-photos-form>
    </div>
    <bottom-navbar></bottom-navbar>
  </div>
</template>

<script>
// @ is an alias to /src

import BottomNavbar from "../components/navigation/BottomNavbar";
import UploadTransformPhotosForm from "../components/forms/UploadTransformPhotosForm";

export default {
  name: "Home",
  components: { UploadTransformPhotosForm, BottomNavbar },
};
</script>
