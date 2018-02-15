class Employee_View {
    static register(data){
        console.log(`Save data success. Total employees: ${data.length}`);
    }
    static login(employee){
        if(employee !== undefined) console.log(`User ${employee.username} logged in successfully`);
        else console.log(`Username/ password wrong`);
    }
}
module.exports = Employee_View;