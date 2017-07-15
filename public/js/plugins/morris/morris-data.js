// Morris.js Charts sample data for SB Admin template
$(function () {
    // Area Chart
    Morris.Area({
        element: 'morris-area-chart'
        , data: []
        , xkey: 'period'
        , ykeys: ['count']
        , pointSize: 2
        , hideHover: 'auto'
        , resize: true
    });
    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart'
        , data: []
        , resize: true
    });
    // Line Chart
});