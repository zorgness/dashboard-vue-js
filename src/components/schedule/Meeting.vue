<script setup>
import { data } from "./../../data/dataMeeting";

const handleMouseEnter = (id) => {
  const cellsToSelect = document.querySelectorAll(`.col-table${id}`);
  const thWrapper = document.querySelector(`.th-wrapper${id}`);
  thWrapper.style.background = "transparent";

  cellsToSelect.forEach((element, index) => {
    element.style.border = "2px solid black";
    if (index === 0) {
      element.style.borderStyle = "solid solid none solid ";
    } else if (index === cellsToSelect.length - 1) {
      element.style.borderStyle = "none solid solid solid";
      element.style.borderBottomRightRadius = "10px";
      element.style.borderBottomLeftRadius = "10px";
    } else {
      element.style.borderStyle = "none solid none solid";
    }
  });
};

const handleMouseLeave = (id) => {
  const cellsToSelect = document.querySelectorAll(`.col-table${id}`);
  const thWrapper = document.querySelector(`.th-wrapper${id}`);
  thWrapper.style.background = "#fee5df";
  cellsToSelect.forEach((element) => {
    element.style.border = "2px solid transparent";
  });
};
</script>
<template>
  <div class="m-4">
    <div class="d-flex justify-content-between align-items-baseline mb-1">
      <div>
        <h4>Meeting</h4>
      </div>

      <div>
        <div>
          <button
            type="button"
            class="dropdown-toggle dropdown-toggle-split btn btn-transparent border-0 text-dark"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Aug 3, 2021- Aug 7, 2021
          </button>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#"> Aug 3, 2021- Aug 7, 2021 </a>
            </li>
            <li>
              <a class="dropdown-item" href="#"> Aug 10, 2021- Aug 14, 2021 </a>
            </li>
            <li>
              <a class="dropdown-item" href="#"> Aug 17, 2021- Aug 21, 2021 </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="table-responsive-lg">
      <table class="text-center table table-borderless" id="table-lol">
        <thead>
          <tr>
            <th
              v-for="info in data"
              :key="info.id"
              :class="' col-table col-table' + info.id"
              @mouseenter="handleMouseEnter(info.id)"
              @mouseleave="handleMouseLeave(info.id)"
            >
              <div :class="'th-wrapper th-wrapper' + info.id">
                {{ info.day }}
                <br />
                <span>{{ info.date }}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              v-for="info in data"
              :key="info.id"
              class="col-table"
              :class="'col-table' + info.id"
              @mouseenter="handleMouseEnter(info.id)"
              @mouseleave="handleMouseLeave(info.id)"
            >
              {{ info?.hours?.[0] ?? "_" }}
            </td>
          </tr>
          <tr>
            <td
              v-for="info in data"
              :key="info.id"
              class="col-table"
              :class="'col-table' + info.id"
              @mouseenter="handleMouseEnter(info.id)"
              @mouseleave="handleMouseLeave(info.id)"
            >
              {{ info?.hours?.[1] ?? "_" }}
            </td>
          </tr>
          <tr>
            <td
              v-for="info in data"
              :key="info.id"
              class="col-table"
              :class="'col-table' + info.id"
              @mouseenter="handleMouseEnter(info.id)"
              @mouseleave="handleMouseLeave(info.id)"
            >
              {{ info?.hours?.[2] ?? "_" }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
