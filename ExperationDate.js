
var ExperationDate = "05-19-2022"
$.ajax({
    url: "/Account/SetExperation",
    data: {
        ExperationDate: ExperationDate
    }
});
