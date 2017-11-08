export class IFlashMessage {
    messages: string[];
    type: string = 'success';
    dismissible: boolean = false;
    timeout: number | boolean = false;
}