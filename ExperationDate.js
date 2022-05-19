
var ExperationDate = "05-20-2023"
$.ajax({
    url: "/Account/SetExperation",
    data: {
        ExperationDate: ExperationDate
    }
});
