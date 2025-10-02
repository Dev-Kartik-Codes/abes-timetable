document.addEventListener('DOMContentLoaded', () => {
    const daySelect = document.getElementById('day-select');
    const timetableCardsContainer = document.getElementById('timetable-cards');

    // Hardcoded timetable data for CSE-19
    const timetableData = [
        { "Batch": "CSE-19", "Day": "Monday", "Time": "08:50-09:40", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "09:40-10:30", "CourseCode": "25EL101", "Coordinator": "PG", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "10:40-12:20", "CourseCode": "25ME152", "Coordinator": "SA,MM", "Venue": "RJ Block I Floor (RJ-109)", "Type": "Practical" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "01:10-02:00", "CourseCode": "25AS101 G1 (T) / 25AS102 G2 (T)", "Coordinator": "YT / BP", "Venue": "BH-306 / BH-309", "Type": "Tutorial" },
        // { "Batch": "CSE-19", "Day": "Monday", "Time": "01:10-02:00", "CourseCode": "25AS102 G2 (T)", "Coordinator": "BP", "Venue": "BH-309", "Type": "Tutorial" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "02:00-02:50", "CourseCode": "25AS101", "Coordinator": "YT", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "02:50-03:40", "CourseCode": "25AI101", "Coordinator": "PPS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "03:40-04:30", "CourseCode": "25AS103", "Coordinator": "TR", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "08:50-09:40", "CourseCode": "25CS101", "Coordinator": "ARS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "09:40-10:30", "CourseCode": "25CS101", "Coordinator": "ARS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "10:40-12:20", "CourseCode": "25EL151", "Coordinator": "PG,AB", "Venue": "RJ-BASEMENT", "Type": "Practical" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "01:10-02:00", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "02:00-02:50", "CourseCode": "25AS101", "Coordinator": "YT", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "02:50-03:40", "CourseCode": "25AI101", "Coordinator": "PPS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "03:40-04:30", "CourseCode": "Mentor-Mentee", "Coordinator": "PG,BP", "Venue": "BH-306", "Type": "Other" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "08:50-10:30", "CourseCode": "25AS151", "Coordinator": "YT, AKP", "Venue": "KC Block III Floor (KC-310)", "Type": "Practical" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "10:40-11:30", "CourseCode": "25EL101", "Coordinator": "PG", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "11:30-12:20", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "01:10-02:00", "CourseCode": "25VA151", "Coordinator": "MN", "Venue": "BH-306", "Type": "Practical" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "02:00-02:50", "CourseCode": "25CS101", "Coordinator": "ARS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "02:50-03:40", "CourseCode": "25CS101", "Coordinator": "ARS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "08:50-10:30", "CourseCode": "25CS151", "Coordinator": "ARS", "Venue": "Computer Centre Basement, Raman Block", "Type": "Practical" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "10:40-11:30", "CourseCode": "25AS101", "Coordinator": "YT", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "11:30-12:20", "CourseCode": "25EL101", "Coordinator": "PG", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "01:10-02:00", "CourseCode": "25AI101", "Coordinator": "PPS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "02:00-02:50", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "02:50-03:40", "CourseCode": "25AS103", "Coordinator": "TR", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "03:40-04:30", "CourseCode": "25AS102 G1 (T) / 25EL101 G2 (T)", "Coordinator": "BP / PG", "Venue": "BH-306 / RJ-303", "Type": "Tutorial" },
        // { "Batch": "CSE-19", "Day": "Thursday", "Time": "03:40-04:30", "CourseCode": "25EL101 G2 (T)", "Coordinator": "PG", "Venue": "RJ-303", "Type": "Tutorial" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "08:50-09:40", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "09:40-10:30", "CourseCode": "25AS103", "Coordinator": "TR", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "10:40-11:30", "CourseCode": "25EL101 G1 (T) / 25AS101 G2 (T)", "Coordinator": "PG / YT", "Venue": "BH-306 / BH-309", "Type": "Tutorial" },
        // { "Batch": "CSE-19", "Day": "Friday", "Time": "10:40-11:30", "CourseCode": "25AS101 G2 (T)", "Coordinator": "YT", "Venue": "BH-309", "Type": "Tutorial" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "11:30-12:20", "CourseCode": "25AS101", "Coordinator": "YT", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "01:10-02:50", "CourseCode": "25VA151", "Coordinator": "MN", "Venue": "Computer Centre Basement, Raman Block", "Type": "Practical" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "02:50-03:40", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "03:40-04:30", "CourseCode": "25EL101", "Coordinator": "PG", "Venue": "BH-306", "Type": "Lecture" }
    ];

    const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    function populateDaySelector() {
        // Get unique days from the data for CSE-19
        const activeDays = [...new Set(timetableData.filter(item => item.Batch === 'CSE-19').map(item => item.Day))];
        const sortedActiveDays = allDays.filter(day => activeDays.includes(day));

        daySelect.innerHTML = '';
        sortedActiveDays.forEach(day => {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day;
            daySelect.appendChild(option);
        });

        // Set default to current day if it's an active day, otherwise default to the first active day
        const today = new Date().toLocaleString('en-US', { weekday: 'long' });
        if (sortedActiveDays.includes(today)) {
            daySelect.value = today;
        } else if (sortedActiveDays.length > 0) {
            daySelect.value = sortedActiveDays[0];
        }
    }

    function generateTimeSlotsForDay(day) {
        const dayClasses = timetableData.filter(item => item.Batch === 'CSE-19' && item.Day === day);
        if (dayClasses.length === 0) return [];

        // Extract all unique time strings for the day
        const uniqueTimes = [...new Set(dayClasses.map(item => item.Time))];

        // Sort time slots chronologically
        uniqueTimes.sort((a, b) => {
            // Function to convert time string (e.g., "08:50") to minutes from midnight
            const timeToMinutes = (timeStr) => {
                let [hour, minute] = timeStr.split(':').map(Number);
                // Heuristic: If hour is 1-5 and we have an 8, 9, 10, or 11 AM class, assume it's PM.
                // This covers common school/college timings without explicit AM/PM in data.
                // Adjust if your specific timetable has classes like 1:00 AM.
                if (hour >= 1 && hour <= 5) { // Assuming these are afternoon classes (1 PM to 5 PM)
                     hour += 12; // Add 12 hours for PM
                }
                return hour * 60 + minute;
            };

            const aStartTime = timeToMinutes(a.split('-')[0]);
            const bStartTime = timeToMinutes(b.split('-')[0]);

            return aStartTime - bStartTime;
        });

        return uniqueTimes;
    }


    function renderTimetable() {
        const selectedDay = daySelect.value;
        timetableCardsContainer.innerHTML = '';

        const timeSlots = generateTimeSlotsForDay(selectedDay);

        if (timeSlots.length === 0) {
            const noClassesMessage = document.createElement('div');
            noClassesMessage.classList.add('timetable-card', 'other');
            noClassesMessage.innerHTML = '<div class="card-time">All Day</div><div class="no-class">No classes scheduled for this day.</div>';
            timetableCardsContainer.appendChild(noClassesMessage);
            return;
        }

        timeSlots.forEach(slot => {
            const classInfo = timetableData.find(item => item.Batch === 'CSE-19' && item.Day === selectedDay && item.Time === slot);
            const card = document.createElement('div');
            card.classList.add('timetable-card');
            let cardContent = `<div class="card-time">${slot.replace('-', ' - ')}</div>`;

            if (classInfo) {
                const typeClass = classInfo.Type.toLowerCase();
                card.classList.add(['lecture', 'practical', 'tutorial'].includes(typeClass) ? typeClass : 'other');
                cardContent += `
                    <div class="card-type">${classInfo.Type}</div>
                    <div class="card-details">
                        <p><strong>Course:</strong> ${classInfo.CourseCode}</p>
                        ${classInfo.Coordinator ? `<p><strong>Coordinator:</strong> ${classInfo.Coordinator}</p>` : ''}
                        ${classInfo.Venue ? `<p><strong>Venue:</strong> ${classInfo.Venue}</p>` : ''}
                    </div>`;
            } else {
                card.classList.add('other');
                cardContent += `<div class="no-class">No class scheduled.</div>`;
            }
            card.innerHTML = cardContent;
            timetableCardsContainer.appendChild(card);
        });
    }

    daySelect.addEventListener('change', renderTimetable);

    // Initial load
    populateDaySelector();
    renderTimetable();
});