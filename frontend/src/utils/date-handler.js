// const getStartOfWeek = (date) => {
//     const startOfWeek = new Date(date);
//     const day = startOfWeek.getDay();
//     const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
//     startOfWeek.setDate(diff);
//     startOfWeek.setHours(0, 0, 0, 0);
//     return startOfWeek;
//   };
  
//   const getEndOfWeek = (startOfWeek) => {
//     const endOfWeek = new Date(startOfWeek);
//     endOfWeek.setDate(startOfWeek.getDate() + 6);
//     endOfWeek.setHours(23, 59, 59, 999);
//     return endOfWeek;
//   };
  
export const filterOrdersByWeek = (orders) => {
  const today = new Date();

 
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); 
  endOfWeek.setHours(23, 59, 59, 999);

  return orders.filter(order => {
    const orderDate = new Date(order.order_date);
    return orderDate >= startOfWeek && orderDate <= endOfWeek;
  });
};
  
 
export  const calculateMonthlyEarnings = (orders) => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    return orders
      .filter(order => {
        const orderDate = new Date(order.order_date);
        return order.order_status === "Completed" && orderDate.getMonth() === currentMonth && orderDate.getFullYear() === currentYear;
      })
      .reduce((total, order) => total + parseFloat(order.total_amount), 0);
  };
  

  
  
  