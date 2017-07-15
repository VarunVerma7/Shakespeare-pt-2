// Morris.js Charts sample data for SB Admin template
$(function () {
    // Area Chart
    Morris.Area({
        parseTime: false
        , element: 'morris-area-chart'
        , data
        , xkey: 'person'
        , ykeys: ['count']
        , pointSize: 2
        , hideHover: 'auto'
        , resize: true
    });
    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart'
        , data: [{
            label: "Macbeth"
            , value: 719
        }, {
            label: "Lady Macbeth"
            , value: 265
        }, {
            label: "Malcolm"
            , value: 219
        }]
        , resize: true
    });
    // Line Chart
});
var data = [{
        person: 'First Witch'
        , count: 62
    }
    , {
        person: 'Second Witch'
        , count: 27
    }


    , {
        person: 'MACBETH'
        , count: 719
    }
    , {
        person: 'BANQUO'
        , count: 113
    }
    , {
        person: 'ANGUS'
        , count: 21
    }
    , {
        person: 'LADY MACBETH'
        , count: 265
    }
    , {
        person: 'Messenger'
        , count: 23
    }
    , {
        person: 'FLEANCE'
        , count: 2
    }
    , {
        person: 'Porter'
        , count: 46
    }
    , {
        person: 'MACDUFF'
        , count: 180
    }
    , {
        person: 'DONALBAIN'
        , count: 10
    }
    , {
        person: 'Old Man'
        , count: 11
    }
    , {
        person: 'ATTENDANT'
        , count: 1
    }
    , {
        person: 'First Murderer'
        , count: 30
    }
    , {
        person: 'Second Murderer'
        , count: 15
    }
    , {
        person: 'Both Murderers'
        , count: 2
    }
    , {
        person: 'Servant'
        , count: 5
    }
    , {
        person: 'Third Murderer'
        , count: 8
    }
    , {
        person: 'Lords'
        , count: 3
    }
    , {
        person: 'HECATE'
        , count: 39
    }
    , {
        person: 'Lord'
        , count: 21
    }
    , {
        person: 'First Apparition'
        , count: 2
    }
    , {
        person: 'Second Apparition'
        , count: 4
    }

   ]