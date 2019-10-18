export function getDisplayTime(timestamp, hasHour = true) {
    const d = new Date(parseInt(timestamp));
    if (d) {
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();

        let DD = d.getDate();
        let MM = d.getMonth();
        const YY = d.getFullYear();

        if (DD < 10) {
            DD = '0' + DD;
        }
        if (MM < 10) {
            MM = '0' + MM;
        }

        if (hasHour) {
            if (h < 10) {
                h = '0' + h;
            }
            if (m < 10) {
                m = '0' + m;
            }
            if (s < 10) {
                s = '0' + s;
            }
            return `${h}:${m}:${s} - ${DD}/${MM}/${YY}`;
        }
        else {
            return `${DD}/${MM}/${YY}`;
        }
    }
}