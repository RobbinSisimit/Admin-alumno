import { response, request } from 'express';
import Course from './course.model.js';

export const saveCourse = async (res, req) =>{
    try{
        const data = req.body

        const course = await Course.create({
            name: data.name,
            description: data.description,
        })

        return res.status(200).json({
            message: 'Course registered successfully',
            couseDetails:{
                course: course.name
            }
        })
    }catch(error){
        res.status(500).json({
            success: false,
            msg: 'Error al crear curso',
            error
        })
    }
}