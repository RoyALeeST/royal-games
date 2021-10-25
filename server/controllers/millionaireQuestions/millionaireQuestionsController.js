const MillionaireQuestion = require('../../models/question/millionaireQuestion')

//#region  GET FUNCTIONS

    /**
     * Find all Spinner Options
     * @param {req} null No params
     * @return {res} Array containing all Spin Wheel Options
     */
     exports.getAllMillionaireQuestions = async function(req, res){
        const foundQuestions = await MillionaireQuestion.find({});

        return res.send(foundQuestions);
    }

    /**
     * Find a spinwheel option by specified Id
     * @param {req} null No params
     * @param {query} id id of customer that we have to find
     * @return {res} object containing found spinwheel
     */
         exports.findMillionaireQuestionByDifficulty = async function(req, res){
            try {
                const questionDifficulty = req.params.difficulty;
        
                // Get the count of all questions
                MillionaireQuestion.count({difficulty: questionDifficulty}).exec(function (err, count) {

                    // Get a random entry
                    var random = Math.floor(Math.random() * count)
                
                    // Again query all questions but only fetch one offset by our random #
                    MillionaireQuestion.findOne({difficulty: questionDifficulty}).skip(random).exec(
                    function (err, result) {
                        // Tada! random question
                        return res.send(result);
                    })
                })
                
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
     exports.createQuestion = async function(req, res){
        try {
            const { question, difficulty, correctAnswer, invalidAnswers } = req.body;
            let millionaireQuestion = MillionaireQuestion({ difficulty, correctAnswer, question, invalidAnswers });
            const savedQuestion = await millionaireQuestion.save();
            if(savedQuestion)
            {
                return res.status(200).send({id: savedQuestion.id});
            }
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
         exports.createQuestions = async function(req, res){
            try {
                const { newQuestions } = req.body;
                const savedQuestions = await MillionaireQuestion.insertMany(newQuestions);
                if(savedQuestions)
                {
                    return res.status(200).send({success: true});
                } else {
                    return res.status(422).send({error: "Could not save questions, please contact the developper"})

                }
            } catch (error) {
                return res.status(422).send(error.message? error.message : error)
            }
        }

//#endregion POST GET FUNCTIONS
