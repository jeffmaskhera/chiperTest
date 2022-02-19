export const formatFullDateYear = (date, iso = false) => {
    if (!iso) {
        date += 'Z'
    }
    const newDate = new Date(date);
    const formatDate = newDate.toLocaleDateString("es-MX");
    return formatDate;
};