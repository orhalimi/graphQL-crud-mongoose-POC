import exampleEndpoint from '../endpoints/example.endpoint';
import express from 'express';

const router = express.Router();
router.post('/example', exampleEndpoint);

export default router;