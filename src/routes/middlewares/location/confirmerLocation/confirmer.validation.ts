import { body, ValidationChain } from 'express-validator';

const ConfirmerValidation: ValidationChain[] = [
    body("longitude").exists(),
    body("latitude").exists()
]

export default ConfirmerValidation;