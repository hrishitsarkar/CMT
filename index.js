// let customers = [];
//       const capacity = 25;
//       let seatsLeft = 25;
//       let countRef = React.createRef();
//       let nameRef = React.createRef();
//       let phoneNumberRef = React.createRef();

//       // Create form submit handler here
//       const getTime = () => {
//       let now = new Date();
//       var hours = now.getHours();
//   	var minutes = now.getMinutes();
//     var seconds = now.getSeconds();
//   	var ampm = hours >= 12 ? 'pm' : 'am';
//   	hours = hours % 12;
//   	hours = hours ? hours : 12; // the hour '0' should be '12'
//   	minutes = minutes < 10 ? '0'+minutes : minutes;
//     seconds = seconds < 10 ? '0'+seconds : seconds;
//   	var strTime = hours + ':' + minutes + ":" + seconds +' ' + ampm;
//     return strTime;
//       }
//       let checkedOut = false;
//       const checkOutHandler = () => {
//       const time = getTime();
//       checkedOut = true;


//       customers.forEach((customer) => {
//         // if()
//       })
//       rootElement.render(<App />);
//       }
//       const submitHandler = (e) => {
//       	e.preventDefault();
      
//       	const count = countRef.current.value;
//       	const name = nameRef.current.value;
//       	const phone = phoneNumberRef.current.value;
//         if(count > seatsLeft){
//             alert('Guest count exceeds capacity');
//         }else{
//             if(seatsLeft <= capacity && seatsLeft > 0){
//             seatsLeft -= count;
//             }
//             const time = getTime();
//             customers.push(<><td>{`${count}`}</td><td>{`${name}`}</td><td>{`${phone}`}</td><td>{`${time}`}</td><td>-</td><td onClick = {checkOutHandler}>Click to Checkout</td><td onClick = {deleteHandler}>Delete</td></>)
//             console.log(customers);
//         }
            
//             rootElement.render(<App />);
//         }
        
        
      	
      	
      
      
    
      
      
      
      

//       const deleteHandler = () => {
//         const count = parseInt(countRef.current.value);
//         let newSeatsLeft = `${seatsLeft + count}`;
//         console.log(newSeatsLeft);
        
//         if(!checkedOut){
//             seatsLeft = newSeatsLeft;
//         }
//         customers = [];
//         rootElement.render(<App />);
//       }
      

//       const App = () => (
//         <div className="App" style={{ textAlign: "center" }}>
//           <div>
//             <h2>Total Capacity: {capacity} </h2>
//             <h2>Seats Left: {seatsLeft} </h2>
            
//           </div>
//           <form onSubmit = {submitHandler}>
            

            
//         		<input ref = {countRef} type = "number" placeholder = "Guests Count" />
//                 <input ref = {nameRef} placeholder = "Primary Guest Name" />
//                 <input ref = {phoneNumberRef} type = "number" placeholder = "Phone Number" />
//                 <button>Add Entry</button>
                
//         	</form>
			
//           {/* Create a form here */}

//           {/* Complete table to show records of customers */}
//           <table border="1px" style={{ margin: "auto" }}>
//         	<thead>
//         		<tr>
//         			<th>Count</th>
//                     <th>Name</th>
//                     <th>Phone</th>
//                     <th>Check In</th>
//                     <th>Check Out</th>
//                     <th>Status</th>
                    
//                     <th>Remove Entry</th>
//         		</tr>
//         	</thead>
//             <tbody>
            
//             {customers.map((one,index) => (<tr key = {index}>{one}</tr>))}
            
//             </tbody>
//         </table>
//         </div>
//       );

//       const rootElement = ReactDOM.createRoot(document.getElementById("root"));
//       rootElement.render(<App />);