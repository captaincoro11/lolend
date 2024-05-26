const Task = require('../model/task')

exports.dashboard  = async(req,res)=>{

    const {title,descripition,date} = req.body;
    if(!title || !descripition || !date){
        return res.status(400).json({
            messasge:"Data not enough"
        })

    };

    
    const newTask = await Task.create({
        task:title,
        description:descripition,
        DueDate:date
    });

    res.status(200).json({
        messasge:"New Task has been succesfully added",
        newTask
    })
};

exports.showAllTasks = async(req,res)=>{
    try{
    const tasks = await Task.find({});
    
    res.status(200).json({
        message:"Tasks fetched successfully",
        tasks
    })


    }

    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
};

exports.deleteData = async(req,res)=>{
    try {
        const {id}= req.params;
        console.log(id)
        

       
       
        
        const task = await Task.findByIdAndDelete({
           _id: id
        });

        if(!task){
            return res.status(400).json({

                message:"Some Eroror"
            })
        }

        const tasks =await Task.find({});
        res.status(200).json({
            message:"Task Deleted Succesfully",
            tasks
        })

        
    } catch (error) {
        res.status(500).json({
            message:"Any Error",
            error:error
        })

        
    }

};

exports.updateData = async(req,res)=>{
    try{
        const {newtitle ,newdescripition, newstatus,newdate } = req.body;
        const {id} = req.params;
      
    
        const update = await Task.findByIdAndUpdate(id,{
            task:newtitle,
            description:newdescripition,
            status:newstatus,
            DueDate:newdate
        });
    
        res.status(200).json({
            message:"Updated Successfully",
            update
        })
    

    }
    catch(error){
        
        res.status(500).json({
            message:"Internal Server Error",
            
        })
    

    }
   
}