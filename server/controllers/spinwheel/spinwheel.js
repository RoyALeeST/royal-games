const WheelOption = require('../../models/question/wheelOption')

//#region  GET FUNCTIONS

    /**
     * Find all Spinner Options
     * @param {req} null No params
     * @return {res} Array containing all Spin Wheel Options
     */
     exports.getAllSpinWheelOptions = async function(req, res){
        const foundOptions = await WheelOption.find({});

        return res.send(foundOptions);
    }

    /**
     * Find a spinwheel option by specified Id
     * @param {req} null No params
     * @param {query} id id of customer that we have to find
     * @return {res} object containing found spinwheel
     */
         exports.findSpinWheelById = async function(req, res){
            try {
                const spinWheelOptionId = req.params.id;
        
                const foundOption = await WheelOption.findById(spinWheelOptionId)
                return res.send(foundOption);
                
            } catch (error) {
                return res.status(422).send({error:'error'})
            }
        }
//#endregion END GET FUNCTIONS

//#region  POST FUNCTIONS

    /**
     * Creates a spinwheel option with data received from client
     * @param {req} spinwheelOption spinwheelOption Object to be used for creation
     * @return {string} id of new spinwheelOption
     */
     exports.createSpinWheelOption = async function(req, res){
        try {
            const { label, value, question } = req.body;
            let newSpinWheelOption = WheelOption({ label, value, question });
            const savedOption = await newSpinWheelOption.save();
            if(savedOption)
            {
                return res.status(200).send({id: savedOption.id});
            }
            console.log("working");
            res.json({working: true});
        } catch (error) {
            return res.status(422).send(error.message? error.message : error)
        }
    }

        /**
     * Creates a spinwheel option with data received from client
     * @param {req} spinwheelOption spinwheelOption Object to be used for creation
     * @return {string} id of new spinwheelOption
     */
         exports.createMultipleSpinWheelOptions = async function(req, res){
            try {
                const { newSpinWheelOptions } = req.body;
                console.log(newSpinWheelOptions);
                const savedOptions = await WheelOption.insertMany(newSpinWheelOptions);
                if(savedOptions)
                {
                    return res.status(200).send(savedOptions);
                }
                console.log("working");
                res.json({working: true});
            } catch (error) {
                return res.status(422).send(error.message? error.message : error)
            }
        }

//#endregion POST GET FUNCTIONS
