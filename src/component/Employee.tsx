import React from "react";

interface EmployeeProps {
    
}
 
interface EmployeeState {
    
}
 
class Employee extends React.Component<EmployeeProps, EmployeeState> {
    constructor(props: EmployeeProps) {
        super(props);
    }
    render() { 
        return ( 
            <>
            <div>
            <h1>This is a Employee component</h1>
            </div>
            
            </> 
        );
    }
}
 
export default Employee;