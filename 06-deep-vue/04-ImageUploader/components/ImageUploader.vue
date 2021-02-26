<template>
  <div class="image-uploader">
    <label
      class="image-uploader__preview"
      :class="state === states.loading ? 'image-uploader__preview-loading' : ''"
      :style="state === states.loaded ? imageUrl : ``"
      @click="deleteId"
    >
      <span>{{ text }}</span>
      <input
        :disabled="inputDisabled"
        type="file"
        accept="image/*"
        class="form-control-file"
        @change="changeId"
      />
    </label>
  </div>
</template>

<script>
import { ImageService } from '../image-service';

const states = {
  default: 1,
  loading: 2,
  loaded: 3,
}

export default {
  name: 'ImageUploader',

  data() {
    return {
      states: states,
      state: this.imageId ? states.loaded : states.default,
      inputDisabled: false,
    }
  },

  model: {
    prop: 'imageId',
    event: 'change',
  },

  props: {
    imageId: {
      default: null,
    },
  },

  computed: {
    text() {
      if (this.state === states.loading) {
        return "Загрузка..."
      } else if (this.imageId) {
        return "Удалить изображение"
      } else {
        return "Загрузить изображение"
      }
    },
    imageUrl() {
      if (this.imageId) {
        const url = ImageService.getImageURL(this.imageId)
        return `--bg-image: url('${url}')`
      } else return ''
    }
  },

  methods: {
    async changeId(event) {
      this.state = states.loading
      this.inputDisabled = true

      const file = event.target.files[0]
      const uploadedFile = await ImageService.uploadImage(file)
      this.$emit('change', uploadedFile.id)

      this.state = states.loaded
      this.inputDisabled = false
    },
    deleteId() {
      if (this.state === states.loaded) {
        this.$emit('change', null)
        this.state = states.default
      }
    }
  }
};
</script>

<style scoped>
.image-uploader .form-control-file {
  opacity: 0;
  height: 0;
}

.image-uploader .image-uploader__preview {
  --bg-image: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    var(--bg-image);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader .image-uploader__preview > span {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader .image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader .image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
