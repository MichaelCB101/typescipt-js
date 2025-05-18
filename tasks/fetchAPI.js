async function fetchUsers(){
    try{
        const response = await fetch('https://reqres.in/api/users?page=1');
        console.log("response received...")
        //check if the reponse is ok (status 200 preferably)
        if(!response.ok){
            throw new Error('HTTP error! Status: ${response.status}');
        }

        const data = await response.json();

        //log each users email and names

        data.data.forEach(user => {
            console.log(`${user.first_name} ${user.last_name} - ${user.email}`);
        });

    } catch(error) {
        console.error('Error fetching users:', error);
        console.log("error fetching response...");
    }
}

//call the function
fetchUsers();