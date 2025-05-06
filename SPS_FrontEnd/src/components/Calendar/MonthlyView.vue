<script setup>
import { ref } from 'vue';
import './MonthlyView.css'; 

const currentMonth = ref('May 2023');
const weeks = ref([
    ['30', '1', '2', '3', '4', '5', '6'],
    ['7', '8', '9', '10', '11', '12', '13'],
    ['14', '15', '16', '17', '18', '19', '20'],
    ['21', '22', '23', '24', '25', '26', '27'],
    ['28', '29', '30', '31', '1', '2', '3']
]);

const events = ref([
    { date: '15', title: 'Project Due', type: 'warning' },
    { date: '21', title: 'Meeting', type: 'info' }
]);
</script>

<template>
    <div class="cardc">
        <div class="card-header bg-white">
            <h5 class="mb-0">Calendar</h5>
        </div>
        <div class="card-body">
            <h6 class="text-center mb-4">{{ currentMonth }}</h6>
            <div class="calendar">
                <div class="row g-0 text-center mb-2">
                    <div class="col">Sun</div>
                    <div class="col">Mon</div>
                    <div class="col">Tue</div>
                    <div class="col">Wed</div>
                    <div class="col">Thu</div>
                    <div class="col">Fri</div>
                    <div class="col">Sat</div>
                </div>
                <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="row g-0">
                    <div v-for="(day, dayIndex) in week" :key="dayIndex" 
                         class="col border p-2 position-relative" 
                         :class="{'text-muted': day === '30' || day === '31' || day === '1' && weekIndex === 4}">
                        {{ day }}
                        <div v-for="event in events.filter(e => e.date === day)" 
                             :key="event.title"
                             class="position-absolute bottom-0 start-0 end-0 p-1">
                            <small class="d-block text-truncate" 
                                   :class="`text-${event.type}`">
                                {{ event.title }}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>