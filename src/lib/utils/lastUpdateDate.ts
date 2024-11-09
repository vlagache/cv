import dayjs from "dayjs"

import lastModifiedContent from "@assets/data/last_update_date.txt?raw"

export function getLastUpdateDate(): string {
    const formattedDate = dayjs(lastModifiedContent).format("DD/MM/YYYY")
    return formattedDate
}
