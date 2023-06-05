<template>
  <div class="q-pa-md">
    <div class="cursor-pointer">
      {{ label }}
      <q-popup-edit v-model="label" style="max-width: 400px">
        <div>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <div class="flex">
              <h5>Query Document</h5>
              <q-space />
              <q-btn
                icon="close"
                flat
                round
                dense
                v-close-popup
                style="
                  height: 27px;
                  top: 35px;
                  background-color: #c6c6c6;
                  color: #fff;
                "
              />
            </div>
            <p>Select Document</p>
            <my-select
              :options="selectOptions"
              label="Select Document"
              style="width: 331px; color: #c6c6c6"
            />

            <q-input
              v-model="message"
              outlined
              type="textarea"
              placeholder="Enter description"
              :max-length="maxCharacters"
              @keydown="checkCharacterLimit"
              class="custom-textarea"
              style="width: 331px"
            />
            <p>{{ remainingCharacters }} Characters remaining</p>

            <div>
              <q-btn
                label="Send Query"
                type="submit"
                style="
                  width: 331px;
                  background-color: #121212;
                  color: #fff;
                  radius: 8px;
                  text-transform: capitalize;
                "
              />
            </div>
          </q-form>
        </div>
      </q-popup-edit>
    </div>
  </div>
</template>

<script>
import MySelect from "../UI/TextInput.vue";
export default {
  components: { MySelect },

  data() {
    return {
      label: "Query Document",
      selectOptions: [
        "Business Address",
        "Certificate of Incorporation",
        "Form CAC 1.1 or CAC 2/2A",
      ],
      message: "",
      maxCharacters: 255,
    };
  },
  computed: {
    remainingCharacters() {
      return this.maxCharacters - this.message.length;
    },
  },

  methods: {
    checkCharacterLimit(event) {
      if (
        this.message.length >= this.maxCharacters &&
        event.key !== "Backspace"
      ) {
        event.preventDefault();
      }
    },
  },
};
</script>
