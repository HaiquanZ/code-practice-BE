const testModel = require('../models/test');
var compiler = require('compilex');

var options = {stats : true}; //prints stats on console 
compiler.init(options);

exports.getTestByTaskId = async (req, res, next) => {
    try{
        const taskId = req.params.id;
        const tests = await testModel.getTestByTaskId(taskId);

        console.log(tests);

        compiler.compilePythonWithInput({ OS: "windows" }, req.body.code, tests[0].input, function (data) {
            //console.log(data);
            if (parseInt(data.output, 10) === parseInt(tests[0].output, 10)) {
                res.status(200).json({
                    mark: 10,
                })
                //console.log(mark);
            }else{
                res.status(200).json({
                    mark: 0,
                })
            }
        });
        
    }catch(err){
        next(err);
    }
}

