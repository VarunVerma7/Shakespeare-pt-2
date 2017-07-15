var data = [
    {
        person: 'MACBETH'
        , count: 719
    }
    , {
        person: 'LADY MACBETH'
        , count: 265
    }
    , {
        person: 'MALCOLM'
        , count: 212
    }
    , {
        person: 'MACDUFF'
        , count: 180
    }
    , {
        person: 'ROSS'
        , count: 135
    }
    , {
        person: 'BANQUO'
        , count: 113
    }
    , {
        person: 'LENNOX'
        , count: 74
    }
    , {
        person: 'DUNCAN'
        , count: 70
    }
    , {
        person: 'First Witch'
        , count: 62
    }
    , {
        person: 'Porter'
        , count: 46
    }
    , {
        person: 'Doctor'
        , count: 45
    }
    , {
        person: 'LADY MACDUFF'
        , count: 41
    }
    , {
        person: 'HECATE'
        , count: 39
    }
    , {
        person: 'Sergeant'
        , count: 35
    }
    , {
        person: 'SIWARD'
        , count: 30
    }
    , {
        person: 'First Murderer'
        , count: 30
    }
    , {
        person: 'Second Witch'
        , count: 27
    }
    , {
        person: 'Third Witch'
        , count: 27
    }

    , {
        person: 'Messenger'
        , count: 23
    }
    , {
        person: 'Gentlewoman'
        , count: 23
    }
    , {
        person: 'ANGUS'
        , count: 21
    }
    , {
        person: 'Lord'
        , count: 21
    }
    , {
        person: 'Son'
        , count: 20
    }
    , {
        person: 'Second Murderer'
        , count: 15
    }
    , {
        person: 'MENTEITH'
        , count: 12
    }
    , {
        person: 'Old Man'
        , count: 11
    }
    , {
        person: 'CAITHNESS'
        , count: 11
    }
    , {
        person: 'DONALBAIN'
        , count: 10
    }
    , {
        person: 'Third Murderer'
        , count: 8
    }
    , {
        person: 'YOUNG SIWARD'
        , count: 7
    }
    , {
        person: 'Third Apparition'
        , count: 5
    }
    , {
        person: 'Servant'
        , count: 5
    }
    , {
        person: 'SEYTON'
        , count: 5
    }
    , {
        person: 'Second Apparition'
        , count: 4
    }
    , {
        person: 'Lords'
        , count: 3
    }
    , {
        person: 'Both Murderers'
        , count: 2
    }
    , {
        person: 'FLEANCE'
        , count: 2
    }
    , {
        person: 'First Apparition'
        , count: 2
    }
    , {
        person: 'ATTENDANT'
        , count: 1
    }
    , {
        person: 'Soldiers'
        , count: 1
    }
]
$(function () {
    data.forEach((data) => {
        $('#tablebody').append(`<tr><td>${data.person}</td><td>${data.count}</td></tr>`)
    })
});