const Customer = require('../../models/user/customer')


//#region  GET FUNCTIONS

    /**
     * Find all customers
     * @param {req} null No params
     * @return {res} Array containing all Customers
     */
    exports.getAllCustomers = async function(req, res){
        const foundCustomers = await Customer.find({});

        return res.send(foundCustomers);
    }

    /**
     * Find a customer by specified Id
     * @param {req} null No params
     * @param {query} id id of customer that we have to find
     * @return {res} Array containing all Customers
     */
    exports.findCustomerById = async function(req, res){
        try {
            const customerId = req.params.id;
    
            const foundCustomer = await Customer.findById(customerId)
            return res.send(foundCustomer);
            
        } catch (error) {
            return res.status(422).send({error:'error'})
        }
    }
//#endregion END GET FUNCTIONS

//#region POST FUNCTIONS
    /**
     * Creates a customer with data received from client
     * @param {req} customer customer Object to be used for creation
     * @return {string} id of new customer
     */
    exports.createCustomer = async function(req, res){
        try {
            const { firstName, lastName, secondLastName, dateOfBirth, address, reputation } = req.body;
            let newCustomer = Customer({ firstName, lastName, secondLastName, dateOfBirth, address, reputation });
            const savedUser = await newCustomer.save();
            if(savedUser)
            {
                return res.status(200).send({id: savedUser.id});
            }
        } catch (error) {
            return res.status(422).send(error.message? error.message : error)
        }
    }
//#endregion