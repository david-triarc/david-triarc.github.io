const targetDate = moment('2024-08-10T20:00:00');

        // Function to calculate remaining time
        function updateRemainingTime() {
            const now = moment();
            const duration = moment.duration(targetDate.diff(now));

            const days = Math.floor(duration.asDays());
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();

            document.getElementById('remaining-days').innerHTML = `${days} Tagen`;
            document.getElementById('remaining-hours').innerHTML = `${hours} Stunden`;
            document.getElementById('remaining-minutes').innerHTML = `${minutes} Minuten`;
            document.getElementById('remaining-seconds').innerHTML = `${seconds} Sekunden`;
        }

        // Update remaining time every second
        setInterval(updateRemainingTime, 1000);

        // Initial call to display remaining time immediately
        updateRemainingTime();