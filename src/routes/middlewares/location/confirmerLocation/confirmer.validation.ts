import { body, ValidationChain } from 'express-validator';

const ConfirmerValidation: ValidationChain[] = [
    body("longitude").exists(),
    body("latitude").exists(),
    body("pushToken").exists()
]

export default ConfirmerValidation;