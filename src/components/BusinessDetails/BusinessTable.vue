<template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Document Title</th>
          <th>Document</th>
          <th>Date</th>
          <th class="text-right">Actions</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Business Adress</td>
          <td
            class="text-right"
            style="color: #31a3a0; font-size: 14px; text-decoration: underline"
          >
            Akinem Ventures.pdf
          </td>
          <td class="text-right">Aug 12,2020 9:37am</td>
          <td class="text-right">view</td>
          <td style="color: #dc3030">
            <BusinessPopUp />
          </td>
        </tr>
        <tr>
          <td class="text-left">Certificate of Incoporation</td>
          <td
            class="text-right"
            style="color: #31a3a0; font-size: 14px; text-decoration: underline"
          >
            Akinem Ventures.pdf
          </td>
          <td class="text-right">Aug 12,2020 9:37am</td>
          <td class="text-right">view</td>
          <td style="color: #dc3030">
            <BusinessPopUp />
          </td>
        </tr>
        <tr>
          <td class="text-left">Form CAC 1.1 or CAC 2/2A</td>
          <td
            class="text-right"
            style="
              color: #31a3a0;
              font-size: 14px;
              text-decoration: underline;
              font-weight: 400;
            "
          >
            Akinem Ventures.pdf
          </td>
          <td class="text-right">Aug 12,2020 9:37am</td>
          <td class="text-right">view</td>
          <td style="color: #dc3030">
            <BusinessPopUp />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import BusinessPopUp from "./BusinessPopUp.vue";
export default {
  components: { BusinessPopUp },
};
</script>
