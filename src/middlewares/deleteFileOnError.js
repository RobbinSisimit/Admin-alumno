import fs from 'fs/promises';
import { join } from 'path';

export const deleteFileOnError = async (err, req, res, next) => {
    if(req.file && req.filePath){
        const filePath = join(req.filePath, req.file.filename);
        try{
            await fs.deleteFile(filePath);
        }catch(err){
            console.log('Error deleting file:', err);
        }
    }
    if(err.code === 400 || err.errors){
        return res.status(400).json({
            success: false,
            error: err.errors
        })
    }
    return res.status(500).json({
        success: false,
        message: err.message
    })
}