<script setup>
import { data } from "./../../data/dataMeeting";
console.log(data);
</script>
<template>
  <div className="m-4">
    <div className="d-flex justify-content-between  align-items-baseline mb-1">
      <div>
        <h4>Meeting</h4>
      </div>

      <div>
        <div>
          <button
            type="button"
            class="dropdown-toggle dropdown-toggle-split bg-transparent border-0 text-dark"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>Aug 3, 2021- Aug 7, 2021 </span>
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
      <table class="text-center table table-borderless">
        <thead>
          <tr>
            <th v-for="info in data" :key="info.id" class="col-table${id}">
              <div className="th-wrapper th-wrapper${id}">
                {day}
                <br />
                <span>{date}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="info in data" :key="info.id" class="col-table${id}">
              hours[0]
            </td>
          </tr>
          <tr>
            <td v-for="info in data" :key="info.id" class="col-table${id}">
              hours[1]
            </td>
          </tr>
          <tr>
            <td v-for="info in data" :key="info.id" class="col-table${id}">
              hours[2]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
