class Attendance {
    constructor(teacherName, attendanceDay, period, room, building) {
        this.teacherName = teacherName;
        this.attendanceDay = attendanceDay;
        this.period = period;
        this.room = room;
        this.building = building;
    }

    toJson() {
        return {
            "nomeDoProfessor": this.teacherName,
            "diasAtendimento": this.attendanceDay,
            "periodo": this.period,
            "sala": this.room,
            "predio": this.building,
        }
    }
}

function chooseAttendandeDay(json, day) {
    let attendance = json.diasAtendimento;

    return (attendance.includes(day));
}

function chooseRoom(json) {
    let room = json.sala;

    if (room >= 1 && room <= 5) {
        return json.predio[0];
    } else if (room >= 6 && room <= 10) {
        return json.predio[1];
    } else if (room >= 11 && room <= 15) {
        return json.predio[2];
    } else if (room >= 16 && room <= 20) {
        return json.predio[3];
    } else if (room >= 21 && room <= 25) {
        return json.predio[4];
    } else {
        return "NaN";
    }
}

function showPeriodTime(json) {
    let period = json.periodo;

    if (period === "Integral") {
        return "08:00 - 23:00"
    } else if (period === "Noturno") {
        return "17:30 - 23:00"
    } else {
        return "NaN"
    }
}

module.exports.chooseRoom = chooseRoom;
module.exports.showPeriodTime = showPeriodTime;
module.exports.chooseAttendandeDay = chooseAttendandeDay;
module.exports.Attendance = Attendance;