$(document).ready(function() {
    // Populate bike brands and models
    const bikeData = {
        "Honda": ["CBR", "Shadow", "Rebel"],
        "Yamaha": ["R1", "MT-07", "FZ6"],
        "Suzuki": ["GSX-R", "SV650", "DR-Z"],
        "Kawasaki": ["Ninja", "Versys", "Vulcan"],
        "Ducati": ["Panigale", "Monster", "Diavel"],
        "BMW": ["S1000RR", "R1250GS", "F750GS"],
        "Harley-Davidson": ["Iron 883", "Fat Boy", "Street 750"]
    };

    const brandSelect = $('#brand');
    const modelSelect = $('#model');

    // Populate brands
    $.each(bikeData, function(brand, models) {
        brandSelect.append(new Option(brand, brand));
    });

    // Update models when brand changes
    brandSelect.on('change', function() {
        modelSelect.empty();
        const selectedBrand = $(this).val();
        const models = bikeData[selectedBrand];
        $.each(models, function(index, model) {
            modelSelect.append(new Option(model, model));
        });
    });

    // Initial populate models
    brandSelect.trigger('change');

    // Custom alert box functionality
    $(".close, #option1, #option2").on("click", function() {
        $("#customAlert").hide();
    });

    $("#predictionForm").on("submit", function(event) {
        event.preventDefault();
        // Logic for prediction goes here
        $("#result").text("Calculating...");
        setTimeout(function() {
            // Mock result after 2 seconds
            $("#result").text("The predicted price for your bike is $3,500.");
            $("#alertMessage").text("Prediction complete! Check the result below.");
            $("#customAlert").show();
        }, 2000);
    });
});
