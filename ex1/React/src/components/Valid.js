import Joi from 'joi';

const memberSchema = Joi.object({
    patientId: Joi.string().regex(/^\d{9}$/).required().messages({ 'string.pattern.base': 'ID must contain exactly 9 digits' }),
    FirstName: Joi.string().required(),
    LastName: Joi.string().required(),
    //Street: Joi..required(),
    //NumberHouse
    BirthDate: Joi.date().required(),
    Phone: Joi.string().regex(/^\d{9,10}$/).required().messages({ 'string.pattern.base': 'Phon number must contain 9 or 10 digits' }),
    MobilePhone: Joi.string().regex(/^\d{10}$/).messages({ 'string.pattern.base': 'Mobile must contain exactly 10 digits' }).allow(''),
    //Manager
    PositiveResult: Joi.date().required(),
    Recovery: Joi.date().required(),
    //ArrVaccinations
    address: Joi.object({
        city: Joi.string().required(),
        street: Joi.string().required(),
        housenumber: Joi.string().required(),
    }), 
    
    
    // photo: Joi.string()
});


const validateMemberData = (data) => {
    return memberSchema.validate(data);
};

export { validateMemberData };