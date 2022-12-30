export interface BaseContext {
    to: string;
    subject: string;
    data: {
        title: string;
        action: string;
        body: string
    }
        
}

export interface ConfirmationContext extends BaseContext {
    name: string;
    username: string;
}

export interface ResetPasswordContext extends BaseContext {
    name: string;
    username: string;
}