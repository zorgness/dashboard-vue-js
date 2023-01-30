<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import * as chartConfig from "../../data/dataProgress";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Doughnut,
  },
  data() {
    return chartConfig;
  },
};
</script>

<template>
  <div class="m-4">
    <div
      class="projet-title-container d-flex justify-content-between align-items-baseline"
    >
      <div>
        <h4>Project Progress</h4>
      </div>

      <div>
        <h4>...</h4>
      </div>
    </div>

    <div
      class="projet-title-container-mobile d-flex justify-content-between align-items-baseline"
    >
      <div class="d-flex align-items-baseline">
        <h4>Progress</h4>
        <p class="mx-3 text-secondary">Illustration Template</p>
      </div>

      <div>
        <i class="fa-solid fa-square-pen"></i>
      </div>
    </div>

    <div class="project-container">
      <div
        class="project-container-header d-flex justify-content-between align-items-baseline"
      >
        <div>
          <h6>Illustration Pattern</h6>
        </div>

        <div class="d-flex">
          <i class="fa-solid fa-download mx-3"></i>
          <i class="fa-solid fa-square-pen"></i>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="doughnut-container position-relative">
            <div
              class="badge badge-doughnut badge-65 position-absolute rounded-circle"
            >
              <p class="text-black mt-2">{{ data.datasets[0].data[1] }}%</p>
            </div>
            <span
              class="badge badge-doughnut badge-35 position-absolute rounded-circle"
            >
              <p class="text-black mt-2">{{ data.datasets[0].data[0] }}%</p>
            </span>

            <Doughnut :data="data" :options="options" />
          </div>

          <div>
            <ul class="doughnut-list">
              <li class="li-cartoon">
                <span class="text-black">
                  <h6>Cartoon Illustration</h6>

                  <p class="text-secondary">Modern storytelling</p>
                </span>
              </li>
              <li class="li-abstract">
                <span class="text-black">
                  <h6>Abstact Pattern</h6>

                  <p class="text-secondary">Geometric Shapes</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
