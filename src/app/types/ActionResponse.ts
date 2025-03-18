/**
 * only use within a server action
 * only use wrapped in a promise 
 */
export default interface ActionRespose {
    success: boolean;
    status: number;
    title: string;
    description: string;
}