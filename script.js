function searchTrains() {

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;

    if (!from || !to || !date) {
        alert("Please enter From, To and Journey Date.");
        return;
    }

    alert(
        `Searching trains from ${from} to ${to} on ${date}`
    );

    document.getElementById("results").scrollIntoView({
        behavior: "smooth"
    });
}


function bookTrain(trainName) {

    const passengers =
        document.getElementById("passengers").value;

    alert(
        `Booking ${passengers} passenger(s) on ${trainName}.\n\n` +
        "This is a demo booking system."
    );
}
