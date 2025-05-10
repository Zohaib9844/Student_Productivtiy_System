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
        <div class="card-header calender-header">
    <h5 class="mb-0">Calender</h5>
</div>
        <div class="card-body">
            <h6 class="text-center mb-4 calendar-month">{{ currentMonth }}</h6>
            <div class="calendar">
                <div class="row g-0 text-center mb-2 calendar-days">
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
                         class="col border p-2 position-relative calendar-day" 
                         :class="{'text-muted': day === '30' || day === '31' || day === '1' && weekIndex === 4}">
                        {{ day }}
                        <div v-for="event in events.filter(e => e.date === day)" 
                             :key="event.title"
                             class="position-absolute bottom-0 start-0 end-0 p-1">
                            <small class="d-block text-truncate calendar-event" 
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

<style scoped>
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.cardc {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
}

.card-header h5 {
    font-weight: 600;
    color: #333; /* Darker color for readability */
}

.calendar-month {
    font-size: 20px;
    font-weight: bold;
    color: #4A4A4A;
}

.calendar-days {
    font-weight: bold;
    font-size: 18px;
    color: #3E3E3E;
}

.calendar-day {
    font-size: 16px;
    color: #555; /* Balanced tone for clarity */
}

.calendar-event {
    font-size: 14px;
    font-weight: 600;
}

.calender-header {
    background-color: white;
    color: black;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Ensure hover effect triggers when the entire card is hovered */
.cardc:hover .calender-header {
    background-color: #fec89a !important;
    color: white !important;
}

</style>
