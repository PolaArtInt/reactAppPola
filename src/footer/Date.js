const MyDate = () => {
	const dayToday = new Date().getDate(),
		monthToday = new Date().getMonth() +1,
		yearToday = new Date().getFullYear();
	
	return dayToday + '.' + monthToday + '.' + yearToday;
}
export default MyDate;