export const useDate = date => {
    const dateString = date;
    const dateObject = new Date(dateString);

    const monthIndex = dateObject.getMonth();
    const year = dateObject.getFullYear();
    const day = dateObject.getDate()
    let month = ''

    const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"]

    month = months[monthIndex]

    return {
        month,
        year,
        day
    }

}