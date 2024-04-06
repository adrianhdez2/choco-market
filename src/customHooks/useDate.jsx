export const useDate = date => {
    const dateString = date;
    const dateObject = new Date(dateString);

    const monthIndex = dateObject.getMonth();
    const year = dateObject.getFullYear();
    const day = dateObject.getDate()
    let month = ''

    const months = [
        "En",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Agto",
        "Sept",
        "Oct",
        "Nov",
        "Dic"]

    month = months[monthIndex]

    return {
        month,
        year,
        day
    }

}