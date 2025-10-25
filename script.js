document.addEventListener('DOMContentLoaded', () => {
    const daySelect = document.getElementById('day-select');
    const timetableCardsContainer = document.getElementById('timetable-cards');

    // Hardcoded timetable data for CSE-19
    const timetableData = [
        { "Batch": "CSE-19", "Day": "Monday", "Time": "08:50-09:40", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "09:40-10:30", "CourseCode": "25EL101", "Coordinator": "PG", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "10:40-12:20", "CourseCode": "25ME152", "Coordinator": "SA,MM", "Venue": "RJ Block I Floor (RJ-109)", "Type": "Practical" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "01:10-02:00", "CourseCode": "25VA151", "Coordinator": "MN", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "02:00-02:50", "CourseCode": "25AS101", "Coordinator": "YT", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "02:50-03:40", "CourseCode": "25AI101", "Coordinator": "PPS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Monday", "Time": "03:40-04:30", "CourseCode": "25AS103", "Coordinator": "TR", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "08:50-09:40", "CourseCode": "25CS101", "Coordinator": "ARS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "09:40-10:30", "CourseCode": "25CS101", "Coordinator": "ARS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "10:40-12:20", "CourseCode": "25EL151", "Coordinator": "PG,AB", "Venue": "RJ-BASEMENT", "Type": "Practical" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "01:10-02:00", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "02:00-02:50", "CourseCode": "25AS101", "Coordinator": "YT", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "02:50-03:40", "CourseCode": "25AI101", "Coordinator": "PPS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Tuesday", "Time": "03:40-04:30", "CourseCode": "25EL101", "Coordinator": "PG", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "08:50-10:30", "CourseCode": "25AS151", "Coordinator": "YT, AKP", "Venue": "KC Block III Floor (KC-310)", "Type": "Practical" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "10:40-11:30", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "11:30-12:20", "CourseCode": "25AS101", "Coordinator": "YT", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "01:10-02:00", "CourseCode": "25EL101", "Coordinator": "PG", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "02:00-02:50", "CourseCode": "25CS101", "Coordinator": "ARS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Wednesday", "Time": "02:50-03:40", "CourseCode": "25CS101", "Coordinator": "ARS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "08:50-09:40", "CourseCode": "25CS151", "Coordinator": "ARS", "Venue": "BH-306", "Type": "Practical" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "09:40-10:30", "CourseCode": "25AS101", "Coordinator": "YT", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "10:40-11:30", "CourseCode": "25AS101", "Coordinator": "YT", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "11:30-12:20", "CourseCode": "25EL101", "Coordinator": "PG", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "01:10-02:00", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "02:00-02:50", "CourseCode": "25AI101", "Coordinator": "PPS", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "02:50-03:40", "CourseCode": "25AS103", "Coordinator": "TR", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Thursday", "Time": "03:40-04:30", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "08:50-09:40", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "09:40-10:30", "CourseCode": "25AS103", "Coordinator": "TR", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "10:40-11:30", "CourseCode": "25EL101", "Coordinator": "PG", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "11:30-12:20", "CourseCode": "25AS101", "Coordinator": "YT", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "01:10-02:00", "CourseCode": "25VA151", "Coordinator": "MN", "Venue": "KC Block V Floor (KC-509)", "Type": "Practical" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "02:00-02:50", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "02:50-03:40", "CourseCode": "25AS102", "Coordinator": "BP", "Venue": "BH-306", "Type": "Lecture" },
        { "Batch": "CSE-19", "Day": "Friday", "Time": "03:40-04:30", "CourseCode": "Mentor-Mentee", "Coordinator": "PG,BP", "Venue": "BH-306", "Type": "Other" }
    ];

    const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    function populateDaySelector() {
        const activeDays = [...new Set(timetableData.filter(item => item.Batch === 'CSE-19').map(item => item.Day))];
        const sortedActiveDays = allDays.filter(day => activeDays.includes(day));

        daySelect.innerHTML = '';
        sortedActiveDays.forEach(day => {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day;
            daySelect.appendChild(option);
        });

        const today = new Date().toLocaleString('en-US', { weekday: 'long' });
        if (sortedActiveDays.includes(today)) {
            daySelect.value = today;
        } else if (sortedActiveDays.length > 0) {
            daySelect.value = sortedActiveDays[0];
        }
    }

    function renderTimetable() {
        const selectedDay = daySelect.value;
        timetableCardsContainer.innerHTML = '';

        // Helper function to convert time strings (e.g., "08:50") to minutes for sorting
        const timeToMinutes = (timeStr) => {
            let [hour, minute] = timeStr.split(':').map(Number);
            // Heuristic to treat 1-5 as PM hours (13:00-17:00)
            if (hour >= 1 && hour <= 5) {
                hour += 12;
            }
            return hour * 60 + minute;
        };

        // 1. Get and sort all classes for the selected day
        const dayClasses = timetableData
            .filter(item => item.Batch === 'CSE-19' && item.Day === selectedDay)
            .sort((a, b) => {
                const aStartTime = timeToMinutes(a.Time.split('-')[0]);
                const bStartTime = timeToMinutes(b.Time.split('-')[0]);
                return aStartTime - bStartTime;
            });

        if (dayClasses.length === 0) {
            const noClassesMessage = document.createElement('div');
            noClassesMessage.classList.add('timetable-card', 'other');
            noClassesMessage.innerHTML = '<div class="card-time">All Day</div><div class="no-class">No classes scheduled for this day.</div>';
            timetableCardsContainer.appendChild(noClassesMessage);
            return;
        }

        // 2. Aggregate consecutive classes
        const aggregatedClasses = [];
        if (dayClasses.length > 0) {
            // Start with the first class, creating a copy to avoid modifying original data
            aggregatedClasses.push({ ...dayClasses[0]
            });

            for (let i = 1; i < dayClasses.length; i++) {
                const currentClass = dayClasses[i];
                const lastClass = aggregatedClasses[aggregatedClasses.length - 1];

                const lastEndTime = lastClass.Time.split('-')[1];
                const currentStartTime = currentClass.Time.split('-')[0];

                // Check for merge conditions: same course, coordinator, venue, type, and consecutive time
                if (
                    lastEndTime === currentStartTime &&
                    lastClass.CourseCode === currentClass.CourseCode &&
                    lastClass.Coordinator === currentClass.Coordinator &&
                    lastClass.Venue === currentClass.Venue &&
                    lastClass.Type === currentClass.Type
                ) {
                    // Merge by updating the end time of the last class
                    lastClass.Time = `${lastClass.Time.split('-')[0]}-${currentClass.Time.split('-')[1]}`;
                } else {
                    // Not a consecutive class, so add it as a new entry
                    aggregatedClasses.push({ ...currentClass
                    });
                }
            }
        }

        // 3. Render the aggregated timetable cards
        aggregatedClasses.forEach(classInfo => {
            const card = document.createElement('div');
            card.classList.add('timetable-card');
            const typeClass = classInfo.Type.toLowerCase();
            card.classList.add(['lecture', 'practical'].includes(typeClass) ? typeClass : 'other');

            let emoji = '🗓️'; // Default emoji
            if (typeClass === 'lecture') emoji = '📘';
            if (typeClass === 'practical') emoji = '👨🏻‍💻';

            card.innerHTML = `
                <div class="card-time">${classInfo.Time.replace('-', ' - ')}</div>
                <div class="card-type">${classInfo.Type} ${emoji}</div>
                <div class="card-details">
                    <p><strong>Course:</strong> ${classInfo.CourseCode}</p>
                    ${classInfo.Coordinator ? `<p><strong>Coordinator:</strong> ${classInfo.Coordinator}</p>` : ''}
                    ${classInfo.Venue ? `<p><strong>Venue:</strong> ${classInfo.Venue}</p>` : ''}
                </div>`;
            timetableCardsContainer.appendChild(card);
        });
    }

    // Initial setup
    populateDaySelector();
    renderTimetable();

    // Add event listener for day changes
    daySelect.addEventListener('change', renderTimetable);
});