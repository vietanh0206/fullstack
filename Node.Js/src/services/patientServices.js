
import db from "../models/index";
require('dotenv').config();
import emailService from './emailService';

const { reject } = require("lodash")

let postBookAppointment = (data) => {
    return new Promise (async (resolve, reject) => {
        try {
            // truyền lên email >>> tìm user >>> Có thì trả về user. Nếu k có thì tạo mới  
            if (!data.email || !data.doctorId || !data.timeType || !data.date 
                || !data.fullName
                ) {
                resolve ({
                    errCode: 1,
                    errMessage: "Missing parameter"
                })
            } else {

                await emailService.sendSimpleEmail({
                    receiverEmail: data.email,
                    patientName: data.fullName,
                    time: data.timeString,
                    doctorName: data.doctorName,
                    language: data.language,
                    redirectLink: 'https://www.youtube.com/'
                })



                //upsert patient
                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        roleId: 'R3'
                    }
                });

                //create a booking record
                if(user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: { patientId: user[0].id },
                        defaults: {
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType
                        }
                        
                    })
                }

                resolve({
                    errCode: 0,
                    errMessage: 'Save infor patient succeed!'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
} 

module.exports = {
    postBookAppointment: postBookAppointment
}